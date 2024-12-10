import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause } from 'lucide-react';
import { SONG_URL } from '../../constants/audio';

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(SONG_URL);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Erro ao reproduzir áudio:', error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2"
      aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
    >
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      <span className="hidden sm:inline">
        {isPlaying ? 'Pausar Música' : 'Tocar Música'}
      </span>
    </button>
  );
};