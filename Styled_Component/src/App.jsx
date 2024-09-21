// App.jsx
import Button from './components/Button/Button';
import { StyledContainer } from './components/styled';
import { CoolButton, StrongButton, EdipButton } from './components/Button/Button.Styled';

function App() {
  return (
    <>
      <StyledContainer>
        <h1>Deneme</h1>
        <Button $primary className="btn">
          İncele
        </Button>
        <StrongButton $primary>
          Strong Button
        </StrongButton>
        <CoolButton $primary={false}>
          Cool Button
        </CoolButton>
        <CoolButton $primary={true}>
          Cool
        </CoolButton>
        <EdipButton>
          Maviş
        </EdipButton>
      </StyledContainer>
    </>
  );
}

export default App;