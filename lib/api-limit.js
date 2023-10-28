
//import { auth } from "@clerk/nextjs";
//import prismadb from "@/lib/prismadb";
//import { auth } from '../lib/firebase';

//import { MAX_FREE_COUNTS } from "@/constants";

//export const incrementApiLimit = async() => {
	//const {userId} = auth ();
	//if (!userId) {
		//return;
	//}
	//const userApiLimit = await prismadb.userApiLimit.findUnique ({
		//where: {userId: userId},
	//});

	//if(userApiLimit) {
		//await prismadb.userApiLimit.update ({
			//where: {userId: userId},
			//data : {count: userApiLimit.count + 1},
//		});
//	} //else {
		// ... (omitted for brevity)
//	}//
// };
