import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";

export const Layout = ({children}: {children : ReactNode}) => {
	return (
		<div className="self-center flex flex-col min-h-screen w-full max-w-2xl max-h-screen max-w-[672px]">
			<Header />
			<Body>
				{children}
			</Body>
			<Footer />
		</div>
	);
};
