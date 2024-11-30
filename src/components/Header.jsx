"use client";

import Sidemenu from "./Sidemenu";

import Link from "next/link";
// import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
// import { useKindeBrowserClient  } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu.tsx";
import ListItem from "./ListItem.tsx";
import Image from "next/image";

const Header = () => {
  // const { isAuthenticated, isLoading,getUser } = useKindeBrowserClient();
  // const {  getUser,isAuthenticated } = getKindeServerSession();
  // const isLoggedIn = await isAuthenticated();
  
  // let userData =  getUser();
  // if(userData === null){
  //   userData="";
  // }
  
// hello

  const disclosure = [
    {
      title: "6 Months Diploma in Cyber Forensics",
      path: "#",
    },
    {
      title: "6 Months Diploma In Cyber Security",
      path: "#",
    },
    {
      title: "12 Months Diploma In Cyber Security",
      path: "#",
    },
  ];
  const curriculum = [
    {
      title: "Sports",
      path: "#",
    },
    
  ];


  return (
    <>
        <header className="bg-transparent  ">
        <div className="mx-auto    flex h-16 py-3 max-w-screen-xl px-4 items-center lg:gap-8  sm:px-6 lg:px-8">
          <Link className="block text-teal-600 hover:cursor-pointer" href="/">
          <Image src="/logo.png" alt="logo" width="200" height="10"/>
          </Link>

          <div className="flex flex-1 items-center justify-end ">
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
               
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About-Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Infrastructure</NavigationMenuTrigger>
                  <NavigationMenuContent >
                    <ul className="  w-[400px] gap-2 p-2 md:w-[100px]  lg:w-[180px] ">
                      {curriculum.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.path}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Mandatory Disclosure</NavigationMenuTrigger>
                  <NavigationMenuContent >
                    <ul className="  w-[400px] gap-2 p-2 md:w-[100px]  lg:w-[180px] ">
                      {disclosure.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.path}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
               
               
                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                     Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contactUs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact-Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            </div>
            
            {/* {isLoading?<div>Loading...</div>: isAuthenticated?<div className="flex items-center gap-4">
           
              <div className="sm:flex mr-4 sm:gap-4">
             <Link
                
                href="/user"
              >
                <Avatar>
  <AvatarImage src={userData.picture}/>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

              </Link>
              <LogoutLink className="hidden rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-700 transition hover:text-zinc-900 sm:block">Log out</LogoutLink>
              </div>
          </div> :
          <div className="sm:flex mr-4 sm:gap-4">
           
           

          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
             <div className="lg:flex items-center hidden ">
            
             <Link href="/login">
            <Button>Sign Up</Button>
          </Link>
             </div>
          </div>} */}
            
          </div>
          <div className=" justify-end inline-block">
            
             
              <Sidemenu />
            </div>
            
          </div>
       
      </header>
    </>
  )
 
  ;
};

export default Header;
