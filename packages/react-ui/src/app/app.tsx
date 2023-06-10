// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { interpret } from '@ts-interpreter/interpreter-core';
import { useState } from 'react';

export function App() {
  const [code, setCode] = useState('');

  function handleSubmit() {
    interpret(code);
  }

  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        cols={30}
        rows={10}
      ></textarea>
      {code ? <button onClick={handleSubmit}>Submit</button> : null}
    </>
  );
}

export default App;
