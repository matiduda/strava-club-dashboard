import Image from "next/image";
import logo from "../../public/imgs/team_wrona_logo.png";
import LoginByStravaButton from "@/components/atoms/LoginByStravaButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <Image src={logo} alt="Team Wrona Logo" width={150} />
      <h1 className="text-3xl font-bold">Panel dla Klubu Strava</h1>
      <p className="mt-2 text-gray-600">
        Aby korzystać z aplikacji i zobaczyć dane klubu, zaloguj się przez
        Strava.
      </p>
      <LoginByStravaButton />
    </div>
  );
}
