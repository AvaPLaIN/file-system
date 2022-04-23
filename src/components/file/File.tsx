import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileImage,
  AiOutlineFilePdf,
  AiOutlineFileUnknown,
} from "react-icons/ai";
import { BiCheck, BiMove } from "react-icons/bi";
import { GrDocumentTxt } from "react-icons/gr";
import { MdOutlineClose, MdOutlinePreview } from "react-icons/md";
import styles from "./File.module.scss";
import IFile from "./File.types";

const File = ({ item, objectPath }: IFile) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fileName, setFileName] = useState(item?.name);

  const fileTypeMap = {
    txt: GrDocumentTxt,
    pdf: AiOutlineFilePdf,
    jpg: AiOutlineFileImage,
    png: AiOutlineFileImage,
    default: AiOutlineFileUnknown,
  };

  const FileTypeIcon =
    fileTypeMap[item.fileType as keyof typeof fileTypeMap] ||
    fileTypeMap["default"];

  const handleStartEditing = () => setIsEditing(true);
  const handleStopEditing = () => setIsEditing(false);

  const handleChangeFileName = (event: any) =>
    setFileName(event?.target?.value);

  const handleSaveFileName = () => {
    setIsEditing(false);
    console.log("objectPath", objectPath);
    // TODO save file name
  };

  return (
    <div className={styles["file-container"]}>
      <div className={styles["file-info"]}>
        <FileTypeIcon />
        {isEditing ? (
          <>
            <input
              type="text"
              value={fileName}
              onChange={handleChangeFileName}
            />
            <MdOutlineClose onClick={handleStopEditing} />
            <BiCheck onClick={handleSaveFileName} />
          </>
        ) : (
          <p>{item?.name}</p>
        )}
        <p>.{item?.fileType}</p>
      </div>
      <div className={styles["file-controls"]}>
        <div className="edit" onClick={handleStartEditing}>
          <AiOutlineEdit />
        </div>
        <div className="preview">
          <MdOutlinePreview />
        </div>
        <div className="move">
          <BiMove />
        </div>
        <div className="delete">
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default File;
