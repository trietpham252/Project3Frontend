import { Badge, Button, Col, Popover } from "antd";
import React from "react";
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { useState } from "react";
import Loading from "../LoadingComponent/Loading";





const HeaderComponent = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const handleNavigateLogin = () =>{
      navigate('/sign-in')
  }

  const handleLogout = async() => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }
  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất😣</WrapperContentPopup>
      <WrapperContentPopup>Thông tin người dùng🥰</WrapperContentPopup>
    </div>
  );
  return (
    <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center'}}>
      <WrapperHeader >
        <Col span={5}>
          <WrapperTextHeader>
          PHAMMINHTRIET
          </WrapperTextHeader>
        </Col>
        <Col span={13}>
        <ButtonInputSearch
        size='large'
        textButton='Tìm kiếm'
        placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn...'
      // onSearch={onSearch}
    />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
          <Loading isLoading={loading}>
          <WrapperHeaderAccout>
          <UserOutlined style={{fontSize: '30px'}} />
          {user?.name ? (
            <>
            <Popover content={content}  trigger="click">
            <div style={{ cursor: 'pointer' }} >{user.name}</div>
           </Popover>
            </>
          ) : (
          <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
          <div>
               <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
               <CaretDownOutlined />
            </div>
          </div>
          )}
          </WrapperHeaderAccout>
          </Loading>
          <div>
            <Badge count={4} size="small">
                <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}  />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
