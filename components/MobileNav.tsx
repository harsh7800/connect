"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sideBarlinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full hidden max-sm:block max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image src="/icons/logo.svg" width={32} height={32} alt="Logo" />
            <p className="text-[26px] text-white font-extrabold">Connect</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col w-full max-w-60 overflow-y-auto">
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {sideBarlinks.map((link) => {
                const isActive =
                  pathname === link.route ||
                  (pathname === "/" && link.route === "/");
                return (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.route}
                      className={cn(
                        "flex gap-4 items-center p-4 rounded-lg justify-start ",
                        { "bg-blue-1": isActive }
                      )}
                    >
                      <Image
                        width={20}
                        height={20}
                        src={link.imgUrl}
                        alt={link.label}
                      />
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
