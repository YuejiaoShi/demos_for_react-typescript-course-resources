import React from "react";

interface Props {
  // define props here
}

const NewGoal: React.FC<Props> = ({}) => {
  return (
    <form>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text"></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text"></input>
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
