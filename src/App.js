import {useState} from 'react';

function App() {
  const name = useState(1);

  return (
    <>
      {name}
      {name}
      {name}
      {name}
      {name}

      <div className='App' onClick={(e) => {}} onMouseDown={() => {}} onMouseEnter={() => {}}>
        안녕하세요
      </div>
    </>
  );
}

export default App;
