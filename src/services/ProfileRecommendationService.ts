import { instanceToInstance } from "class-transformer";
import { IUserProfile } from "../types/userProfile.interface";
import { IProfileRecommendation } from "../types/recommendation.interface";

const INTEREST_WEIGHT = 0.45
const UNIVERSITY_WEIGHT = 0.45
const RANDOM_WEIGHT = 0.1

const MAX_COUNTED_INTEREST = 3

function getRandomInt(min :number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

export const ProfileRecommendationService = {

    calculateProfileWeights(user : IUserProfile, profiles : IUserProfile[]){

        const userInterests = new Set(user.interests)
        const result = [] as IProfileRecommendation[]
        profiles.map(x=>{
            if(x.id === user.id)
                return

            const interestWeight = this.calculateInterestWeight(userInterests,x)
            const universityWeight = x.university === user.university? UNIVERSITY_WEIGHT : 0;
            const randomWeight = (getRandomInt(0,100) * RANDOM_WEIGHT) * 0.01

            const totalWeight = interestWeight + universityWeight + randomWeight

            const newReco = instanceToInstance(x) as IProfileRecommendation
            newReco.weight = Math.round(totalWeight * 100)
            console.log(`${x.name} ${interestWeight}, ${universityWeight} , ${randomWeight}`)
            
            result.push(newReco)
            return newReco
        })


        return result
    },
    calculateInterestWeight(userInterests : Set<string>, target: IUserProfile){

        let total = 0

        target.interests.map(x=>{
            if(userInterests.has(x))
                total++
        })

        return (total / Math.min(userInterests.size, MAX_COUNTED_INTEREST)) * INTEREST_WEIGHT
    }

}