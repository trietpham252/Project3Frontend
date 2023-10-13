import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row) `
    width: 1270px;
    padding: 10px 0;
    background-color: rgb(26, 148 ,255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`
export const WrapperTextHeader = styled.span `
    display: flex;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
   
`
export const WrapperHeaderAccout = styled.div `
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
    font-size: 12px;
`
export const WrapperTextHeaderSmall = styled.span `
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
` 
