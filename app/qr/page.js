import DownloadButton from "../components/DownloadButton";
import ProfileCard from "../components/ProfileCard";


export default function QRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col items-center justify-center"
>
      <ProfileCard />
      <DownloadButton />
    </div>
  );
}
