import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bottom-0 w-full z-10">
            <div className="flex justify-around items-center w-full brn-group top-shadow">
                <button className="border-0 bg-transparent hover:bg-transparent btn flex flex-col items-center grow hover:text-white text-primary">
                    <Link className="text-xl md:text-3xl" to={"/"}>Home</Link>
                </button>
                <button className="border-0 bg-transparent hover:bg-transparent btn flex flex-col items-center grow text-accent hover:text-white">
                    <Link className="text-xl md:text-3xl " to={"/recommendation"}>Recommendation</Link>
                </button>
            </div>
        </footer>
    );
};
