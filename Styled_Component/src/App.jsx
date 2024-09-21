// App.jsx
import Button from './components/Button/Button';
import { StyledContainer } from './components/styled';
import { CoolButton, StrongButton, EdipButton, SubmitButton } from './components/Button/Button.Styled';

function App() {
  return (
    <>
      <StyledContainer>
        <h1>Deneme</h1>
        <Button $primary className="btn">
          İncele
        </Button>
        <br />
        <StrongButton $primary type='submit'>
          Strong Button
        </StrongButton>
        <br />  
        <CoolButton as="a" href="http://google.com" target='_blank'>
          Cool
        </CoolButton>
        <br />
        <EdipButton>
          Maviş
        </EdipButton>
        <br />
        <SubmitButton>
          Submitt
        </SubmitButton>

      </StyledContainer>
    </>
  );
}

export default App;