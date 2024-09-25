import React, { useContext } from 'react';
import { INCREMENT, DECREMENT, RESET } from './reducer/counter';
import { SiteContext } from './context/siteContext';
import About from './About';
import ContextAboutPage from './ContextAboutPage';
import AddTodo from './AddTodo';

function App() {
  const { counter: { state, dispatch } } = useContext(SiteContext); // state ve dispatch'i alıyoruz

  return (
    <>
      <AddTodo />

    <hr />
      <h2>Count = {state}</h2> {/* state değerini kullanıyoruz */}
      <button onClick={() => dispatch({ type: INCREMENT })}>Arttır</button> {/* Doğru dispatch yapısı */}
      <button onClick={() => dispatch({ type: DECREMENT })}>Azalt</button>
      <button onClick={() => dispatch({ type: RESET })}>Sıfırla</button>
      <hr />
      <ContextAboutPage />
      <About />
    </>
  );
}

export default App;