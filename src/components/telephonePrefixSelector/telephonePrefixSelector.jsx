import { Form, Select } from "antd";
import React from "react";

const { Option } = Select;


const telephonePrefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70, }} defaultValue={'+7'} >
            <Option value="+7">+7</Option>
        </Select>
    </Form.Item>
);


export default telephonePrefixSelector;