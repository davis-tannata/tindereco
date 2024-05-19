import { useState } from "react";
import { IProfileRecommendation } from "../../types/recommendation.interface";

export const RecommendationCard = ({
	data,
}: {
	data: IProfileRecommendation;
}) => {
	const [isLoading, setLoading] = useState(true);
	return (
		<div className="card w-full aspect-square shadow-xl bg-secondary/10">
			<img
				src={`https://robohash.org/${data.name}`}
				alt="Shoes"
				className={`object-cover w-full h-full rounded-lg ${
					isLoading ? "skeleton animate-pulse" : ""
				}`}
				onLoad={() => setLoading(false)}
				onError={() => setLoading(false)}
			/>
			<div className="bg-gradient-to-t from-black/70 to-transparent flex flex-col absolute w-full py-2.5 px-4 bottom-0 inset-x-0 bg-transparent text-white leading-4 gap-2">
				<div className="text-shadow-lg shadow-black font-bold text-sm sm:text-lg">
					{data.name} ({data.weight}%)
				</div>
				<div className="text-shadow-lg text-xs sm:text-md">{data.university}</div>
			</div>
		</div>
	);
};
