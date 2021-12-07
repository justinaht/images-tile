export interface TextBoxProps {
  value: string;
  id: number;
  onValueChanged: (txt: string) => void;
  onLostFocus: (txt: string, id: number) => void
}
