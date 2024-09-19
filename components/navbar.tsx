"use client";
import { useState } from "react"; // Import useState
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from 'lucide-react';
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import ModeToggle from "./mode-togle";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false); // State for dialog visibility

    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
            <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
                <Dialog open={isOpen} onOpenChange={setIsOpen}> {/* Manage dialog state */}
                    <SheetTrigger className="min-[825px]:hidden p-2 transition" onClick={() => setIsOpen(true)}>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>INTERNLOOM</SheetTitle>
                            <SheetDescription>
                                Innovators. Creators. Visionaries.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild onClick={() => setIsOpen(false)}>
                                <Link href="#about-us">
                                    <Button variant="outline" className="w-full">About Us</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/intenships"> 
                                    <Button variant="ghost">Internships</Button>
                                </Link>  
                            </DialogClose> 
                            <DialogClose asChild>
                                <Link href="/course"> 
                                    <Button variant="ghost">Courses</Button>
                                </Link>  
                            </DialogClose>          
                            <DialogClose asChild onClick={() => setIsOpen(false)}>
                                <Link href="#features">
                                    <Button variant="outline" className="w-full">Features</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild onClick={() => setIsOpen(false)}>
                                <Link href="#services">
                                    <Button variant="outline" className="w-full">Services</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild onClick={() => setIsOpen(false)}>
                                <Link href="#footer">
                                    <Button variant="outline" className="w-full">Contact Us</Button>
                                </Link>
                            </DialogClose>
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Dialog>
                <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:hidden">
                        <Link href="/" className="pl-2">
                            <h1 className="font-bold">Internloom</h1>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <Link href="#about-us">
                        <Button variant="ghost">About Us</Button>
                    </Link>
                    <Link href="/internships"> 
                        <Button variant="ghost">Internships</Button>
                    </Link>
                    <Link href="/course"> 
                        <Button variant="ghost">Courses</Button>
                    </Link>
                    <Link href="#features">
                        <Button variant="ghost">Features</Button>
                    </Link>
                    <Link href="#services">
                        <Button variant="ghost">Services</Button>
                    </Link>
                    <Link href="#footer">
                        <Button variant="ghost">Contact Us</Button>
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";