import { Database } from "sqlite3";
import { open } from "sqlite";

// Create a singleton for the database object, easier to access from other files
export let db: any | null = null;

async function createTable(db, name: string, columns: {name: string, value: any}[]) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS ${name} (
            ${columns.map((column) => {
                return `${column.name} ${column.value}`
            }).join(',')}
        );
    `);
}

export async function initialise() {
    db = await open({
        filename: "chat.db",  // Rename this if preferred
        driver: Database,
    });

    await createTable(db, 'messages', [
        {
            name: 'messageId',
            value: 'INTEGER PRIMARY KEY AUTOINCREMENT'
        },
        {
            name: 'roomId',
            value: 'INTEGER'
        },
        {
            name: 'userId',
            value: 'INTEGER'
        },
        {
            name: 'content',
            value: 'TEXT'
        }
    ]);

    await createTable(db, 'rooms', [
        {
            name: 'roomId',
            value: 'INTEGER PRIMARY KEY AUTOINCREMENT'
        },
        {
            name: 'capacity',
            value: 'INT'
        },
        {
            name: 'name',
            value: 'NVARCHAR(50)'
        }
    ]);

    await createTable(db, 'users', [
        {
            name: 'userId',
            value: 'INTEGER PRIMARY KEY AUTOINCREMENT'
        },
        {
            name: 'name',
            value: 'NVARCHAR(50)'
        }
    ]);
}