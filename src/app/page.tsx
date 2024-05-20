import Link from "next/link";
import { api } from "~/trpc/server";
import Homepage from "./_components/Home";

export default async function Home() {
  return (
    <main className="">
      <Homepage></Homepage>
    </main>
  );
}
