import React from 'react';
import {ModeToggle, UserNav} from "@/features";
import Link from "next/link";
import {AuthPopup} from "@/widgets";
import {useUserStore} from "@/app/store";

export function Header()
{
	const {user} = useUserStore();

	return (
		<header className="sticky top-0 z-10 bg-background border-b">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				<Link href='/'>
					<h1 className="text-2xl font-bold">AIS Template</h1>
				</Link>
				<div className="flex items-center">
					<ModeToggle/>
					{user ? <UserNav/> : <AuthPopup/>}
				</div>
			</div>
		</header>
	);
}