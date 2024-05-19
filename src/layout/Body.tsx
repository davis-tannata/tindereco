import { ReactNode } from "react";

export const Body = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex-grow w-full flex flex-col overflow-y-auto max-h-full">
			{children}
		</main>
	);
};
