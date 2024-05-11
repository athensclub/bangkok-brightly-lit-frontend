"use client";
import { Dashboard } from "@/components/component/dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Dashboard></Dashboard>
    </main>
  );
}
