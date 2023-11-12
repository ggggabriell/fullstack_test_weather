import styled from "styled-components";


export const WContainer= styled.div`  
`

export const WBg= styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    height: 100%;
    width: 100%; 
  
`;
//TIRAR A SATURAÇÃO DA IMAGEM COM RGBA 
export const ImageBg= styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const WWrap = styled.div`
    display: flex;
    justify-content: space-between;

`