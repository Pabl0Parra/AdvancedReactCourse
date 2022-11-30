import { Button } from "./Button";

function App() {
  const handleClick1 = () => {
    alert("You have click on 1");
  };

  const handleClick2 = () => {
    alert("You have click on 2");
  };

  return (
    <div className="App">
      <p> Hola, bienvenidos a todos!</p>
      <Button color="blue" handleClick={handleClick1}>
        Button 1
      </Button>
      <Button color="orange" handleClick={handleClick2}>
        Button 2
      </Button>
    </div>
  );
}

export default App;
