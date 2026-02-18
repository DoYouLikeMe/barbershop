import { z } from "zod";

export const FormSchema = z.object({
  date: z
    .string()
    .regex(/^\d{2}-\d{2}-\d{2}$/, "Формат ДД-ММ-ГГ")
    .refine((value) => {
      const [d, m, y] = value.split("-").map(Number);
      const date = new Date(2000 + y, m - 1, d);

      return (
        date.getDate() === d &&
        date.getMonth() === m - 1 &&
        date.getFullYear() === 2000 + y
      );
    }, "Некорректная дата"),
  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Формат 00:00")
    .refine((value) => {
      const [hours, minutes] = value.split(":");

      const isHoursValid = Number(hours) >= 0 && Number(hours) <= 24;
      const isMinutesValid = Number(minutes) >= 0 && Number(minutes) <= 60;

      return isHoursValid && isMinutesValid;
    }, "Введите правильную дату"),
  guest: z.string().max(30, "Пожалуйста, введите имя менее 30 символов"),
  phone: z
    .string()
    .max(30)
    .regex(/^[0-9()+\s-]*$/, "Введите корректный номер телефона"),
});
