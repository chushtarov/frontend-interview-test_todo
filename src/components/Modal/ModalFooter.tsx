import { Button } from "components/Button/Button";

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ clearState, setActive, submitBtnText, size, onSubmit }) => {
  return (
    <footer className="modal__content-footer">
      <Button type="primary" size={size || ""} onClick={onSubmit}>
        {submitBtnText}
      </Button>
      <Button
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        Закрыть
      </Button>
    </footer>
  );
};
