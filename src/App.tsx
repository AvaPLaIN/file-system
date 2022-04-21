import { useContext } from "react";
import { ExplorerContext } from "./context/ExplorerContext";
import Controller from "./components/controller/Controller";

function App() {
  const explorer = useContext(ExplorerContext);

  return (
    <div className="file-system">
      {Object.entries(explorer).map(([key, value]: any) => {
        return <Controller key={key} item={value} />;
      })}
    </div>
  );
}

export default App;
