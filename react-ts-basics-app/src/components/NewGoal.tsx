import React, { FormEvent } from "react";

interface Props {
  // define props here
}

const NewGoal: React.FC<Props> = ({}) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal"></input>
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
