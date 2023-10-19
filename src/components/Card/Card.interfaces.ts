import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: string | undefined;
  title: string;
  authors: string[];
  img?: string;
}
