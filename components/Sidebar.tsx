"use client";
import { primaryLinks, secondaryLinks, tertiaryLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ collapsed, setCollapsed }: any) => {
  const pathName = usePathname();
  return (
    <div
      className={`${
        collapsed ? "w-20 pt-6 " : "w-56"
      } h-screen sticky left-0 top-0 max-md:hidden py-4 px-4 gap-7 z-50 bg-white flex flex-col justify-start items-center`}
    >
      <Image src={"/assets/icons/logo.svg"} alt="logo" width={72} height={72} />
      <div
        className={`w-full h-full flex flex-col gap-4 justify-start items-start ${
          collapsed && "items-center"
        } `}
      >
        <div className="w-full h-[1px] bg-[#C4C4C4]">{/* SEPERATOR */}</div>
        <div className={`w-full flex flex-col items-start p-3 gap-7`}>
          {primaryLinks?.map((link) => {
            const isActive = pathName === link.route;
            return (
              <Link
                className={`flex items-center font-semibold justify-start gap-3 ${
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
                {!collapsed && (
                  <span className="text-[14px]">{link.label}</span>
                )}
              </Link>
            );
          })}
        </div>
        <div className="w-full h-[1px] bg-[#C4C4C4] ">{/* SEPERATOR */}</div>
        <div className="w-full flex flex-col items-start p-3 gap-7">
          {secondaryLinks?.map((link) => {
            const isActive = pathName === link.route;
            return (
              <Link
                className={`flex items-center font-semibold justify-start gap-3 ${
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
                {!collapsed && (
                  <span className="text-[14px]">{link.label}</span>
                )}
              </Link>
            );
          })}
        </div>
        <div className="w-full flex flex-col mt-auto items-start p-3 gap-7">
          {tertiaryLinks?.map((link) => {
            const isActive = pathName === link.route;
            return (
              <Link
                className={`flex items-center font-semibold justify-start gap-3 ${
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
                {!collapsed && (
                  <span className="text-[14px]">{link.label}</span>
                )}
              </Link>
            );
          })}
          <div
            onClick={() => setCollapsed((prev: any) => !prev)}
            className="flex items-center justify-start font-semibold gap-3 cursor-pointer"
          >
            {!collapsed && (
              <Image
                src={"/assets/icons/collapse.svg"}
                alt={"collapse"}
                width={28}
                height={28}
              />
            )}
            {collapsed && (
              <Image
                src={"/assets/icons/collapse.svg"}
                alt={"collapse"}
                width={28}
                height={28}
                className="rotate-180"
              />
            )}
            {!collapsed && <span className="text-[14px]">Collapse</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
