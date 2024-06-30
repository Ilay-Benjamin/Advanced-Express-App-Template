import { loadAppConfig } from './../../../config/app/app.config';
export const getUserById = async (id) => {
    var usersData = loadAppConfig().database.tables.users.data;
    console.log('\nUsers Data:');
    console.table(usersData);
    console.log('\n');
    var searchUser = usersData.find((user) => user.id === id) || null;
    return searchUser;
};
