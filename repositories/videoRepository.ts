import db from '@/services/sqlite';
import { SQLiteVariadicBindParams } from 'expo-sqlite';

export const VideoRepository = {
  async getAll(): Promise<Video[]> {
    const result = db.getAllSync<Video>('SELECT * FROM videos ORDER BY id DESC');
    return result;
  },

  async getById(id: number): Promise<Video | null> {
    const result = db.getFirstSync<Video>('SELECT * FROM videos WHERE id = ?', [id]);
    return result ?? null;
  },

  async create(data: Omit<Video, 'id'>): Promise<number> {
    const { uri, name, description, duration, createdAt, updatedAt } = data;

    const stmt = db.prepareSync(`
      INSERT INTO videos (uri, name, description, duration, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.executeSync([
      uri,
      name,
      description ?? '',
      duration,
      createdAt ?? '',
      updatedAt ?? '',
    ]);

    return result.lastInsertRowId!;
  },

  async update(id: number, data: Partial<Video>): Promise<void> {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(', ');
    const values = Object.values(data);

    db.runSync(`UPDATE videos SET ${fields} WHERE id = ?`, [...values] as SQLiteVariadicBindParams);
  },

  async remove(id: number): Promise<void> {
    db.runSync('DELETE FROM videos WHERE id = ?', [id]);
  },
};
