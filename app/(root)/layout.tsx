"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <main className="relative">
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <section className="flex min-h-screen flex-1 flex-col">
          <Navbar />
          <div className="p-12 pt-20 max-md:p-6 max-md:pt-24 w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
