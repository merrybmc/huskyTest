import {useState} from 'react';
import data from './test.json';

function App() {
  const [name] = useState(1);
  console.log(name);
  console.log(data);

  let abc = 1;

  let abcd = 1;

  if (abc == abcd) {
  }
  return (
    <>
      {name}
      {data.name}
      {data.age}
      <div className='App' onClick={(e) => {}} onMouseDown={() => {}} onMouseEnter={() => {}}>
        안녕하세요
      </div>
    </>
  );
}

export default App;
