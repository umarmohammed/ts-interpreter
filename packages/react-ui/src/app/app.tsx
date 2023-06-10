// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { interpret } from '@ts-interpreter/interpreter-core';
import { useState } from 'react';

export function App() {
  const [code, setCode] = useState('');

  const [res, setRes] = useState('');

  function handleSubmit() {
    setRes(JSON.stringify(interpret(code), null, 2));
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

      <pre>{res}</pre>
    </>
  );
}

export default App;
