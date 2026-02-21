import Link from "next/link";
import Image from "next/image";

import { NewsPreviewExpandedType } from "@/lib/types";

type NewsPreviewExpandedProps = {
  newsPreview: NewsPreviewExpandedType;
};

export default function NewsPreviewExpanded({
  newsPreview,
}: NewsPreviewExpandedProps) {
  const { slug, title, preview, img, date } = newsPreview;

  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link className="news-expanded" href={`/news/${slug}`}>
      <div className="news-expanded__wrapper">
        <Image src={img} alt={title} width={150} height={150} />
        <div className="news-expanded__content">
          <h2 className="news-expanded__title">{title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: preview }}
            className="news-expanded__text"
          ></div>
        </div>
      </div>
      <div className="news-expanded__date">{formattedDate}</div>
    </Link>
  );
}
