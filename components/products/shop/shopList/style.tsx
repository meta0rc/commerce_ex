import styled from "styled-components";

export const ShopList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
    @media (max-width: 800px) {
        width: 100%;
    }
    svg { 
        
        &:hover {
            cursor: pointer;
            opacity: 0.6;
            transition: 0.6s;
            transform: scale(1.1);
          
        }
    }
`

export const ShopItem = styled.li`
    box-shadow: 0 0 3px #ccc;
    background: #fff;
    border-radius: 3px;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aligin-items: center;
    padding: 15px;
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    margin: 10px;
`
export const ContainerHeading = styled.div`
    background: #000;
    width: 100%;
    padding: 1
`
export const ContainerFooterProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Price = styled.span`font-weight: bold;
`