import { useContext, useState } from "react";
import {
  AiFillFileAdd,
  AiFillFolder,
  AiFillFolderAdd,
  AiFillFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { BiCheck, BiMove } from "react-icons/bi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdOutlineClose,
} from "react-icons/md";
import { ExplorerContext } from "../../context/ExplorerContext";
import Controller from "../controller/Controller";
import styles from "./Directory.module.scss";
import IDirectory from "./Directory.types";

const Directory = ({ item, objectPath }: IDirectory) => {
  const { handleRename }: any = useContext(ExplorerContext);

  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [directoryName, setDirectoryName] = useState(item?.name);

  const handleToggleDirectoryOpen = () => setIsDirectoryOpen((prev) => !prev);

  const handleStartEditing = () => setIsEditing(true);
  const handleStopEditing = () => setIsEditing(false);

  const handleChangeDirectoryName = (event: any) =>
    setDirectoryName(event?.target?.value);

  const handleSaveDirectoryName = () => {
    setIsEditing(false);
    handleRename(objectPath, directoryName);
  };

  // TODO - do not change "isEditing" State when clicking on input field

  return (
    <div className={styles["directory-container"]}>
      <div className={styles["directory-info-bar"]}>
        <div
          className={styles["directory-info"]}
          onClick={handleToggleDirectoryOpen}
        >
          {isDirectoryOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          {isDirectoryOpen ? <AiFillFolderOpen /> : <AiFillFolder />}
          {isEditing ? (
            <>
              <input
                type="text"
                value={directoryName}
                onChange={handleChangeDirectoryName}
              />
              <MdOutlineClose onClick={handleStopEditing} />
              <BiCheck onClick={handleSaveDirectoryName} />
            </>
          ) : (
            <p className={styles["name"]}>{item.name}</p>
          )}
        </div>
        <div className={styles["directory-controls"]}>
          <div className="edit" onClick={handleStartEditing}>
            <AiOutlineEdit />
          </div>
          <div className="add-file">
            <AiFillFileAdd />
          </div>
          <div className="add-directory">
            <AiFillFolderAdd />
          </div>
          <div className="move">
            <BiMove />
          </div>
          <div className="delete">
            <AiOutlineDelete />
          </div>
        </div>
      </div>
      {isDirectoryOpen && (
        <div className={styles["directory-files"]}>
          {Object.entries(item?.files).map(([key, value]: any) => {
            const enhancedObjectPath = `${objectPath}.files.${key}`;

            return (
              <Controller
                key={key}
                item={value}
                objectPath={enhancedObjectPath}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Directory;
