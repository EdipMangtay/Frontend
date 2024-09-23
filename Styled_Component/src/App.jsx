// App.jsx

import React from 'react';
import Button from './components/Button/Button';
import { StyledContainer } from './components/styled';
import { CoolButton, StrongButton, EdipButton, SubmitButton } from './components/Button/Button.Styled';
import { FaApple } from 'react-icons/fa6';
import { keyframes, styled } from 'styled-components';

// Animasyon tanımı
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Stilize edilmiş resim bileşeni
const StyledImg = styled.img`
  width: 100%;
  padding: 4px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;

  &:hover {
    animation: ${rotate} 10s linear infinite;
  }
`;

// Stilize edilmiş ikon bileşeni
const RotatingAppleIcon = styled(FaApple)`
  font-size: 40px;
  animation: ${rotate} 2s linear infinite;
  color: blue;
`;

function App() {
  return (
    <>
      <StyledContainer>
        <StyledImg src="https://picsum.photos/id/1037/1200/300" alt="Random" />
        <RotatingAppleIcon />
        <h1>Deneme</h1>
        <Button $primary className="btn">
          İncele 
        </Button>
        asdfasdfsafafs
        <br />
        <StrongButton $primary type="submit">
          Strong Button
        </StrongButton>
        <br />
        <CoolButton as="a" href="http://google.com" target="_blank" rel="noopener noreferrer">
          Cool
        </CoolButton>
        <br />
        <EdipButton>
          Maviş
        </EdipButton>
        <br />
        <SubmitButton>
          Submit
        </SubmitButton>
      </StyledContainer>
    </>
  );
}

export default App;