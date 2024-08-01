import React, { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// interface InfoBoxProps {
//   mode: "hint" | "warning";
//   children: ReactNode;
//   severity?: "low" | "medium" | "high";
//   // Another syntax for indicating an optional prop is:
//   // severity?: "low" | "medium" | "high" | undefined;
// }

const InfoBox: React.FC<InfoBoxProps> = (props: InfoBoxProps) => {
  const { children } = props;

  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
