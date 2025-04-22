import { useRef, useEffect } from "react";
import Image from "next/image";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/pinkfrogsong.mp3");
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>
        <Image
          className="w-full h-full shadow-project-image custom-mouse-pointer"
          src="/pinkFrog.png"
          alt="Pink frog"
          width={400}
          height={400}
        />
      </button>
    </div>
  );
}
