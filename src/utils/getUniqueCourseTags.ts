import { Course } from "../types";

export const getUniqueCourseTags = (courses: Course[]): string[] =>
  courses.reduce((acc, { tags }) => {
    tags.forEach((tag) => !acc.includes(tag) && acc.push(tag));

    return acc;
  }, [] as string[]);
