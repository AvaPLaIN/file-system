import Directory from "../directory/Directory";
import File from "../file/File";
import IController from "./Controller.types";

const Controller = ({ item, objectPath }: IController) => {
  const typeMap = {
    file: File,
    directory: Directory,
  };

  const Component = typeMap[item.type as keyof typeof typeMap];

  return (
    <>
      <Component item={item as any} objectPath={objectPath} />
    </>
  );
};

export default Controller;
