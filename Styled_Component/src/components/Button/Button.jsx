import { StyledButton } from "./Button.Styled";


export default function Button({ children ,...otherProps }) {
  return <StyledButton {...otherProps}>
    {children}
  </StyledButton>;
}