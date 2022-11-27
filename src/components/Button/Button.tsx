interface IProps {
  type: string;
  children: React.ReactNode;
  className: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    filter: string
  ) => void;
  filter?: string;
}

const Button: React.FC<IProps> = ({
  type,
  children,
  className,
  onClick,
  filter,
}) => {
  return (
    <button
      className={className}
      onClick={(event) => onClick && filter && onClick(event, filter)}
    >
      {children}
    </button>
  );
};

export default Button;
