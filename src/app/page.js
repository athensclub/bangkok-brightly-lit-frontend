"use client";
import { Dashboard } from "@/components/component/dashboard";
import { Dashboard2 } from "@/components/component/dashboard2";
import { Dashboard3 } from "@/components/component/dashboard3"; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Dashboard></Dashboard>
      {/* <Dashboard2 ></Dashboard2> */}
      {/* <Dashboard3 ></Dashboard3> */}
    </main>
  );
}
