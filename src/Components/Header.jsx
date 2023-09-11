import styled from "styled-components"

export default function Header() {
  return (
    <HeaderDiv>
      <h1>React Elections  </h1>
      <h2> Desafio Módulo 2 - Bootcamp React JS da XP Educação </h2>
      <h3>Por Alisson Camões</h3>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
  height: 120px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  h1 {
    font-size: 36px;
    text-align: center;
    font-weight: bolder;
    font-family: 'Roboto';
  }

  h2,h3 {
    text-align: center;
    margin-top: 8px;
    font-size: 18px;
  }

`