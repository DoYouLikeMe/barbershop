import { Controller, Control, FieldValues, Path } from "react-hook-form";

type FormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  error?: string;
  formatValue?: (value: string, prevValue: string) => string;
  id?: string;
  type: string;
};

export function FormField<T extends FieldValues>({
  name,
  control,
  placeholder,
  error,
  type,
  formatValue,
  id,
}: FormFieldProps<T>) {
  return (
    <label className="main-form__label" htmlFor={id}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={id}
            className="main-form__input"
            type={type}
            value={field.value ?? ""}
            placeholder={error ?? placeholder}
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(
                formatValue ? formatValue(value, field.value) : value,
              );
            }}
            onBlur={field.onBlur}
          />
        )}
      />
    </label>
  );
}
