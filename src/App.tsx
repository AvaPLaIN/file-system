import { useContext } from "react";
import Controller from "./components/controller/Controller";
import { ExplorerContext } from "./context/ExplorerContext";

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
