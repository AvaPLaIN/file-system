import { useState } from "react";
import {
  AiFillFileAdd,
  AiFillFolder,
  AiFillFolderAdd,
  AiFillFolderOpen,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiMove } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Controller from "../controller/Controller";
import styles from "./Directory.module.scss";
import IDirectory from "./Directory.types";

const Directory = ({ item, objectPath }: IDirectory) => {
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  const handleToggleDirectoryOpen = () => setIsDirectoryOpen((prev) => !prev);

  return (
    <div className={styles["directory-container"]}>
      <div className={styles["directory-info-bar"]}>
        <div
          className={styles["directory-info"]}
          onClick={handleToggleDirectoryOpen}
        >
          {isDirectoryOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          {isDirectoryOpen ? <AiFillFolderOpen /> : <AiFillFolder />}
          <p className={styles["name"]}>{item.name}</p>
        </div>
        <div className={styles["directory-controls"]}>
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
