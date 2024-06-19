import React, { useEffect, useState } from "react";
import "./App.css";
import { ICourse } from "./types/course";
import { CourseList } from "./components/courseList/CourseList";
import { TagList } from "./components/tagList/TagList";
import { URL } from "./constants/default";

function App() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [visibleCourses, setVisibleCourses] = useState<ICourse[]>([]);

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
}

export default App;
