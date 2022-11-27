interface IProps {
  placeholder: string;
  className: string;
  type: string;
}

const InputField: React.FC<IProps> = ({ placeholder, className, type }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default InputField;
