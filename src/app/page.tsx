import Image from "next/image";
import logo from "../../public/imgs/team_wrona_logo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <Image src={logo} alt="Team Wrona Logo" width={150} />
      <h1 className="text-3xl font-bold">Dashboard for Strava Club</h1>
    </div>
  );
}
