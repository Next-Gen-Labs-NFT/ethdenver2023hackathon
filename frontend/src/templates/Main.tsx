/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Wallet } from "@/components/wallet";
import { MenuDrop } from "@/components/menu";

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => {
	const router = useRouter();

	useEffect(() => {
		const isSubdomain = location.hostname.split(".").length > 2;

		if (isSubdomain) {
			router.push("/dashboard");
		}
	}, []);

	return (
		<div className="w-full px-1 text-white antialiased">
			{props.meta}

			<div className="min-h-screen flex flex-col">
				<header className="py-3 border-b border-gray-700">
					<div className="mx-auto max-w-screen-lg flex flex-row justify-between items-center">
						<Link
							href="/"
							className="text-2xl font-semibold text-primary-200"
						>
							GovBlocks
						</Link>
						<div className="flex flex-row justify-end items-center space-x-2">
							<Wallet />
						</div>
					</div>
				</header>

				<main className="py-8 flex flex-col grow">
					{props.children}
				</main>
			</div>
		</div>
	);
};

export { Main };
