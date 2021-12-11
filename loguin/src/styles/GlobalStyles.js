import styled, {createGlobalStyle} from "styled-components";
import * as S from '../config/colors'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${S.primaryDarkColor};
        color: ${S.primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background: ${S.primaryColor};
        border: none;
        color : #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: ${S.primaryColor};
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;