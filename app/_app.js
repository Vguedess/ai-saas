import "./globals.css";
import Navbar from "ai-saas/components/Navbar_";
import { UserContext } from '../lib/context';
import { CrispProvider} from "../components/crisp-provider";
import { ToasterProvider } from "../components/toaster-provider";
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {

	const userData = useUserData();

	return (
		<UserContext.Provider value={userData}>
			<Navbar />
			<CrispProvider/>
			<Component {...pageProps} />
			<ToasterProvider/>
		</UserContext.Provider>
	);
}
export default MyApp;
