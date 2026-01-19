import { ReactNode, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import LoaderIcon from "../icons/LoaderIcon";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#EB5017] text-white hover:bg-[#e15017cc]",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-[#EB5017] text-[#EB5017] bg-transparent hover:bg-[#EB501710]",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        ghost: "bg-transparent hover:bg-gray-100",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[50px] px-4 text-[16px]",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string | JSX.Element;
  type?: ButtonType;
  position?: string;
  isLoading?: boolean;
  handleClick?: VoidFunction;
  shadow?: string;
  children?: ReactNode;
  leftIcon?: ReactNode;
  width?: string;
  color?: string;
  background?: string;
  styles?: string;
  asChild?: boolean;
}

const Button = ({
  text,
  type = "button",
  variant,
  size,
  position,
  isLoading,
  disabled,
  handleClick,
  children,
  className,
  shadow,
  leftIcon,
  width,
  color,
  background,
  styles,
  asChild = false,
  ...props
}: ButtonProps) => {
  const content = isLoading ? (
    <LoaderIcon />
  ) : (
    <div className={cn("flex items-center justify-center", (text || children) && "gap-2")}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {text && <span>{text}</span>}
      {children && <span>{children}</span>}
    </div>
  );
  const Comp = asChild ? Slot : "button";

  return (
    <div className={position}>
      <Comp
        type={type}
        className={cn(
          buttonVariants({ variant, size }),
          width ?? "w-[138px]",
          background ?? "",
          color ?? "",
          shadow,
          styles,
          className,
        )}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {content}
      </Comp>
    </div>
  );
};

export default Button;
export { buttonVariants };
