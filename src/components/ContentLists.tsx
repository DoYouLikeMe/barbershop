import React from "react";

type ContentListProps = {
  children: React.ReactNode;
};

type ClassNameProps = {
  className?: string;
};

export default function ContentList({ children }: ContentListProps) {
  return (
    <ul className="content-list">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ClassNameProps>(child)) {
          return React.cloneElement(child, {
            className: [child.props.className, "content-list__item"]
              .filter(Boolean)
              .join(" "),
          });
        }
        return child;
      })}
    </ul>
  );
}
