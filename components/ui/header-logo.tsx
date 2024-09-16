import Link from "next/link"; 
import Image from "next/image"; 
import { UserProfile } from "@clerk/nextjs";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidded lg:flex"> 
                <Image src="/logo.svg" alt="Logo" height={34} width={34} />
                <p className=" font-normal text-white text-2xl ml-2.5">Beam</p>
            </div>
        </Link>
    )
};
