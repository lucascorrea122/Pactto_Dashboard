import { styled, createGlobalStyle } from "styled-components";

interface Prop {
    mb?: number;
    mt?: number;
  }

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.primary_grey};
        font-size: 14px;
        font-family: 'arial';
        padding: 32px;
    }

`;

export const Title = styled.h1<Prop>`
    color: ${({theme}) => theme.colors.secundary_white};
    margin-bottom: ${props => props.mb ?  props.mb : ''};
    margin-top: ${props => props.mt ?  props.mt+'px' : ''};
`;

export const SubTitle = styled.h2<Prop>`
    color: ${({theme}) => theme.colors.secundary_white};
    margin-bottom: ${props => props.mb ?  props.mb+'px' : ''};
    margin-top: ${props => props.mt ?  props.mt+'px' : ''};
`;

export const Text = styled.p`
    color: ${({theme}) => theme.colors.secundary_white};
    font-size: 12px;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.accent_cyan};
    border-radius: 24px;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 48px;
    letter-spacing: 1px;
    padding: 0px 16px 0px 16px;  
`;

export const Div = styled.div<Prop>`
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-top: ${props => props.mt ?  props.mt+'px' : ''};

`;