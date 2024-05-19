import { IUserProfile } from "../types/userProfile.interface";

export const ProfileDatabaseService = {

    attachId(profiles : IUserProfile[]){

        //id 1 is user

        return profiles.map((data,index)=>({
            ...data,
            id : index
        }))

    }
}