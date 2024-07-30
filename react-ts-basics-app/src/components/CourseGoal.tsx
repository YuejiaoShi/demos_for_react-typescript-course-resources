import { FC, PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <button>Delete</button>
      </div>
    </article>
  );
};
export default CourseGoal;
