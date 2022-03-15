import { Counter } from "./components/Counter";
import { Usuario } from './components/Usuario';

import { TimerPadre } from "./components/TimerPadre";

import { ContadorRedu } from "./components/ContadorRedu";

import { Formulario } from "./components/Formulario";

export default function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <hr/>
      <h2>useEffect - useRef</h2>
      <TimerPadre />
      <hr/>
      <h2>useReducer</h2>
      <ContadorRedu />
      <hr/>
      <h2>CustomHook - Formulario</h2>
      <Formulario />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}