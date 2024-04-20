import { useState } from "react";
import MoleContainer from './Components/MoleContainer'

function App() {  // defines react component 
  const [score, setScore] = useState(0);
      //state variable       //hook with inital value

  const createMoleHill = () => {
    // define a function


    const hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
      <MoleContainer key={i} setScore={setScore} score={score}/>)
    }
 
    return <div>{hills}</div>;
  };

  return (
    <div className="App">
      <h1 style={{'text-align': 'center'}}>React-a-Mole!</h1>
      <p style={{'text-align': 'center'}}>{score}</p>
      {createMoleHill()}
    </div>
  );
}

export default App;