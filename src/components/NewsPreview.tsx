import Button from "./Button";
import NewsItem from "./NewsItem";

const newsItems = [
  {
    title:
      "Нам наконец завезли ягермайстер! теперь вы можете пропустить стаканчик во время стрижки",
    date: "11 января",
  },
  {
    title:
      "В нашей команде пополнение, борис «бритва» стригунец, обладетель множества титулов и наград пополнил наши стройные ряды",
    date: "18 января",
  },
];

export default function NewsPreview() {
  return (
    <div className="news-preview">
      <h2 className="paper-block__title">Новости</h2>
      <div className="news-preview__wrapper">
        {newsItems.map((newsItem) => {
          return <NewsItem key={newsItem.title} newsItem={newsItem} />;
        })}
      </div>
      <Button href="news">Все новости</Button>
    </div>
  );
}
