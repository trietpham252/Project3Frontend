import { Image,  } from 'antd';
import React from 'react'
import { WrapperSliderStyle } from './style';

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <WrapperSliderStyle {...settings}>
        {arrImages.map((image) => {
            return (
                 <Image src={image} alt= "slide" preview = {false} height='717px' width='100%' />
            )
        })}
    </WrapperSliderStyle>
  )
}

export default SliderComponent