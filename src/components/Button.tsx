import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  modifications?: string[];
  onClick?: (() => void) | ((e: React.MouseEvent) => void);
  type: "button" | "submit" | "reset" | undefined;
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  modifications,
}: ButtonProps) {
  const modificationString =
    modifications?.map((modification) => `button__${modification}`).join(" ") ||
    "";

  const modificatedClassName = clsx("button", modificationString);

  if (href) {
    return (
      <Link className={modificatedClassName} href={href}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        onClick={onClick ? onClick : undefined}
        className={modificatedClassName}
      >
        {children}
      </button>
    );
  }
}
