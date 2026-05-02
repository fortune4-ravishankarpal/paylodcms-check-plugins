import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_roles_permissions" AS ENUM('*', '*.read', '*.create', '*.update', '*.delete', 'pages.*', 'pages.create', 'pages.read', 'pages.update', 'pages.delete', 'pages.manage', 'pages.publish', 'posts.*', 'posts.create', 'posts.read', 'posts.update', 'posts.delete', 'posts.manage', 'posts.publish', 'media.*', 'media.create', 'media.read', 'media.update', 'media.delete', 'media.manage', 'categories.*', 'categories.create', 'categories.read', 'categories.update', 'categories.delete', 'categories.manage', 'users.*', 'users.create', 'users.read', 'users.update', 'users.delete', 'users.manage', 'redirects.*', 'redirects.create', 'redirects.read', 'redirects.update', 'redirects.delete', 'redirects.manage', 'roles.*', 'roles.create', 'roles.read', 'roles.update', 'roles.delete', 'roles.manage');
  CREATE TYPE "public"."enum_roles_visible_for" AS ENUM('users');
  CREATE TABLE "roles_permissions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "roles_visible_for" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_visible_for",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "roles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar,
  	"active" boolean DEFAULT true,
  	"protected" boolean DEFAULT false,
  	"config_hash" varchar,
  	"config_version" numeric DEFAULT 0,
  	"system_managed" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users" ADD COLUMN "role_id" integer;
  ALTER TABLE "users" ADD COLUMN "name" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "roles_id" integer;
  ALTER TABLE "roles_permissions" ADD CONSTRAINT "roles_permissions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "roles_visible_for" ADD CONSTRAINT "roles_visible_for_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "roles_permissions_order_idx" ON "roles_permissions" USING btree ("order");
  CREATE INDEX "roles_permissions_parent_idx" ON "roles_permissions" USING btree ("parent_id");
  CREATE INDEX "roles_visible_for_order_idx" ON "roles_visible_for" USING btree ("order");
  CREATE INDEX "roles_visible_for_parent_idx" ON "roles_visible_for" USING btree ("parent_id");
  CREATE UNIQUE INDEX "roles_name_idx" ON "roles" USING btree ("name");
  CREATE INDEX "roles_updated_at_idx" ON "roles" USING btree ("updated_at");
  CREATE INDEX "roles_created_at_idx" ON "roles" USING btree ("created_at");
  ALTER TABLE "users" ADD CONSTRAINT "users_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_roles_fk" FOREIGN KEY ("roles_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_role_idx" ON "users" USING btree ("role_id");
  CREATE INDEX "payload_locked_documents_rels_roles_id_idx" ON "payload_locked_documents_rels" USING btree ("roles_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "roles_permissions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roles_visible_for" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roles" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "roles_permissions" CASCADE;
  DROP TABLE "roles_visible_for" CASCADE;
  DROP TABLE "roles" CASCADE;
  ALTER TABLE "users" DROP CONSTRAINT "users_role_id_roles_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_roles_fk";
  
  DROP INDEX "users_role_idx";
  DROP INDEX "payload_locked_documents_rels_roles_id_idx";
  ALTER TABLE "users" DROP COLUMN "role_id";
  ALTER TABLE "users" DROP COLUMN "name";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "roles_id";
  DROP TYPE "public"."enum_roles_permissions";
  DROP TYPE "public"."enum_roles_visible_for";`)
}
