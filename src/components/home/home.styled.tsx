import styled from "styled-components";

export const Label = styled.p`
    color: ${({theme}) => theme.colors.secundary_light_grey};
    /* margin-left: 8px; */
`;

export const Link = styled.a`
    color: ${({theme}) => theme.colors.accent_cyan};
`;

export const LabelContainer = styled.div`
    gap: 6px; 
    display: grid;
`;

export const TODO = styled.span`
    background-color: ${({theme}) => theme.colors.grey};
    height: fit-content;
    border-radius: 8px;
    text-transform: uppercase;
    font: 500 9px / 14px Roboto;
    color: #fff;
    padding: 2px 6px;
    width: 38px;
    text-align: center;
`;

export const LabelItem = styled.div`
    display: flex;
    gap: 8px;
`;