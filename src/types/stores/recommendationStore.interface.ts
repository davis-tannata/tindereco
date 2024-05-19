import { IStoreAPI } from "../common";
import { IProfileRecommendation as IProfileRecommendation } from "../recommendation.interface";

export interface IRecommendationStore extends IStoreAPI{
    recommendations : IProfileRecommendation[] | undefined
    fetchRecommendations : (newReco? : boolean, reset? : boolean)=>Promise<void>
    lastRecommendDate : Date
    recommendationsCache : IProfileRecommendation[] | undefined
    reset : ()=>void
}