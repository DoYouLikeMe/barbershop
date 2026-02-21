type InnerPageProps = {
  children: React.ReactNode;
};

export default function InnerPage({ children }: InnerPageProps) {
  return <main className="inner-page">{children}</main>;
}
