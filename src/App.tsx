import { useContext } from "react";
import Controller from "./components/controller/Controller";
import { ExplorerContext } from "./context/ExplorerContext";

function App() {
  const explorer = useContext(ExplorerContext);

  return (
    <div className="file-system">
      {Object.entries(explorer).map(([key, value]: any) => {
        const objectPath = key;
        return <Controller key={key} item={value} objectPath={objectPath} />;
      })}
    </div>
  );
}

export default App;
