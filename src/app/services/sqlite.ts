import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class Sqlite {
  private sqlite: SQLiteConnection;
  private db!: SQLiteDBConnection;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async init() {
    this.db = await this.sqlite.createConnection(
      'mydb',
      false,
      'no-encryption',
      1,
      true
    );

    await this.db.open();

    // créer table
    await this.db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
      );
    `);
  }

  // ajouter
  async addUser(name: string) {
    return await this.db.run('INSERT INTO users (name) VALUES (?);', [name]);
  }

  // lire
  async getUsers() {
    const res = await this.db.query('SELECT * FROM users;');
    return res.values;
  }

  // supprimer
  async deleteUser(id: number) {
    return await this.db.run('DELETE FROM users WHERE id = ?;', [id]);
  }
}
