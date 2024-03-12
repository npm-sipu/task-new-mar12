"use client";

import { paths } from "@/utils/helper";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(paths.homePage());
  return <main className=''></main>;
}
