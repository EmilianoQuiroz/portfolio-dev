import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
            <div className="col-span-6 flex md:col-span-3">
                <Link href="/">
                    <h1 className="text-3xl font-bold">
                        Santiago<span className="text-blue-800">Quiroz</span>
                    </h1>
                </Link>
            </div>
            <div className="hidden sm:flex justify-center items-center col-span-6">     
                <NavigationMenu>
                    <NavigationMenuList></NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}