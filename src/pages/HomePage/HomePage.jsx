import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import  slidefirst  from '../../assets/images/slidefirst.png'
import  slide1  from '../../assets/images/slide1.png'
import  silde2  from '../../assets/images/silde2.png'
import  silde3  from '../../assets/images/silde3.png'
import  slide4  from '../../assets/images/slide4.png'
import CardComponent from "../../components/CardComponent/CardComponent";
import VideoComponent from "../../components/VideoComponent/VideoComponent";

const HomePage = () => {
  const arr = ["Túi", "Trang sức", "Nước hoa"];
  return (
   <>
    <div style={{ width: '1270px', margin: '0 auto' }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return ( 
             <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
      </div>
      <div className="body" style={{ width: '100%', backgroundColor: '#efefef'}}>
         <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto'}}>
            <SliderComponent arrImages = {[slidefirst, slide1, silde2, silde3, slide4]}/>
            <VideoComponent />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div style={{marginTop: '10px', width: '100%', display: 'flex', justifyContent: 'center'}}>
          <WrapperButtonMore textButton= "Xem thêm" type="outline" styleButton={{ 
            border: "1px solid rgb(11, 116, 229)", color: 'rgb(11, 116, 229)', 
            width: '240px', height: '38px', borderRadius: '4px' 
          }} 
             styletextButton={{ fontWeight: 500}} />
      </div>
    </div>
  </div>
</>
  )
}

export default HomePage;
