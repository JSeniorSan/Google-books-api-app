import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISelect
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  optionsData: Array<string>;
}
