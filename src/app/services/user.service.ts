import * as UserModel from "../models/user.model";
import { User } from "../types/user.type";


export async function getUserProfile(id: string): Promise<User | null> {
    const userProfile = await UserModel.getUserById(id);
    return userProfile;
}