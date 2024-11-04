"use client";

import {RootLayout} from "@/shared/layouts";
import React from "react";

export default function MainLayout({children}: { children: React.ReactNode })
{
	return (
		<RootLayout>{children}</RootLayout>
	);
}
