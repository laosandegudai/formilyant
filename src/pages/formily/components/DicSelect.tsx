import React, { useCallback, useEffect, useState } from "react";
import { Select } from "antd";
import { request } from "umi";
const { Option } = Select;

const getCode=()=>request('/api/codevalue/sex',{method:'GET'})


const DicSelect: React.FC<any> = (props) => {
  const { value, dicCode, options, readPretty } = props;
  const [poptions, setPOptions] = useState([]);
  const [loading, setLaoding] = useState(true);
  const init = useCallback(async () => {
    if (options && options.length > 0) {
      setPOptions(options);
    } else {
      const res = await getCode({ code: dicCode });
      setPOptions(res);
    }
    setLaoding(false);
  }, [dicCode, options]);
  useEffect(() => {
    init();
  }, [dicCode, options]);
  return (
    <>
      {readPretty ? (
        <>{poptions?.find((x) => x.value == value)?.label}</>
      ) : (
        <Select {...props} options={null} loading={loading}>
          {poptions?.map((x) => (
            <Option key={x.value} value={x.value}>
              {x.label}
            </Option>
          ))}
        </Select>
      )}
    </>
  );
};

export { DicSelect };
