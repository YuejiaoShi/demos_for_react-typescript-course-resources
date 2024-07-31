import { FC, PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
//   children: ReactNode;
// };
// An alternative way to define children's reactNode type
// while also extends more specific props types lie title and description here
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  id,
  title,
  description,
  children,
  onDelete,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
};
export default CourseGoal;
