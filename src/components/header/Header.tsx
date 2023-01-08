import React from "react";
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './index.module.less'

export const Header: React.FC = () => {
  const { Header } = Layout;
  const { Title, Text } = Typography;
  const { Search } = Input;
  const { Group } = Button;
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    }
  ];
  const menus: MenuProps['items'] = [
    {
      label: '旅游首页',
      key: '1',
    },
    {
      label: '周末游',
      key: '2',
    },
    {
      label: '跟团游',
      key: '3',
    },
    {
      label: '自由行',
      key: '4',
    },
    {
      label: '私家团',
      key: '5',
    },
    {
      label: '邮轮',
      key: '6',
    },
    {
      label: '酒店+景点',
      key: '7',
    },
    {
      label: '当地玩乐',
      key: '8',
    },
    {
      label: '主题游',
      key: '9',
    },
    {
      label: '定制游',
      key: '10',
    },
  ];

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles["inner"]}>
          <Text>让旅游更快乐</Text>
          <Dropdown.Button
            style={{marginLeft: 15, display: "inline"}}
            menu={{items}}
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Group className={styles["button-group"]}>
            <Button>注册</Button>
            <Button>登录</Button>
          </Group>
        </div>
      </div>
      <Header className={styles["main-header"]}>
        <img className={styles["App-logo"]} src={logo} alt="" />
        <Title className={styles["title"]} level={3}>React旅游网</Title>
        <Search className={styles["search-input"]} placeholder='请输入旅游目的地、主题或关键字'></Search>
      </Header>
      <Menu className={styles["main-menu"]} items={menus} mode='horizontal'></Menu>
    </div>
  )
}