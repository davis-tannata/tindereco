export const RecommendationLoading = () => {
    return (
		<div className="grid grid-cols-2 w-full gap-4 px-4">
			{new Array(10).fill(null).map((_, index) => (
				<div className="skeleton w-full aspect-square shadow-xl skeleton animate-pulse" key={index}>
                </div>
			))}
		</div>
	);
}