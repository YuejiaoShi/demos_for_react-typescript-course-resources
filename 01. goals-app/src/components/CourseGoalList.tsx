import React from "react";
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CourseGoalProps } from "../App.tsx";
import InfoBox from "./Infobox.tsx";

interface CourseGoalListProps {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some:)
      </InfoBox>
    );
  }
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
