import { File, Directory } from "../../types/explorer";

export default interface IController {
  item: File | Directory;
}
