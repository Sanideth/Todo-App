interface IProps {
  type: string;
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<IProps> = ({ type, children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
