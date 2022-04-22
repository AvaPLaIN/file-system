import IFile from "./File.types";
import styles from "./File.module.scss";
import { GrDocumentTxt } from "react-icons/gr";
import {
  AiOutlineFileUnknown,
  AiOutlineFilePdf,
  AiOutlineFileImage,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiMove } from "react-icons/bi";
import { MdOutlinePreview } from "react-icons/md";

const File = ({ item }: IFile) => {
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

  return (
    <div className={styles["file-container"]}>
      <div className={styles["file-info"]}>
        <FileTypeIcon />
        <p>{item?.name}</p>
        <p>.{item?.fileType}</p>
      </div>
      <div className={styles["file-controls"]}>
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
