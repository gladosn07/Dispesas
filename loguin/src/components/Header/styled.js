import styled from 'styled-components';
import * as S from '../../config/colors'

export const Nav = styled.nav`
    background: ${S.primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: #fff;
        margin: 0 10px 0 0;
        font-weight: bold;
    }
`;