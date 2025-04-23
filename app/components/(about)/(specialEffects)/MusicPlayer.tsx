import { useRef, useEffect } from "react";
import BigRedButton from "./BigRedButton";

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
        
        <BigRedButton />
      </button>
    </div>
  );
}
