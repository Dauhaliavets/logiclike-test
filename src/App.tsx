import { useEffect, useState } from "react";
import { Course } from "./types";
import { CourseList } from "./components/courseList/CourseList";
import { TagList } from "./components/tagList/TagList";
import { URL } from "./constants";
import "./App.css";

export const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setCourses(data);
        setVisibleCourses(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCourses();
  }, []);

  return (
    <div className="container">
      <nav className="sidebar">
        <TagList courses={courses} setVisibleCourses={setVisibleCourses} />
      </nav>
      <section className="content">
        {!!visibleCourses.length && <CourseList courses={visibleCourses} />}
      </section>
    </div>
  );
};
