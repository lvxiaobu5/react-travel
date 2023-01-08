import React from 'react';
import styles from './index.module.less'
import { Image, Carousel as AntCarousel } from 'antd'

import carouselImage1 from '../../assets/Images/carousel1.jpg'
import carouselImage2 from '../../assets/Images/carousel2.jpg'
import carouselImage3 from '../../assets/Images/carousel3.jpg'

// 首页走马灯
export const Carousel: React.FC = () => {
  return (
    <AntCarousel className={styles["slider"]} autoplay>
      <Image src={carouselImage1} width="100%"></Image>
      <Image src={carouselImage2} width="100%"></Image>
      <Image src={carouselImage3} width="100%"></Image>
    </AntCarousel>
  )
}