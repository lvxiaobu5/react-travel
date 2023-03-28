import React, { useState } from "react";
import styles from './index.module.less'
import { Divider, Tag } from 'antd'

const { CheckableTag } = Tag

interface PropsType {
  data: {
    key: string;
    value: string[];
    id: number;
  }[]
}

export const Filter: React.FC<PropsType> = ({data}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className={styles["filter-content"]}>
      {data.map((filter) => (
        <div key={filter.id}>
          <div className={styles["type"]}>
            <span className={styles["text"]}>{filter.key}：</span>
            <span>
              {filter.value.map((classify, index) => (
                <span key={index}>
                  <CheckableTag
                    checked={selectedTags.includes(classify)}
                    onChange={(checked) => handleChange(classify, checked)}
                  >
                    {classify}
                  </CheckableTag>
                </span>
              ))}
            </span>
          </div>
          <Divider className={styles["divider"]} />
        </div>
      ))}
    </div>
  )
}