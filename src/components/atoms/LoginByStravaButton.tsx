import Image from "next/image";
import loginByStravaButton from "../../../public/imgs/btn_strava_connect_with_orange.svg";

export default function LoginByStravaButton() {
  return (
    <button className="flex items-center m-4 cursor-pointer hover:brightness-90">
      <Image src={loginByStravaButton} alt="Connect with Strava" />
    </button>
  );
}
