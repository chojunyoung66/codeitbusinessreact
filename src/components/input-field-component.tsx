import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type InputFieldComponentProps = {
  id: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  errorMessage?: string;
};

const InputFieldComponent = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  errorMessage,
}: InputFieldComponentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(errorMessage)}
      />
      {errorMessage ? (
        <p style={{ color: "red", margin: 0 }}>{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default InputFieldComponent;
