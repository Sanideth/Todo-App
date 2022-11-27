import { ITodo } from "../../App/App";

interface IProps {
  placeholder: string;
  className: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputField: React.FC<IProps> = ({
  placeholder,
  className,
  type,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
