import { create } from "zustand";
import { IProfileDatabaseStore } from "../types/stores/profileDatabaseStore.interface";
import axios from "axios";
import { ProfileDatabaseService } from "../services/ProfileDatabaseService";

export const useProfileDatabaseStore = create<IProfileDatabaseStore>((set,get)=>({
    profiles : undefined,
    loading : true,
    error : null,
    async fetchUserProfiles() {
           
        set({loading : true})

        const {profiles} = get()

        if(profiles){
            set({loading: false})
            return
        }

        try {
            const result = await axios.get('/db.json')
            set({profiles : ProfileDatabaseService.attachId(result.data), loading : false, error : null})
        } catch (error : unknown) {

            if (error instanceof Error && 'message' in error) {
                set({ error: error.message, loading: false });
            } else {
                set({ error: 'An unknown error occurred', loading: false });
            }
        }
    },
}))