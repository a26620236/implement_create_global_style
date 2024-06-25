import { useState } from 'react'
import propTypes from 'prop-types'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styled from './createStyledComponent'

function Button({ 
  evaluatedStyle,
  label,
}) {
  return (
    <>
      <p>
        {evaluatedStyle}
      </p>
      <button>{label}</button>
    </>
  );
}

Button.propTypes = {
  label: propTypes.string,
  evaluatedStyle: propTypes.string,
};

const StyledButton = styled(Button)`
  font-size: 100px;
  color: ${({ $color }) => $color};
  margin-top: 100px;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <StyledButton $color="red" label="Fuck Button" />
    </>
  )
}

export default App
