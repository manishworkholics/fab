import { ReactNode } from "react";

type StepWrapperProps = {
  children: ReactNode;
  active: boolean;
};

export default function StepWrapper({ children, active }: StepWrapperProps) {
  if (!active)
    return <div className="pointer-events-none cursor-not-allowed opacity-25">{children}</div>;
  return <>{children}</>;
}
