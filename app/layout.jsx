// layout.js
import { Inter } from 'next/font/google';
import { ToasterProvider } from '@/components/toaster-provider';
import { ModalProvider } from '@/components/modal-provider';
import { CrispProvider } from '@/components/crisp-provider';
/*
import Loader from '../components/loader.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserContext } from '../lib/context';
import Navbar_ from "../components/Navbar_";
*/

import './globals.css';

const font = Inter ({subsets: ['latin']});

export const metadata = {
	title      : 'Beyond Curve',
	description: 'AI Platform',
};

export default async function RootLayout ({
	                                          children,
                                          }) {
	return (
			<html lang="en" suppressHydrationWarning>
			<CrispProvider/>
			<body className={font.className}>
			<ToasterProvider/>
			<ModalProvider/>
			{children}
			</body>
			</html>
	);
}
