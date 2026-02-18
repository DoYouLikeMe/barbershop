type FeatureItemProps = {
  heading: string;
  description: string;
};

export default function FeatureItem({
  heading,
  description,
}: FeatureItemProps) {
  return (
    <div className="feature-item">
      <div className="feature-item__heading">{heading}</div>
      <div className="feature-item__description">{description}</div>
    </div>
  );
}
