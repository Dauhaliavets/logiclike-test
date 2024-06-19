import React, { FC } from "react";
import { Course } from "../../types";
import s from "./CourseItem.module.css";

export const CourseItem: FC<Course> = ({ name, image, bgColor }) => (
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
