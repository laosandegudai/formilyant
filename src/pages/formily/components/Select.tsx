import React from "react";
import { connect, mapReadPretty, mapProps } from "@formily/react";

import { LoadingOutlined } from "@ant-design/icons";

import { DicSelect as AntdSelect } from "./DicSelect";

export const DicSelect = connect(
  AntdSelect,
  mapProps(
    {
      dataSource: "options",
      loading: true,
      data: true
    },
    (props, field) => {
      console.log(props, field);
      return {
        ...props,
        suffixIcon:
          field?.["loading"] || field?.["validating"] ? (
            <LoadingOutlined />
          ) : (
            props.suffixIcon
          )
      };
    }
  ),
  mapReadPretty(AntdSelect, { readPretty: true })
);

export default DicSelect;
