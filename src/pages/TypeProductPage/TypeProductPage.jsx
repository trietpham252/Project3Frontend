import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
  const onChange= () => {}
  return (
         <div style={{ width: '100%', background: '#efefef' }} >
                <div style={{ width: '1270px', margin: '0 auto' }}>
                    <Row style={{flexWrap: 'nowrap', paddingTop: '10px'}}>
                      <WrapperNavbar span={4}>
                          <NavbarComponent />
                      </WrapperNavbar>
                      <Col span={20}>
                      <WrapperProducts>
                          <CardComponent />
                          <CardComponent />
                          <CardComponent />
                          <CardComponent />
                          <CardComponent />
                          <CardComponent />
                      </WrapperProducts>
                      <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', margin: "10px 130px 0 0" }} />
                      </Col>
                  </Row>
    </div>
  </div>
  )
}

export default TypeProductPage