import { Spin } from 'antd'
import React from 'react'

const Loading = ({ children, isError, deday = 10 }) => {
    return (
        <Spin spinning={isError} delay={deday}>
            {children}
        </Spin>
    )
}

export default Loading