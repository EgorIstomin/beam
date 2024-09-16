"use client"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { RectangleHorizontal } from 'lucide-react';


  

export const WelcomeMsg = () => { 
    const { user, isLoaded } = useUser(); 

    return ( 
        <div className="space-y-2 mb-4"> 
            <h2 className="text-2xl lg:text-4xl text-white font-medium"> 
    <ClerkLoaded>
                Welcome Back {isLoaded ? ", " : " "} 
       
                {user?.firstName} 
                </ClerkLoaded>
    
            <ClerkLoading> 
            <div className="h-6 lg:h-12 w-47 lg:w-55 bg-gray-300 rounded animate-pulse"></div>
            </ClerkLoading>
            </h2>
            <p className="text-sm lg:text-base text-white"> 
                This is your Beam Wallet 
            </p>
        </div>
    );
};