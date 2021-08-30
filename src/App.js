const handleClick = () => {
  console.log("bakwas na kar");
};

function App() {
  const link = "http/:www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>App testing</h1>
        <p>kjhgsagACIUAGCS</p>
        <a href={link}>google</a>
        <button className="button" onClick={handleClick}>
          click here
        </button>
      </div>
    </div>
  );
}

export default App;
