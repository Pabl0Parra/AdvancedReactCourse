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
      <Button text="Button 1" color="blue" handleClick={handleClick1} />
      <Button text="Button 2" color="orange" handleClick={handleClick2} />
    </div>
  );
}

export default App;
