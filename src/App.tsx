import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from "./layout";
import { HomePage } from "./pages/home";
import { RecommendationPage } from "./pages/recommendation";

export default function App() {
	return (
		<div className="min-h-full min-w-full flex flex-col">
			
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route index element={<HomePage />} />
					<Route path="Recommendation" element={<RecommendationPage />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}


function NoMatch() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-4">
			<div className="text-2xl">Nothing to see here!</div>
			<p>
				<Link to="/" className="text-info hover:underline">Go to the home page</Link>
			</p>
		</div>
	);
}
