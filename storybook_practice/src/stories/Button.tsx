import button from "../components/button";
import "./button.css";
import React, { useMemo } from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const getSizeClasses = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-6 py-3";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary: boolean) => (isPrimary ? "text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700" : "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white");

//div class에 바로 셋팅을 하는 게 아니라, 아래처럼 변수로 지정을 하는 것!
const BASE_BUTTON_CLASSES: string = "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

/**
 * Primary UI component for user interaction
 */

export const Button = ({ primary = false, size = "medium", label, ...props }: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);

  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
  );
};

// export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
//   const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
//   return (
//     <button type="button" className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} style={{ backgroundColor }} {...props}>
//       {label}
//     </button>
//   );
// };
