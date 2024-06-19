import React, { FC } from "react";
import { ICourse } from "../../types/course";
import s from "./CourseItem.module.css";

export const CourseItem: FC<ICourse> = ({ id, name, image, bgColor }) => {
  return (
    <div className={s.course}>
      <div
        className={s.courseImageWrapper}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <img className={s.courseImage} src={image} alt={name} />
      </div>
      <div className={s.courseName}>{name}</div>
    </div>
  );
};
