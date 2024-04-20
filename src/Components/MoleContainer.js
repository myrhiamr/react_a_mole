import React, { useState } from "react";
import Mole from "./Mole"; // component
import EmptySlot from "./EmptySlot"; // component

function MoleContainer(props) { // defines a React component 
  const [displayMole, setDisplayMole] = useState(false);
          //state variable               // useState hook & variable set to false intially

  const handleClick = (e) => {
    props.setScore(props.score + 1);   /// function handles a mole being bopped:
    setDisplayMole(false);
  };

  const moleComponent = displayMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setDisplayMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setDisplayMole} />
  );

  return (
    <div style={{ display: "inline-block", width: "30vw" }}>{moleComponent}</div>
  );
}

export default MoleContainer;
