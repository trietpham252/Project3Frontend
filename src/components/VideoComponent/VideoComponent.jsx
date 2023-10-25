import React from 'react';
import { Carousel } from 'antd';
import video3 from '../../assets/images/videoSlider.mp4';
import { VideoWrapper, SliderVideo } from './style';

const VideoSlider = () => {
  return (
    <div>
      <Carousel autoplay effect="fade" style={{overflow: 'hidden',textOverflow: 'ellipsis' }}>
        <VideoWrapper>
          <video width={1270} height={715} autoPlay  muted loop>
            <source src={video3} type="video/mp4" />
          </video>
        </VideoWrapper>
      </Carousel>
      <SliderVideo 
      value={1} 
      max={1} 
       />
      
    </div>
  );
};
export default VideoSlider;