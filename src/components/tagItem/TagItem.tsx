import { FC } from "react";
import s from "./TagItem.module.css";

interface TagItemProps {
  tagName: string;
  isSelected: boolean;
  handleTagSelect: (tag: string) => VoidFunction;
}

export const TagItem: FC<TagItemProps> = ({
  tagName,
  isSelected,
  handleTagSelect,
}) => (
  <li
    className={`${s.tagItem} ${isSelected ? s.active : ""}`}
    onClick={handleTagSelect(tagName)}
  >
    {tagName}
  </li>
);
