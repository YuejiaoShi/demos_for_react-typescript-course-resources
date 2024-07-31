import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoal = { title: string; description: string; id: number };

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals([...goals]);
  }
  return (
    <main>
      <Header image={{ src: goalImg, alt: "list a goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal
        title="Learn react+ TS"
        description="Learn it from the ground up"
      >
        <p>what is your goal?</p>
      </CourseGoal>
    </main>
  );
}
