import Link from "next/link";
import { api } from "~/trpc/server";
import Homepage from "./_components/Home";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="">
      <Homepage></Homepage>
    </main>
  );
}
