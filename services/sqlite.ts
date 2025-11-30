import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('video_diary.db');

export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      uri TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      duration NUMERIC NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `);
};

export default db;
