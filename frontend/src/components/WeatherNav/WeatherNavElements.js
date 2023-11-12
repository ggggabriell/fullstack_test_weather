import styled from "styled-components";


export const NavContainer = styled.div`
    height: 100vh;
    width: 30%;
    z-index: 3;
    backdrop-filter: blur(30px);
    transition: 0.5s ease-in-out; 
    
    @media (max-width: 768px){
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
        width: 100%;
        position: absolute;
    }
    
`;
export const NavBlur = styled.div`

`;

export const NavWrap = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 4;
    margin-left: 50px;
`;

export const NavLocation = styled.div`
    color: #ddd;
`;
export const NavLocationWrap = styled.div`
    color: #;
`;


export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
   
   
`;

export const SearchInput = styled.input`
    background-color: transparent;   
    height: 40px;
    width: 70%;
    outline: none !important;
    border:none;
    outline-width: 0;
    color: #fff; 
`;

export const SearchBtn = styled.button`
    background-color: #f86864;
    width: 80px;
    height: 80px;
    font-size: 30px;
    cursor: pointer;

    @media (max-width: 768px){
        width: 60px;
        height: 60px;
    }
`;

export const NavLocationPlaces = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    width: 70%;
`;

export const PlacesText = styled.p`
    padding: 10px;
    color: #fff;
`;

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 15px;
    background-color: #aaa;
 
`

//WEATHER INFORMATIONS
//--------------------
export const NavWeatherDetails = styled.div`
    color: #fff;
    width: 80%;
`;

export const NavWeatherTitle = styled.h1`
    color: #fff;
    font-size: 18px;
    margin-bottom: 15px;
   
`;

export const DetailsSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
`;

export const DetailsText = styled.p`
`;



export const DetailsInfo = styled.div`
`;

export const DetailsNextDaysSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 6rem;
    
`;

export const DetailsNextDaysText = styled.p`
    padding: 8px;
    font-size: 16px;
`;

export const DetailsNextDaysTextInfo = styled.p`
    font-size: 14px;
    padding: 8px 0 0 16px;
`;

export const NextDaysGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;