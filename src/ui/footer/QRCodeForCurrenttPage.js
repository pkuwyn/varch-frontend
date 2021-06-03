import React from "react";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react";
import { useTheme } from "@material-ui/core";
export default function QRCodeForCurrenttPage(props) {
  const { pathname } = useLocation();
  const theme = useTheme();
  return (
    <QRCode
      value={pathname} // 生成二维码的内容
      size={300} // 二维码的大小
      fgColor={theme.palette.secondary.light} // 二维码的颜色
      {...props}
    />
  );
}
