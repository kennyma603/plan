import { ContentType } from "./enums";

export interface CalendarTileContentProps {
  type: ContentType;
  tileDate: string;
  isUserDefinedDate: boolean;
}

export type UserDefinedDate = {
  [key: string]: { type: ContentType };
};

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
