import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserContext } from '../lib/context';
import { ToasterProvider } from "../components/toaster-provider";
import { CrispProvider} from "../components/crisp-provider";
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {

	const userData = useUserData();

	return (
		<UserContext.Provider value={userData}>
			<CrispProvider/>
			<Component {...pageProps} />
			<ToasterProvider/>
		</UserContext.Provider>
	);
}
