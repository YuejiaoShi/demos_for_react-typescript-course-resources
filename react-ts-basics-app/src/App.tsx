import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalImg, alt: "list a goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        title="Learn react+ TS"
        description="Learn it from the ground up"
      >
        <p>what is your goal?</p>
      </CourseGoal>
    </main>
  );
}
