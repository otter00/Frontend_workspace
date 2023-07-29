import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent/Input';
import ButtonComponent from './components/ButtonComponent/Button';
import ButtonStyles from './components/ButtonComponent/ButtonStyle.module.scss';
import InputStyles from './components/InputComponent/InputStyle.module.scss';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputComponent 
        type='text' 
        className={InputStyles.column_direction}
        value={'hey, imma input'}>
          {'imma label for input'}
        </InputComponent>

        <ButtonComponent 
        type='submit'
        className={[ButtonStyles.green_button, ButtonStyles.button_appearance].join(' ')}
        onClick={() => alert("Button clicked!")}>
          {'hey, imma button'}
        </ButtonComponent>
      </header>
    </div>
  );
}
