import React from "react";
import styles from './index.module.less'
import { sideMenuList } from './mockup'
import { Menu } from "antd";
import { GlobalOutlined } from '@ant-design/icons';

export const SideMenu: React.FC = () => {
  return (
    <Menu className={styles["side-menu"]} mode="vertical">
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={<span><GlobalOutlined />{m.title}</span>}
        >
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={<span><GlobalOutlined />{sm.title}</span>}
            >
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                  <span><GlobalOutlined />{sms}</span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}