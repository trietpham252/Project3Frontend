import React from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import imageLogo from '../../assets/images/Louis_Vuitton_SIGNIN.png';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutationHooks } from '../../hook/useMutationHook';
import * as UserService from '../../services/UserService'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data } = mutation

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleNavigateSignIn= () => {
        navigate('/sign-in')
  }

  const handleSignUp = () => {
    mutation.mutate({email, password, confirmPassword})
  }
  return (
    <div>
          <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
            <h1>Xin chào !</h1>
            <p>Đăng nhập và tạo tài khoản nhé !</p>
            <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail}/>
          <div style={{ position: 'relative' }}>
            <span
                 onClick={() => setIsShowPassword(!isShowPassword)}
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
            <InputForm placeholder="Mật khẩu" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}  value={password} onChange={handleOnchangePassword} 
           />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
              isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="Xác nhận mật khẩu" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
            <ButtonComponent
                 disabled={!email.length || !password.length || !confirmPassword.length}
                onClick={handleSignUp}
                size={40} 
                styleButton= {{ 
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: "none",
                borderRadius: '4px',
                margin: '26px 0 10px'
                }}
                textButton={'Đăng ký'}
                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
            <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
          </WrapperContainerLeft>
          <WrapperContainerRight>
                <div style={{}}>
                    <Image src={imageLogo} preview={false} alt='image-logo' height='203px' width='203px' />
                    <h4>Mua sắm tại LV</h4>
                </div>
          </WrapperContainerRight>
      </div>
    </div>
    </div>
  )
}

export default SignUpPage