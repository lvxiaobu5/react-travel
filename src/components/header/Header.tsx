import React from "react";
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
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
        <Title className={styles["title"]} level={3}>携程旅游网</Title>
        <Search className={styles["search-input"]} placeholder='请输入旅游目的地、主题或关键字'></Search>
      </Header>
      <Menu className={styles["main-menu"]} mode='horizontal'>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key={4}>自由行</Menu.Item>
        <Menu.Item key={5}>私家团</Menu.Item>
        <Menu.Item key={6}>邮轮</Menu.Item>
        <Menu.Item key={7}>酒店+景点</Menu.Item>
        <Menu.Item key={8}>当地玩乐</Menu.Item>
        <Menu.Item key={9}>主题游</Menu.Item>
        <Menu.Item key={10}>定制游</Menu.Item>
        <Menu.Item key={11}>游学</Menu.Item>
        <Menu.Item key={12}>签证</Menu.Item>
        <Menu.Item key={13}>企业游</Menu.Item>
        <Menu.Item key={14}>高端游</Menu.Item>
        <Menu.Item key={15}>爱玩户外</Menu.Item>
        <Menu.Item key={16}>保险</Menu.Item>
      </Menu>
    </div>
  )
}