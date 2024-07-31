import React, { FormEvent } from "react";

interface Props {
  // define props here
}

function handleSubmit(event: FormEvent) {
  event.preventDefault;
}

const NewGoal: React.FC<Props> = ({}) => {
  return (
    <form onSubmit={handleSubmit}>
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
