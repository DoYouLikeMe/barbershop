import FeatureItem from "./FeatureItem";
export default function Features() {
  return (
    <div className="features">
      <FeatureItem
        heading="Быстро"
        description="Мы делаем свою работу быстро! два часа пролетят незаметно и вы — счастливый обладетель стильной стрижки-минутки!"
      />
      <FeatureItem
        heading="Круто"
        description="Забудьте, как вы стриглись раньше. Мы сделаем из вас звезду футбола или кино! во всяком случае внешне.
"
      />
      <FeatureItem
        heading="Дорого"
        description="Наши мастера — профессионалы своего дела и не могут стоить дешево. К тому же, разве цена не дает определеный статус?"
      />
    </div>
  );
}
