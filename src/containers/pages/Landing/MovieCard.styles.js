import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'
import { phone, tablet } from '../../theme/sizes';

const padding = '15px';
const gradientRed = 'linear-gradient( #FF220C, #D33E43)';

export const Container = styled.div`
  width: 280px;
  height: 460px;
  margin: 20px 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: ${tablet}px){
    width: 300px;
    height: 460px;
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 575px;
    margin: 0;
  }
`;

export const Poster = styled.div`
  width: 280px;
  height: 335px;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  position: relative;

  @media (max-width: ${tablet}px){
    width: 300px;
    height: 100%;
    max-height: 460px;
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 100vh;
    max-height: 460px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  h1, h2{
    margin: 0;
    padding-left: ${padding};
  }
  h1{
    font-size: 20px;
    color: #333;
    font-weight: 300;
  }
  h2{
    color: #444;
    font-weight: 100;
    font-size: 10px;
    text-align: right;
    padding-right: ${padding};
  }
  @media (max-width: ${phone}px){
    h1{
      font-size: 22px;
    }
    h2{
      font-size: 12px;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-left: ${padding};
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2, h2>a{
    height: 50px;
    line-height: 50px;
    align-items: center;
    width: 33.33%;
    display: flex;
    justify-content: center;
    margin: 0 !important;
  }
  h2{
    font-size: 20px;
    font-weight: 300;
    color: #333;
  }
`;

export const StyledIcon = styled(FontAwesome)`
  background: ${gradientRed};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
  padding: 0 5px;
`
