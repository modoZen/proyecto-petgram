import styled, { css, keyframes} from "styled-components";

const fadeInkeyframes = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({time='1s',type='ease'} = {}) => 
css`animation: ${time} ${fadeInkeyframes} ${type};`

const bounceDownKeyframes = keyframes`
  0%{
    top: -70px;
  }
  25%{
    top: 0;
  }
  40%{
    top: 10px;
  }
  65%{
    top: -3px
  }
  100%{
    top: 0%;
  }
`
export const bounceDown = ({time='1s',type='ease'} = {})=>
css`animation: ${time} ${bounceDownKeyframes} ${type}`
