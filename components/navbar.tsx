import { UserButton } from "@clerk/nextjs";
import {useContext} from "react";
import {UserContext} from "../lib/context.js"
import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "../../../../AppData/Roaming/JetBrains/WebStorm2023.3/scratches/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
    const { user, username } = useContext(UserContext)
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
      </div>
    </div>
   );
}

export default Navbar;
