import React, { useEffect, useMemo } from "react";
import { Input, Select, FormItem } from "@formily/antd";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form } from "@formily/antd";
import { DicSelect } from "./Select";
import { Modal } from "antd";
import { request, useRequest } from "umi";

const getData = () => request('/api/codevalue/1', { method: 'GET' })

export default (props) => {
    const { visible, onOk } = props;
    const formRef = useMemo(
        () => createForm({ validateFirst: true, readPretty: true }),
        []
    );

    const getRequest = useRequest(() => getData(), { manual: true, formatResult: res => res });

    const SchemaField = createSchemaField({
        components: {
            Select,
            FormItem,
            DicSelect,
            Input
        }
    });

    const schema = {
        type: "object",
        properties: {
            name: {
                title: "字段名称",
                type: "string",
                "x-decorator": "FormItem",
                "x-component": "Input"
            },
            sex: {
                type: "string",
                title: "选择框",
                "x-decorator": "FormItem",
                "x-component": "DicSelect",
                "x-component-props": {
                    dicCode: "Sex",
                    style: {
                        width: 120
                    }
                }
            }
        }
    };

    const init = async () => {
        // const res = await getData();
        const res = await getRequest.run();

        formRef.setInitialValues(res);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Modal visible={visible} onOk={onOk} onCancel={onOk}>
            <Form form={formRef}>
                <SchemaField schema={schema} />
            </Form>
        </Modal>
    );
};
