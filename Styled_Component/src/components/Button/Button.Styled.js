// components/Button/Button.Styled.js

import styled from 'styled-components';

// StyledButton bileşeni
export const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: ${({ $primary }) => ($primary ? 'blue' : 'transparent')};
  color: ${({ $primary,theme }) => ($primary ? theme.colors.textColor : 'red')};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ $primary }) => ($primary ? 'transparent' : 'red')};
    color: ${({ $primary }) => ($primary ? 'red' : 'white')};
  }
`;

// StrongButton bileşeni
export const StrongButton = styled(StyledButton)`
  border-width: 2px;
  border-color: blue;
  background-color: ${({ $primary }) => ($primary ? 'blue' : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'white' : 'blue')};

  &:hover {
    background-color: ${({ $primary }) => ($primary ? 'transparent' : 'blue')};
    color: ${({ $primary }) => ($primary ? 'blue' : 'white')};
  }
`;

// CoolButton bileşeni
export const CoolButton = styled(StyledButton)`
  border-color: green;
  background-color: ${({ $primary }) => ($primary ? 'green' : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'white' : 'green')};
  text-decoration: none;
  &:hover {
    background-color: ${({ $primary }) => ($primary ? 'transparent' : 'green')};
    color: ${({ $primary }) => ($primary ? 'green' : 'white')};
  }
`;

// EdipButton bileşeni
export const EdipButton = styled.button`
  background-image: linear-gradient(to right, #403b4a 0%, #e7e9bb 51%, #403b4a 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

`;

export const SubmitButton = styled(StrongButton).attrs(
    { 
        type: 'submit' 
    })`
    font-size: 1.5em;
    color: black;
    `;
    