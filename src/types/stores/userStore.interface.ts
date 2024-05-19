import { IStoreAPI } from "../common";
import { IUserProfile } from "../userProfile.interface";

export interface IUserStore extends IStoreAPI{
    userData : IUserProfile | undefined;
    fetchUserData : ()=>Promise<void>;
}