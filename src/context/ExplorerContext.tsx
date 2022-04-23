import { cloneDeep, get, set, unset } from "lodash";
import { createContext, useState } from "react";
import IExplorer from "./ExplorerContext.types";

export const ExplorerContext = createContext({});

const Explorer = ({ config, children }: IExplorer) => {
  const [explorer, setExplorer] = useState(config);

  // TODO - add a function to add a new file/Directory
  // TODO - add a function to delete a file/Directory
  // TODO - add a function to move files/Directory
  // TODO - add a function to rename files/Directory
  const handleRename = (objectPath: string, value: string) => {
    const clonedExplorer = cloneDeep(explorer);

    //* rename item
    const explorerItem = get(clonedExplorer, objectPath);
    explorerItem.name = value;

    //* remove old item
    unset(clonedExplorer, objectPath);

    //* modify objectPath
    const modifiedObjectPath = `${objectPath.substring(
      0,
      objectPath.lastIndexOf(".")
    )}.${value.trim().toLocaleLowerCase().replace(" ", "")}`;

    //* add new item
    set(clonedExplorer, modifiedObjectPath, explorerItem);

    setExplorer(clonedExplorer);
  };

  return (
    <ExplorerContext.Provider value={{ explorer, handleRename }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export default Explorer;
