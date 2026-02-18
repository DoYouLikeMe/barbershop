// TODO (Я): переписать функцию formatTime, она делает одно и тоже, разница лишь в длине и символе
import { AsYouType } from "libphonenumber-js";

export function formatDate(value: string, previousValue: string = "") {
  const isBackSpace = previousValue.slice(-1) === "-";

  const digits = value.replace(/\D/g, "").slice(0, 6);

  if (digits.length === 0) return "";

  if (digits.length <= 2) {
    return digits.length === 2 && !isBackSpace ? `${digits}-` : digits;
  }

  if (digits.length <= 4) {
    return (
      `${digits.slice(0, 2)}-${digits.slice(2)}` +
      (digits.length === 4 && !isBackSpace ? "-" : "")
    );
  }

  return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`;
}

export function formatTime(value: string, previousValue: string = "") {
  const isBackSpace = previousValue.slice(-1) === ":";

  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length === 0) return "";

  if (digits.length <= 2) {
    return digits.length === 2 && !isBackSpace ? `${digits}:` : digits;
  }

  return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
}

export function formatPhoneNumber(value: string) {
  const formatter = new AsYouType("RU");

  // оставляем только цифры и +
  const normalized = value.replace(/[^\d]/g, "");

  return `+${formatter.input(normalized)}`;
}
