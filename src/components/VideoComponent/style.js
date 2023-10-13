import { Slider } from "antd";
import styled from "styled-components";


export const SliderVideo = styled(Slider)`
  .ant-slider-rail,
  .ant-slider-track,
  .ant-slider-handle {
    display: none;
  }
`;

export const VideoWrapper = styled.div`
  video {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;