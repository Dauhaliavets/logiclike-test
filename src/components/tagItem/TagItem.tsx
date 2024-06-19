import { FC } from "react";
import s from "./TagItem.module.css";

interface TagItemProps {
  tagName: string;
  isSelected: boolean;
}

export const TagItem: FC<TagItemProps> = ({ tagName, isSelected }) => {
  return (
    <li className={`${s.tagItem} ${isSelected ? s.active : ""}`}>{tagName}</li>
  );
};
