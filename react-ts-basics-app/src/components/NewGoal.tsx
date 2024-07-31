import React, { FormEvent, useRef } from "react";

interface Props {
  // define props here
}

const NewGoal: React.FC<Props> = ({}) => {
  const goal = useRef(null);
  const summary = useRef(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary}></input>
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
