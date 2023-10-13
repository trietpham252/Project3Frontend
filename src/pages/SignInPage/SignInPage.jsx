import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import imageLogo from '../../assets/images/Louis_Vuitton_SIGNIN.png';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  
  return (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
            <h1>Xin chào !</h1>
            <p>Đăng nhập và tạo tài khoản nhé !</p>
            <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" />
            <div style={{position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            </div>
            <InputForm placeholder="Mật khẩu" type={isShowPassword ? "text" : "password"} />
            <ButtonComponent
                bordered={false}
                size={40} 
                styleButton= {{ 
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: "none",
                borderRadius: '4px',
                margin: '26px 0 10px'
                }}
                textButton={'Đăng nhập'}
                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
            <p><WrapperTextLight  >Quên mật khẩu ?</WrapperTextLight></p>
            <p>Chưa có tài khoản ? <WrapperTextLight> Tạo tài khoản</WrapperTextLight></p>
          </WrapperContainerLeft>
          <WrapperContainerRight>
                <div style={{}}>
                    <Image src={imageLogo} preview={false} alt='image-logo' height='203px' width='203px' />
                    <h4>Mua sắm tại LV</h4>
                </div>
          </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage