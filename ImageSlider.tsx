import React from 'react';
import Slider from 'react-slick';
import { sliderSettings } from './sliderSettings';
import { images } from '../../constants/images';

export const ImageSlider = () => {
  return (
    <div className="image-slider mb-12 relative">
      <div className="aspect-w-16 aspect-h-9">
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index} className="outline-none">
              <img 
                src={img} 
                alt={`Momento ${index + 1}`} 
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};