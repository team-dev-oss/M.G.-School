"use client"

import * as React from "react"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from "next/link"

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

export function Sidemenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <NavigationMenu orientation="vertical" className="w-full">
          <NavigationMenuList className="flex-col items-start">
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink>About-Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Infrastructure</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-full p-2">
                  {curriculum.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a href={item.path} className="block py-2">
                          {item.title}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mandatory Disclosure</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-full p-2">
                  {disclosure.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a href={item.path} className="block py-2">
                          {item.title}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink>Gallery</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contactUs" legacyBehavior passHref>
                <NavigationMenuLink>Contact-Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}

