import React from 'react'
import { WrapperContend, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => { }
    const renderContend = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
        case 'checkbox':
            return  (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <Checkbox value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                 </Checkbox.Group>
            )
         case 'star':
            return options.map((option) => {
                  return (
                    <div style={{display: "flex", gap: '10px'}}>
                     <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                     <span> {`Từ ${option} sao`} </span>
                    </div>   
                )
             })
        case 'price':
             return options.map((option) => {
                return (
                    <WrapperTextPrice>{option}</WrapperTextPrice>
                 ) 
             })
        default:
                return {}
        }
    }
  return (
    <div>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContend>
             {renderContend('text', ['Túi', 'Trang sức', 'Nước hoa'])}
        </WrapperContend>
    </div>
  )
}

export default NavbarComponent