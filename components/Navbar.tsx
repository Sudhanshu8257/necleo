import Image from "next/image";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { primaryLinks, secondaryLinks, tertiaryLinks } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className=" bg-white fixed top-0 right-0 w-full h-14 gap-5 p-4 flex items-center justify-between">
      <Sheet>
        <SheetTrigger className="block md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white" side={"left"}>
          <div
            className={`w-full h-full flex flex-col gap-4 justify-start items-start `}
          >
            <div className={`w-full flex flex-col items-start p-3 gap-7`}>
              {primaryLinks?.map((link) => {
                const isActive = pathName === link.route;
                return (
                  <Link
                    className={`flex items-center justify-start font-semibold gap-3 ${
                      isActive ? "text-primary" : "text-[#C4C4C4]"
                    }`}
                    key={link.label}
                    href={link.route}
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={24}
                      height={24}
                    />

                    <span className="text-[14px]">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="w-full h-[1px] bg-[#C4C4C4] ">
              {/* SEPERATOR */}
            </div>
            <div className="w-full flex flex-col items-start p-3 gap-7">
              {secondaryLinks?.map((link) => {
                const isActive = pathName === link.route;
                return (
                  <Link
                    className={`flex items-center justify-start font-semibold gap-3 ${
                      isActive ? "text-primary" : "text-[#C4C4C4]"
                    }`}
                    key={link.label}
                    href={link.route}
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={24}
                      height={24}
                    />

                    <span className="text-[14px]">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="w-full flex flex-col mt-auto items-start p-3 gap-7">
              {tertiaryLinks?.map((link) => {
                const isActive = pathName === link.route;
                return (
                  <Link
                    className={`flex items-center justify-start font-semibold gap-3 ${
                      isActive ? "text-primary" : "text-[#C4C4C4]"
                    }`}
                    key={link.label}
                    href={link.route}
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={24}
                      height={24}
                    />

                    <span className="text-[14px]">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Image
        src={"/assets/icons/logo.svg"}
        alt="logo"
        width={72}
        height={72}
        className="block md:hidden"
      />

      <div className="flex gap-3 items-center ml-auto justify-center">
        <div className="flex flex-col h-full items-start justify-center gap-0.5">
          <div className="flex gap-3 items-center justify-center text-[12px]">
            <span className="font-semibold">Free Trial</span>
            <span className="font-semibold">|</span>
            <span>2days left</span>
          </div>
          <span className="text-[12px] text-primary">Extend free trial</span>
        </div>
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
};

export default Navbar;
