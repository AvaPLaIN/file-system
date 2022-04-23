import {
  AiOutlineDelete,
  AiOutlineFileImage,
  AiOutlineFilePdf,
  AiOutlineFileUnknown,
} from "react-icons/ai";
import { BiMove } from "react-icons/bi";
import { GrDocumentTxt } from "react-icons/gr";
import { MdOutlinePreview } from "react-icons/md";
import styles from "./File.module.scss";
import IFile from "./File.types";

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
