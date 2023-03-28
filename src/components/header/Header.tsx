import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './index.module.less'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from '../../redux/hooks'
import store, { RootState } from '../../redux/store'
import { useTranslation } from 'react-i18next'
import { useDispatch } from "react-redux";
import { changeLanguageActionCreator, addLanguageActionCreator } from "../../redux/language/languageActions";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode'
import { userSlice } from "../../redux/user/slice";

interface JwtPayload extends DefaultJwtPayload {
  username: string
}

export const Header: React.FC = () => {
  const [username, setUsername] = useState('')
  const { Header } = Layout;
  const { Title, Text } = Typography;
  const { Search } = Input;
  const { Group } = Button;
  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: any[],
  ): any => {
    return {
      key,
      icon,
      children,
      label,
    } as any;
  }
  // const menus: MenuProps['items'] = [
  //   {
  //     label: '旅游首页',
  //     key: '1',
  //   },
  //   {
  //     label: '周末游',
  //     key: '2',
  //   },
  //   {
  //     label: '跟团游',
  //     key: '3',
  //   },
  //   {
  //     label: '自由行',
  //     key: '4',
  //   },
  //   {
  //     label: '私家团',
  //     key: '5',
  //   },
  //   {
  //     label: '邮轮',
  //     key: '6',
  //   },
  //   {
  //     label: '酒店+景点',
  //     key: '7',
  //   },
  //   {
  //     label: '当地玩乐',
  //     key: '8',
  //   },
  //   {
  //     label: '主题游',
  //     key: '9',
  //   },
  //   {
  //     label: '定制游',
  //     key: '10',
  //   },
  // ];
  const navigate = useNavigate()
  const { t } = useTranslation()
  const menus: any[] = [
    getItem(t('header.home'), '1'),
    getItem(t('header.weekend'), '2'),
    getItem(t('header.group'), '3'),
    getItem(t('header.backpack'), '4'),
    getItem(t('header.private'), '5'),
    getItem(t('header.cruise'), '6'),
    getItem(t('header.hotel'), '7'),
    getItem(t('header.local'), '8'),
    getItem(t('header.theme'), '9'),
    getItem(t('header.custom'), '10'),
    getItem(t('header.study'), '11'),
    getItem(t('header.visa'), '12'),
    getItem(t('header.enterprise'), '13'),
    getItem(t('header.high_end'), '14'),
    getItem(t('header.outdoor'), '15'),
    getItem(t('header.insurance'), '16'),
  ];
  const dispatch = useDispatch()
  const changelanguage = (type: 'zh' | 'en' | 'new') => {
    if (type === 'new') {
      const action = addLanguageActionCreator('新语言', 'new_language')
      dispatch(action)
    } else {
      const action = changeLanguageActionCreator(type)
      dispatch(action)
    }
  }
  const items = [
    {
      key: '1',
      label: (
        <a onClick={() => changelanguage('zh')} rel="noopener noreferrer">
          中文
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={() => changelanguage('en')} rel="noopener noreferrer">
          English
        </a>
      ),
    },
    // {
    //   key: '3',
    //   label: (
    //     <a onClick={() => changelanguage('new')} rel="noopener noreferrer">
    //       添加新语言
    //     </a>
    //   ),
    // }
  ];
  const language = useSelector((state) => state.language.language)
  const jwt = useSelector((state) => state.user.token)
  const shoppingCartItems = useSelector(s => s.shoppingCart.items)
  const shoppingCartLoading = useSelector(s => s.shoppingCart.loading)
  useEffect(() => {
    if (jwt) {
      // 使用jwt_decode解码并且保存token
      const token = jwt_decode<JwtPayload>(jwt)
      setUsername(token.username)
    }
  }, [jwt])
  const handleSearch = (keyword: string) => {
    navigate(`/search/${keyword}`)
  }
  const onLogout = () => {
    // 直接修改state的数据
    dispatch(userSlice.actions.logOut())
    navigate(`/`)
    // 刷新页面，不能写，因为在logOut的同时reload页面会造成redux运行不完整，会导致该用户无法logOut
    // window.location.reload()
  }

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles["inner"]}>
          <Text>{t('header.advertising')}</Text>
          <Dropdown.Button
            style={{marginLeft: 15, display: "inline"}}
            menu={{items}}
            icon={<GlobalOutlined />}
          >
            {language === 'zh' ? '中文' : 'English'}
          </Dropdown.Button>
          {jwt ? (
            <div className={styles["f_r"]}>
              <span className={styles["m_r_10"]}>
                {t("header.welcome")}
                <Text strong className={styles["m_l_10"]}>{username}</Text>
              </span>
              <Group className={styles["button-group"]}>
                <Button
                  onClick={() => navigate(`/shoppingCart`)}
                  loading={shoppingCartLoading}
                >{t("header.shoppingCart")}({shoppingCartItems.length})</Button>
                <Button onClick={onLogout}>{t("header.signOut")}</Button>
              </Group>
            </div>
          ) : (
            <Group className={styles["button-group"]}>
              <Button onClick={() => navigate(`/register`)}>{t('header.register')}</Button>
              <Button onClick={() => navigate(`/signIn`)}>{t('header.login')}</Button>
            </Group>
          )}
        </div>
      </div>
      <Header className={styles["main-header"]}>
        <Link to={`/`}>
          <img className={styles["App-logo"]} src={logo} alt="" />
          <Title className={styles["title"]} level={3}>{t('header.title')}</Title>
        </Link>
        <Search
          className={styles["search-input"]}
          placeholder='请输入旅游目的地、主题或关键字'
          onSearch={handleSearch}
        />
      </Header>
      <Menu className={styles["main-menu"]} items={menus} mode='horizontal'></Menu>
    </div>
  )
}