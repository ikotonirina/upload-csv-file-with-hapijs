// frontend/src/components/Input.tsx
import React from "react";
import "../styles/components/input.css";

interface InputProps {
  type: string;
  id: string;
  accept?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, id, accept, onChange }) => {
  return (
    <input
      className="custom-input"
      type={type}
      id={id}
      accept={accept}
      onChange={onChange}
    />
  );
};

export default Input;
