import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { Input, Card } from "antd";
import styles from "./index.module.less";

export const PaymentForm = () => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <Card
      title="信用卡"
      bordered={false}
      className={styles["payment-credit-card"]}
    >
      <div>
        <img className={styles["img"]} src="https://img1.baidu.com/it/u=2297183161,807451713&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=444" alt="404" />
      </div>
      <PaymentInputsWrapper {...wrapperProps}>
        {/* <svg {...getCardImageProps({ images })} /> */}
        <input {...getCardNumberProps()} />
        <input {...getExpiryDateProps()} />
        <input {...getCVCProps()} />
      </PaymentInputsWrapper>
    </Card>
  );
};