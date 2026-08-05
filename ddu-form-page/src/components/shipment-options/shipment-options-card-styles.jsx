import styled from "styled-components"
import { Blue, Black, TextGrey } from "../../styles/colors.jsx";

export const ShipmentOptionsCardContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ selected }) => (selected ? "#e6f7ff" : "#fff")};
    box-shadow: ${({ selected }) => (selected ? "0 0 0 1px rgba(149, 180, 232, 0.3)" : "none")};
    padding: 24px;
    border-radius: 8px;
    border: 1px solid
    ${({ selected }) => (selected ? Blue : "#eaecee")};
    overflow: hidden;
    cursor: pointer;
    transition: .2s all ease;
    i {
        display: block;
        color: ${Blue};
        margin-right: 16px;
    }
    h6 {
        color: ${Black};
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 0;
    }
    p {
        font-size: 14px;
         font-weight: ${({ selected }) => (selected ? 700 : 400)};
        line-height: 21px;
        color: ${TextGrey};
    }

    @media screen and (max-width: 767.5px) {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        padding: 24px 16px;
        i {
            font-size: 22px;
            margin-bottom: 24px;
            margin-right: 0;
        };
    }
`