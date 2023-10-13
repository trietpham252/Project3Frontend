import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 220.8px;
    height: 337.81px;
    & img {
        height: 220.8px;
        width: 220.8px;
    }
`

export const StyleNameProduct = styled.div `
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61)
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, );
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    
`


export const WrapperPriceDiscout = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`