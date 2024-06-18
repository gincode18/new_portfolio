import Link from "next/link";
import { api } from "~/trpc/server";
import Homepage from "./_components/Home";
import TopTracks from "./_components/Spotify/TopTracks";
import NowPlaying from "./_components/Spotify/NowPlaying";
("./_components/Spotify/NowPlaying");
export default async function Home() {
  return (
    <main className="">
      <Homepage></Homepage>
      <div className="flex flex-col items-center justify-center">
        <TopTracks></TopTracks>
        <NowPlaying></NowPlaying>
      </div>
    </main>
  );
}
