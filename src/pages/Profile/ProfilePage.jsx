import React from 'react'
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { useState } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hook/useMutationHook'
import * as message from '../../components/Message/Message'
import { updateUser } from '../../redux/slides/userSlide'




const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const mutation = useMutationHooks(
        (data) => {
            const { id,access_token, ...rests } = data
            UserService.updateUser(id, rests, access_token)
        }
    )

     const dispatch = useDispatch()
     const { data, isSuccess, isError} = mutation
     console.log('data', data);


    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailsUser(user?.id, user?.access_token)
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangeName = (value) => {
        setName(value)
    }
    const handleOnchangePhone = (value) => {
        setPhone(value)
    }
    const handleOnchangeAddress = (value) => {
        setAddress(value)
    }

    const handleOnchangeAvatar = (value) => {
        setAvatar(value)
    }

    const handleUpdate = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })
    }

  return (
    <div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
         <WrapperHeader>Thông tin người dùng</WrapperHeader>

            <WrapperContentProfile>
                <WrapperInput>
                <WrapperLabel htmlFor="name">Name</WrapperLabel>
                <InputForm  style={{ width: '300px' }} id="name" value={name} onChange={handleOnchangeName} />
                <ButtonComponent
                onClick={handleUpdate}
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                }}
                textButton={'Cập nhật'}
                styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                <WrapperLabel htmlFor="email">Email</WrapperLabel>
                <InputForm  style={{ width: '300px' }} id="email" value={email} onChange={handleOnchangeEmail} />
                <ButtonComponent
                onClick={handleUpdate}
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                }}
                textButton={'Cập nhật'}
                styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
                <InputForm  style={{ width: '300px' }} id="phone" value={phone} onChange={handleOnchangePhone} />
                <ButtonComponent
                onClick={handleUpdate}
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                }}
                textButton={'Cập nhật'}
                styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                <WrapperLabel htmlFor="address">Address</WrapperLabel>
                <InputForm  style={{ width: '300px' }} id="address" value={address} onChange={handleOnchangeAddress} />
                <ButtonComponent
                onClick={handleUpdate}
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                }}
                textButton={'Cập nhật'}
                styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                <WrapperLabel htmlFor="avatar">Avartar</WrapperLabel>
                <InputForm  style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnchangeAvatar} />
                <ButtonComponent
                onClick={handleUpdate}
                size={40}
                styleButton={{
                    height: '30px',
                    width: 'fit-content',
                    borderRadius: '4px',
                    padding: '2px 6px 6px'
                }}
                textButton={'Cập nhật'}
                styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                </WrapperInput>
            </WrapperContentProfile>

    </div>
  )
}

export default ProfilePage