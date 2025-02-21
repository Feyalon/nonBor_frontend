import React, { useState } from "react";
import UseCategory from "../../../shared/hooks/useCategory";

const TagList: React.FC = () => {
  const { category } = UseCategory();

  return (
    <div className="tag-list">
      <h2>Mashhurlar</h2>
      <div className="tags">
        {category.map((tag) => (
          <button key={tag.id} className="tag-button">
            #{tag.title}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default TagList;

