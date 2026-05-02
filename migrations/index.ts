import * as migration_20260502_044955 from './20260502_044955';
import * as migration_20260502_063604 from './20260502_063604';
import * as migration_20260502_065522 from './20260502_065522';

export const migrations = [
  {
    up: migration_20260502_044955.up,
    down: migration_20260502_044955.down,
    name: '20260502_044955',
  },
  {
    up: migration_20260502_063604.up,
    down: migration_20260502_063604.down,
    name: '20260502_063604',
  },
  {
    up: migration_20260502_065522.up,
    down: migration_20260502_065522.down,
    name: '20260502_065522'
  },
];
