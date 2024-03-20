import "./Textarea.css";

interface Props {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const Textarea: React.FC<Props> = ({ description, setDescription }) => {
  return (
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
