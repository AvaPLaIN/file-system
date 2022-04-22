import { useState } from "react";
import IDirectory from "./Directory.types";
import Controller from "../controller/Controller";
import styles from "./Directory.module.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import {
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineDelete,
  AiFillFileAdd,
  AiFillFolderAdd,
} from "react-icons/ai";
import { BiMove } from "react-icons/bi";

const Directory = ({ item }: IDirectory) => {
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
            return <Controller key={key} item={value} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Directory;
