import { NewsItemType } from "@/lib/types";

type newsItemProps = {
  newsItem: NewsItemType;
};

export default function NewsItem({ newsItem }: newsItemProps) {
  const { title, date } = newsItem;
  return (
    <div className="news-item">
      <h3 className="news-item__title">{title}</h3>
      <p className="news-item__date">{date}</p>
    </div>
  );
}
