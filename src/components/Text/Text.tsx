import "./Text.css";
interface Props {
  text: string;
}

export const Text: React.FC<Props> = ({ text }) => {
  return <p className="modal__content-text">{text}</p>;
};
