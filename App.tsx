import React from 'react';
import { Heart } from 'lucide-react';
import { ImageSlider } from './components/ImageSlider/ImageSlider';
import { Message } from './components/Message/Message';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="min-h-screen bg-black py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="title text-6xl text-center mb-8 animate-pulse">
          Feliz 1.4 Meu Amor! <Heart className="inline-block text-red-500 ml-2" />
        </h1>
        <ImageSlider />
        <Message />
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;