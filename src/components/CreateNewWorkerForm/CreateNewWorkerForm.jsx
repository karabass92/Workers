import React, { useState } from "react";
import { 
    Button, 
    Form, 
    Input, 
    Select, 
    Layout, 
    Alert } from 'antd';
import { 
    layout, 
    tailLayout, 
    surnameRules, 
    nameRules, 
    secondNameRules, 
    telephoneRules, 
    departmentRules, 
    positionRules,
    departmentOptions,
    positionOptions } from "../../consts/createNewWorkerFormConsts";
import { workersAPI } from "../../api/api";
import telephonePrefixSelector from "../telephonePrefixSelector/telephonePrefixSelector";

const { Content } = Layout;
const { Option } = Select;


const CreateNewWorkerForm = () => {

    const [form] = Form.useForm();
    const [success, setSuccess] = useState(false);

    const onFinish = (data) => {
        workersAPI.createWorker(data);
        setSuccess(true);
        form.resetFields();
    };

    const onReset = () => {
        form.resetFields();
        setSuccess(false);
    };

    return (
        <Content className="site-layout" style={{ padding: '50px 15px' }} >
            
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 470 }} >
                
                <Form.Item name="surname" label="Фамилия" rules={[surnameRules]} >
                    <Input placeholder="Введите фамилию" />
                </Form.Item>

                <Form.Item name="name" label="Имя" rules={[nameRules]} >
                    <Input placeholder="Введите имя" />
                </Form.Item>

                <Form.Item name="secondName" label="Отчество" rules={[secondNameRules]} >
                    <Input placeholder="Введите отчество" />
                </Form.Item>

                <Form.Item name="telephone" label="Телефон" rules={[telephoneRules]} >
                    <Input addonBefore={telephonePrefixSelector} placeholder="Введите номер телефона" />
                </Form.Item>

                <Form.Item name="department" label="Отдел" rules={[departmentRules]}>
                    <Select placeholder="Выберите отдел из списка" allowClear >
                        {
                            departmentOptions.map(item => <Option value={item.value}>{item.text}</Option>)
                        }
                    </Select>
                </Form.Item>

                <Form.Item name="position" label="Должность" rules={[positionRules]}>
                    <Select placeholder="Выберите должность из списка" allowClear >
                        {
                            positionOptions.map(item => <Option value={item.value}>{item.text}</Option>)
                        }
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 13 }}>
                        Подтвердить
                    </Button>
                    <Button htmlType="button" style={{ width: 150 }} onClick={onReset}>
                        Очистить форму
                    </Button>
                </Form.Item>

            </Form>

            <div style={{ display: 'flex', justifyContent: 'center', opacity: success ? 1 : 0, transition: 'all 0.5s ease' }}>
                <Alert message='Данные успешно обработаны' type="success" style={{ width: 300, textAlign: 'center' }} />
            </div>
            
        </Content>
    );
};


export default CreateNewWorkerForm;