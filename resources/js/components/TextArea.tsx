import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea: React.FC<IProps> = ({
  label,
  error,
  name,
  className,
  ...props
}: IProps) => {
  return (
    <div className={`input-group ${className}`}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        {...{ ...props, className: "" }}
        placeholder={props.placeholder}
      ></textarea>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TextArea;
