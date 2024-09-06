import React from 'react';

interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({
  handleChange,
  value,
  title,
  name,
}) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};
