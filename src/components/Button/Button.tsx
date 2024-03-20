import "./Button.css";

interface Props {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ type, children, size, onClick }) => {
  const typeSize = (size === "large" ? "modalbtn primary large" : "modalbtn primary")
  const btnClass = type === "primary" ? typeSize : "modalbtn";
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
