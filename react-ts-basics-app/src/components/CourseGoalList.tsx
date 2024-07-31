import React from "react";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  goals: { title: string; description: string; id: number }[];
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({
  goals,
}: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} description={goal.description}>
            <p>what is your goal?</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
