import React, { PropsWithChildren } from 'react';
import './App.css';
import InputComponent from './components/InputComponent/Input';
import ButtonComponent from './components/ButtonComponent/Button';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputComponent type='text' value={'hey, imma input'}></InputComponent>
        <ButtonComponent 
        type='submit'
        onClick={() => alert("Button clicked!")}>
          {'hey, imma button'}
        </ButtonComponent>
      </header>
    </div>
  );
}
