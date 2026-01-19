import clsx from "clsx";

type FeatureCardProps = {
  icon: React.ReactNode;
  text: string;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  text,
  backgroundColor = "#ffffff",
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          onClick();
        }
      }}
      className={clsx(
        "p-4 rounded-md shadow transition flex flex-col",
        onClick &&
          "cursor-pointer hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2",
        className,
      )}
      style={{ backgroundColor }}
    >
      <div className="mb-9">{icon}</div>
      <h3 className="text-sm font-medium text-gray-800 mb-3 break-words">{text}</h3>
    </div>
  );
};
