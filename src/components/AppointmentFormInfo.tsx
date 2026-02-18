import MainForm from "./MainForm";
export default function AppointmentFormInfo() {
  return (
    <div className="appointment-info">
      <h2 className="paper-block__title">Записаться</h2>
      <p className="paper-block__paragraph">
        Укажите желаемую дату и время и мы свяжемся с вами для подтверждения
        брони
      </p>
      <MainForm />
    </div>
  );
}
