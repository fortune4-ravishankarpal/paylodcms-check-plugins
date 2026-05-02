import {
  translator,
  copyResolver,
  //   googleResolver,
  //   openAIResolver,
  //   libreResolver,
} from '@payload-enchants/translator'
export const translatorConfig = translator({
  // collections with the enabled translator in the admin UI
  collections: ['posts', 'pages'],
  // globals with the enabled translator in the admin UI
  globals: ['footer', 'header'],
  // add resolvers that you want to include, examples on how to write your own in ./plugin/src/resolvers
  resolvers: [
    copyResolver(),
    // googleResolver({
    //   apiKey: process.env.GOOGLE_API_KEY!,
    // }),
    // openAIResolver({
    //   apiKey: process.env.OPENAI_KEY!,
    // }),
    // libreResolver({
    //   apiKey: process.env.LIBRE_KEY!,
    // }),
  ],
})
