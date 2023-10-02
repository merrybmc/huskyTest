import {useState} from 'react';

function App() {
  const [name, setName] = useState(0);

  return (
    <>
      {name}
      <div className='App' onClick={(e) => {}} onMouseDown={() => {}} onMouseEnter={() => {}}>
        안녕하세요
      </div>
    </>
  );
}

export default App;
