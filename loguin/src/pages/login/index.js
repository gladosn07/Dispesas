import React from "react";
import * as S from "./styled";
import { Container } from "../../styles/GlobalStyles";

const Login = () => {
  return (
    <Container>
      <S.Title>
        Login
        <small>oi</small>
      </S.Title>
      <S.Paragrafo>
        Lorem ipsum dolor sit amet..
      </S.Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
};

export default Login;
