type SecondaryTitleProps = {
  children: React.ReactNode;
};
export default function SecondaryTitle({ children }: SecondaryTitleProps) {
  return (
    <h2 className="secondary-title">
      <span className="secondary-title__text">{children}</span>
    </h2>
  );
}
