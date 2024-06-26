import {useState} from 'react';
import data from './test.json';

function App() {
  const [name] = useState(1);
  console.log(name);
  console.log(data);

  let list = [{name: 'abcd'}, {name: 'bcd'}];

  // bracket notation
  // console.log(list[0]['name']);

  // dot notation 123 45
  console.log(list[0].name);
  return (
    <>
      {name}
      {data.name}
      {data.age}
      {list.map((data, index) => (
        <p key={index}>{data.name}</p>
      ))}
      <div className='App' onClick={(e) => {}} onMouseDown={() => {}} onMouseEnter={() => {}}>
        안녕하세요
      </div>
    </>
  );
}

export default App;
