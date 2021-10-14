import { createConnection, getConnectionOptions, Connection } from "typeorm";

let connection: Connection;

export const connect = async () => {
    // read connection options from ormconfig file (or ENV variables)
    const potions = await getConnectionOptions();

    // create a connection using modified connection options
    connection = await createConnection(potions);
}

export const connected = () => connection !== null;