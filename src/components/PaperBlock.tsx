type PaperBlockProps = {
  children: React.ReactNode;
};

export default function PaperBlock({ children }: PaperBlockProps) {
  return <section className="paper-block">{children}</section>;
}
