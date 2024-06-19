import React, { FC, useEffect, useState } from "react";
import { TagItem } from "../tagItem/TagItem";
import { DEFAULT_TAG } from "../../constants/default";
import { ICourse } from "../../types/course";
import { getUniqueCourseTags } from "../../utils/getUniqueCourseTags";
import s from "./TagList.module.css";

interface TagListProps {
  courses: ICourse[];
  setVisibleCourses: (courses: ICourse[]) => void;
}

export const TagList: FC<TagListProps> = ({ courses, setVisibleCourses }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>(DEFAULT_TAG);

  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const { target, currentTarget } = event;
    if (target !== currentTarget) {
      const tag = (target as HTMLLIElement).textContent;

      if (tag && tag !== selectedTag) {
        setSelectedTag(tag);
      }
    }
  };

  useEffect(() => {
    setTags([DEFAULT_TAG, ...getUniqueCourseTags(courses)]);
  }, [courses]);

  useEffect(() => {
    if (selectedTag === DEFAULT_TAG) {
      setVisibleCourses(courses);
    } else {
      const filteredCourses = courses.filter((course) =>
        course.tags.includes(selectedTag)
      );
      setVisibleCourses(filteredCourses);
    }
  }, [selectedTag, courses, setVisibleCourses]);

  return (
    <ul className={s.tagList} onClick={handleClick}>
      {tags.map((tag, ind) => (
        <TagItem key={ind} tagName={tag} isSelected={tag === selectedTag} />
      ))}
    </ul>
  );
};
