import { ReactElement } from "react";
import { File, Directory } from "../types/explorer";

export default interface IExplorer {
  config: {
    [key: string]: File | Directory;
  };
  children?: ReactElement[] | JSX.Element | string;
}
