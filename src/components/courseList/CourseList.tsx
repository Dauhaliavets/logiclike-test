import React, { FC, memo } from "react";
import { ICourse } from "../../types/course";
import { CourseItem } from "./../courseItem/CourseItem";
import s from "./CourseList.module.css";

interface CourseListProps {
  courses: ICourse[];
}

export const CourseList: FC<CourseListProps> = memo(({ courses }) => {
  return (
    <div className={s.coursesList}>
      {courses.map((course) => {
        return <CourseItem key={course.id} {...course} />;
      })}
    </div>
  );
});
