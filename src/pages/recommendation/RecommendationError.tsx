export const RecommendationError = ({retry, error} : {retry : ()=>Promise<void>, error :string})=> {
    return(
        <div className="flex flex-col items-center justify-center text-center h-full gap-4">
          <div className="text-2xl">{`There's an error : ${error}`}</div>
          <button className="btn btn-primary" onClick={retry}>Retry</button>
        </div>
     )
}