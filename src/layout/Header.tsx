import { useRecommendationStore } from "../stores/RecommendationStore";

export const Header = () => {

    const { reset } =
    useRecommendationStore((state) => state);

    return (
        <header className="shadow-lg top-0 w-full z-10 h-16">
            <div className="flex justify-between items-center p-3">
                <div className="flex flex-row items-center justify-between w-full px-2">
                    <div className="text-2xl lg:text-4xl font-bold text-primary ">Tindereco</div>
                    <button className="btn btn-outline btn-info btn-sm" onClick={reset}>Reset</button>
                </div>
            </div>
        </header>
    );
}
