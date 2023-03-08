import React from "react";
import { Avatar, Layout, List, Typography } from 'antd';
import styles from './index.module.less'

interface PropsType {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[]
}

export const ProductComments: React.FC<PropsType> = ({data}) => {

  return (
    <div className={styles["product-comments"]} >
      <List
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              description={item.content}
              title={`${item.author} ${item.createDate}`}
            />
          </List.Item>
        )}
      />
    </div>
  )
}