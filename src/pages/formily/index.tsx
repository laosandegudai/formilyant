import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { request } from "umi";
import ModalForm from "./components/ModalForm";


export default () => {
  const [visible, setVisible] = useState(false);
  



  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        children="详情"
      />
      {visible && (
        <ModalForm
          visible
          onOk={() => {
            setVisible(false);
          }}
        />
      )}
    </>
  );
};
