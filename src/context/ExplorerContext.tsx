import { createContext, useState } from "react";
import IExplorer from "./ExplorerContext.types";

export const ExplorerContext = createContext({});

const Explorer = ({ config, children }: IExplorer) => {
  const [explorer] = useState(config);

  // TODO - add a function to add a new file/Directory
  // TODO - add a function to delete a file/Directory
  // TODO - add a function to move files/Directory
  // TODO - add a function to rename files/Directory

  return (
    <ExplorerContext.Provider value={explorer}>
      {children}
    </ExplorerContext.Provider>
  );
};

export default Explorer;
