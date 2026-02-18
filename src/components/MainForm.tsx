"use client";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormSchema } from "../schemas/FormSchema";
import { formatDate, formatTime, formatPhoneNumber } from "../lib/validation";
import { FormField } from "./FormFields";

type FormData = z.infer<typeof FormSchema>;

export default function MainForm() {
  function onSubmit(data: FormData) {
    console.log(data);
  }

  const { control, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: "",
      time: "",
      guest: "",
      phone: "",
    },
  });

  return (
    <form
      className="main-form"
      onSubmit={handleSubmit(
        (data) => {
          onSubmit(data);
          reset({ date: "" }, { keepErrors: true, keepDirty: false });
        },
        (errors) => {
          console.log("Validation Errors:", errors);
          reset({ date: "" }, { keepErrors: true, keepDirty: false });
        },
      )}
    >
      <div className="main-form__form-grid">
        <FormField
          id="date-input"
          name="date"
          type="text"
          control={control}
          placeholder="Дата"
          error={formState.errors.date?.message}
          formatValue={formatDate}
        />
        <FormField
          id="time-input"
          name="time"
          type="text"
          control={control}
          placeholder="Время"
          error={formState.errors.time?.message}
          formatValue={formatTime}
        />
        <FormField
          id="guest-input"
          name="guest"
          type="text"
          control={control}
          placeholder="Ваше имя"
          error={formState.errors.guest?.message}
        />
        <FormField
          id="phone-input"
          name="phone"
          type="text"
          control={control}
          placeholder="Ваш телефон"
          error={formState.errors.phone?.message}
          formatValue={formatPhoneNumber}
        />
      </div>
      <Button type="submit">Отправить</Button>
    </form>
  );
}
