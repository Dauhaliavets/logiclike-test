import React, { FC, memo } from "react";
import { Course } from "../../types";
import { CourseItem } from "./../courseItem/CourseItem";
import s from "./CourseList.module.css";

interface CourseListProps {
  courses: Course[];
}

const arePropsEqual = (
  oldProps: CourseListProps,
  newProps: CourseListProps
) => {
  return JSON.stringify(oldProps) === JSON.stringify(newProps);
};

export const CourseList: FC<CourseListProps> = memo(
  ({ courses }) => (
    <div className={s.coursesList}>
      {courses.map((course) => {
        return <CourseItem key={course.id} {...course} />;
      })}
    </div>
  ),
  arePropsEqual
);
