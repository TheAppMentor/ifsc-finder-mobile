import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { Tag, WhiteSpace, WingBlank} from 'antd-mobile';
import { Typography } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';


const footerStyle = {
  backgroundColor: "#121a2f",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "44px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "44px",
  width: "100%"
};

const FooterPage = ({ children }) => {
  return (
      
   <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

export default FooterPage;
