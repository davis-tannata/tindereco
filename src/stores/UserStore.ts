import { create } from "zustand";
import { IUserStore } from "../types/stores/userStore.interface";
import axios from "axios";


export const useUserStore = create<IUserStore>((set,get)=> ({
    userData : undefined,
    loading : true,
    error : null,
    fetchUserData: async()=>{
        set({loading : true})

        const {userData} = get()

        if(userData){
            set({loading: false})
            return
        }

        try {
            const result = await axios.get('/user.json')
            set({userData : result.data, loading : false, error : null})
        } catch (error : unknown) {

            if (error instanceof Error && 'message' in error) {
                set({ error: error.message, loading: false });
            } else {
                set({ error: 'An unknown error occurred', loading: false });
            }
        }
    },
}))