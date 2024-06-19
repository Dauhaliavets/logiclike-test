import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { TagItem } from "../tagItem/TagItem";
import { DEFAULT_TAG } from "../../constants";
import { Course } from "../../types";
import { getUniqueCourseTags } from "../../utils/getUniqueCourseTags";
import s from "./TagList.module.css";

interface TagListProps {
  courses: Course[];
  setVisibleCourses: (courses: Course[]) => void;
}

export const TagList: FC<TagListProps> = memo(
  ({ courses, setVisibleCourses }) => {
    const [selectedTag, setSelectedTag] = useState<string>(DEFAULT_TAG);

    const tags = useMemo(
      () => [DEFAULT_TAG, ...getUniqueCourseTags(courses)],
      [courses]
    );

    const handleTagSelect = (tag: string) => () => {
      if (tag !== selectedTag) {
        setSelectedTag(tag);
      }
    };

    useEffect(() => {
      const visibleCourses =
        selectedTag !== DEFAULT_TAG
          ? courses.filter((course) => course.tags.includes(selectedTag))
          : courses;
      setVisibleCourses(visibleCourses);
    }, [selectedTag, courses, setVisibleCourses]);

    return (
      <ul className={s.tagList}>
        {tags.map((tag) => (
          <TagItem
            key={tag}
            tagName={tag}
            isSelected={tag === selectedTag}
            handleTagSelect={handleTagSelect}
          />
        ))}
      </ul>
    );
  }
);
