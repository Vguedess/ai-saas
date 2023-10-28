"use client";

import PostFeed from "../../components/PostFeed";
import Metatags from "../../components/Metatags";
import Loader from "../../components/Loader";
import { firestore, postToJSON, getIt } from "../../lib/firebase";
import { Timestamp, query, where, orderBy, limit, collectionGroup, getDocs, startAfter, getFirestore } from "@firebase/firestore";
import Navbar from "../../components/Navbar_.js";
import { useState } from "react";

/*
const LandingPage = () => {
  return (
    <div className="h-full ">
        {/*<LandingNavbar */ /* >}
        <Navbar_ />
      <LandingHero />
      <LandingContent />
    </div>
   );
}

export default LandingPage;
*/



import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { tools } from "@/constants";

export default function HomePage() {
    const router = useRouter();

    return (
        <div>
            <Navbar />
            <div className="mb-8 space-y-4">
                <br/>
                <h2 className="text-2xl md:text-5xl font-bold text-center text-white">
                    FrontierLabs
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Beyond Curve Future Features
                </p>
            </div>
            <div>
                <p className="font-light text-sm text-white text-center"> test ;)</p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    );
}
