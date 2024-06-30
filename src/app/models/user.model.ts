import { loadAppConfig } from './../../../config/app/app.config';
import { User } from "../types/user.type";


export const getUserById = async (id: string): Promise<User | null> => {
    var usersData = loadAppConfig().database.tables.users.data;
    console.log('\nUsers Data:');
    console.table(usersData);
    console.log('\n');
    var searchUser = usersData.find((user: User) => user.id === id)|| null;
    return searchUser;
};

