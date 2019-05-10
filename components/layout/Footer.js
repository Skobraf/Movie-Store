import React from 'react';
import { Layout } from 'antd';
import { css } from '@emotion/core';

const footerCls = css`
  text-align: center;
  background: #04070b;
  color: #fff;
`;
const AppFooter = Layout.Footer;
const Footer = () => <AppFooter css={footerCls}>Created By Ayoub Abed</AppFooter>;
export default Footer;
