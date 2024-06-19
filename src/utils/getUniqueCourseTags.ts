import { ICourse } from "../types/course";

export const getUniqueCourseTags = (courses: ICourse[]): string[] => {
  const tagsRate = courses.reduce((acc, cur) => {
    cur.tags.forEach((tag) => {
      if (acc[tag]) {
        acc[tag] = acc[tag] + 1;
      } else {
        acc[tag] = 0;
      }
    });

    return acc;
  }, {} as { [key: string]: number });

  return Object.keys(tagsRate);
};
