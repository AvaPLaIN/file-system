import { Directory, File } from "../../types/explorer";

export default interface IController {
  item: File | Directory;
}
