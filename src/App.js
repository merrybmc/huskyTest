function App() {
  const name = 'hello';
  const house = 'aaa';
  const obj = {
    name: 'hello',
    house: true
  };
  var test = '1234';
  return (
    <>
      <div
        className='App'
        onClick={(e) => {
          console.log(e.target);
        }}
        onMouseDown={() => {}}
        onMouseEnter={() => {}}>
        안녕하세요
      </div>
    </>
  );
}

export default App;
