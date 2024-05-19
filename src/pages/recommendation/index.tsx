import { useEffect } from "react";
import { useRecommendationStore } from "../../stores/RecommendationStore";
import { RecommendationLoading } from "./RecommendationLoading";
import { RecommendationError } from "./RecommendationError";
import { RecommendationNoMatch } from "./RecommendationNoMatch";
import dayjs from "dayjs";
import { RecommendationCard } from "./RecommendationCard";


export const RecommendationPage = () => {
	const { error, fetchRecommendations, loading, recommendations,reset } =
		useRecommendationStore((state) => state);

	useEffect(() => {
		fetchRecommendations();

		const setDailyTimeout = () => {
            const now = dayjs();
            const nextStartDay = dayjs().add(1, 'day').startOf('day');
            const totalMs = nextStartDay.diff(now);

			const timeoutId = setTimeout(() => {
                //will fetch new recommendations
                console.log("timeout runs")
                fetchRecommendations(true)
				setDailyTimeout();
			}, totalMs);


			return () => clearTimeout(timeoutId);
		};

		setDailyTimeout();
	}, [fetchRecommendations]);

	if (loading) return <RecommendationLoading />;

	if (error || !recommendations)
		return <RecommendationError retry={fetchRecommendations} error={error ?? ""} />;

	if (recommendations.length === 0) return <RecommendationNoMatch reset={reset}/>;

	return (
		<div className="grid grid-cols-2 w-full gap-4 px-4">
			{recommendations.map((data) => (
				<RecommendationCard key={data.id} data={data}/>
			))}
		</div>
	);
};
