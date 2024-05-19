import { IStoreAPI } from "../common";
import { IUserProfile } from "../userProfile.interface";

export interface IProfileDatabaseStore extends IStoreAPI{
    profiles : IUserProfile[] | undefined;
    fetchUserProfiles : ()=>Promise<void>
} 