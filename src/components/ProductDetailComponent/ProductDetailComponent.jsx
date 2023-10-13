import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.png'
import imageProductSmall from '../../assets/images/small.png'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ProductDetailComponent = () => {
    const onChange = () => { }
  return (
    <Row style={{padding: '16px', background: '#fff', borderRadius: '4px'}}>
      <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
            <Image src={imageProduct} alt='images product'/>
            <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='images small'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='images small'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='images small'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='images small'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='images small'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt='images small'/>
                </WrapperStyleColImage>
            </Row>
      </Col>
      <Col span={14} style={{paddingLeft: '10px'}}>
        <WrapperStyleNameProduct>
            Túi Đeo Chéo Nữ Louis Vuitton LV Go-14 MM M22891 Màu Đen
        </WrapperStyleNameProduct>
        <div>
             <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
             <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
             <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
             <WrapperStyleTextSell> | Đả bán 1000+ </WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
            <WrapperPriceTextProduct>185.000.000 đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
            <span>Giao đến:</span>
            <span className='address'> Quận Ninh Kiều, Thành Phố Cần Thơ</span>
            <span className='change-address'> Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop:'1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
            <div style={{marginBottom: '10px' }}>Số lượng</div>
            <WrapperQualityProduct>
                <button style={{border: 'none', background: 'transparent'}} > 
                      <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />   
                </button>
                <WrapperInputNumber  defaultValue={3} onChange={onChange} size='small' />
                <button style={{border: 'none', background: 'transparent'}}>
                <PlusOutlined style={{ color: '#000', fontSize: '20px' }}/>
                </button>
            </WrapperQualityProduct>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <ButtonComponent
                size={40} 
                styleButton= {{ 
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '220px',
                border: "none",
                borderRadius: '4px'
                }}
                textButton={'Chọn mua'}
                styleTextButton={{ color: '#fff' }}
            ></ButtonComponent>
             <ButtonComponent
                size={40} 
                styleButton= {{ 
                background: '#fff',
                height: '48px',
                width: '220px',
                border: "1px solid rgb(13, 92, 182)",
                borderRadius: '4px'
                }}
                textButton={'Mua trả góp'}
                styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
            ></ButtonComponent>
        </div>
    
      </Col>
    </Row>
  )
}

export default ProductDetailComponent