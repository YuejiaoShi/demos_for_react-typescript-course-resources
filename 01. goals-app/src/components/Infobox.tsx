import React, { ReactNode } from "react";

interface InfoBoxProps {
  mode: "hint" | "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
}

const InfoBox: React.FC<InfoBoxProps> = ({ mode, severity, children }) => {
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
