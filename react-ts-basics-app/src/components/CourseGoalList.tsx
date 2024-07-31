import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalProps } from "../App.tsx";

interface CourseGoalListProps {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          >
            <p>what is your goal?</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
