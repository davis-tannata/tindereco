export const RecommendationNoMatch = ({reset} : {reset : ()=>void})=> {
    return(
        <div className="flex flex-col items-center justify-center text-center h-full gap-4">
           <span className="text-2xl"> Oops, looks like we cannot find you any match</span>
           <span className="text-2xl">Try again next time</span>
           <button className="btn btn-primary" onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}