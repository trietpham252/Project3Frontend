import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscout, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons';


const CardComponent = () => {
  return (
    <WrapperCardStyle
    hoverable
    headStyle = {{width: '200px', height: '200px'}}
    style={{ width: 220 }}
    bodyStyle={{padding: '10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Iphone 12</StyleNameProduct>
    <WrapperReportText>
        <span style={{ marginRight: '4px' }}> 
             <span> 4.96 </span> <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
        </span>
         <WrapperStyleTextSell> | Đả bán 1000+ </WrapperStyleTextSell>
     </WrapperReportText>
     <WrapperPriceText>
         <span style={{marginRight: '10px' }}>1.000.000 đ</span>
        <WrapperPriceDiscout>
            -5%
        </WrapperPriceDiscout>
    </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent