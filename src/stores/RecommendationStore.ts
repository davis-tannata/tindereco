import { create } from "zustand";
import { IRecommendationStore } from "../types/stores/recommendationStore.interface";
import { useProfileDatabaseStore } from "./ProfileDatabaseStore";
import { useUserStore } from "./UserStore";
import { ProfileRecommendationService } from "../services/ProfileRecommendationService";
import { persist } from "zustand/middleware";
import dayjs from "dayjs";


export const useRecommendationStore = create<IRecommendationStore>()(persist(
    (set,get)=> ({
        recommendations : undefined,
        error : null,
        loading : true,
        lastRecommendDate : new Date(0),
        recommendationsCache : undefined,
        reset(){
            localStorage.clear()
            const {fetchRecommendations} = get()
            fetchRecommendations(true,true)
        },
        async fetchRecommendations(newReco? : boolean, reset? : boolean) {
            set({loading : true})
    
            const {recommendations,error, lastRecommendDate} = get() 
            let {recommendationsCache} = get()
    
            const currentDate = dayjs()

            
            const isNextDate = currentDate.isAfter(lastRecommendDate,'day')

            if(!isNextDate && !newReco && !!recommendations && !error){
                console.log(recommendations)
                set({loading : false})
                return
            }
            
            if(!recommendationsCache || reset){
                const {fetchUserData, error : userDataError} = useUserStore.getState()
    
                const {fetchUserProfiles, error : profileDbError} = useProfileDatabaseStore.getState()
                
                await Promise.all([fetchUserData(), fetchUserProfiles()])
        
                const {userData} = useUserStore.getState()
    
                const {profiles} = useProfileDatabaseStore.getState()
                if(userDataError || profileDbError || !userData || !profiles){            
                    set({error : "Error in fetching required data", loading : false})
                    return
                }
        
                const result = ProfileRecommendationService.calculateProfileWeights(userData,profiles).sort((a,b)=> b.weight - a.weight)
                set({recommendationsCache : result})
                recommendationsCache = result
            }
           

            const recoResult = recommendationsCache?.splice(0,10)
            set({
                    recommendations : recoResult, 
                    loading : false, 
                    error : null, 
                    lastRecommendDate : currentDate.toDate(), 
                    recommendationsCache :recommendationsCache
                })
    
        },
    }),
    {
        name: 'recommendation-storage'
    }
))