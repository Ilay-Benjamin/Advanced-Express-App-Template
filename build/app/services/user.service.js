import * as UserModel from "../models/user.model";
export async function getUserProfile(id) {
    const userProfile = await UserModel.getUserById(id);
    return userProfile;
}
