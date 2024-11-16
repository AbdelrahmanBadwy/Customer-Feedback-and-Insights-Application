import React from "react";

type DropdownProps = {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  className = "",
}) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
