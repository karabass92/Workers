import React, { useState } from "react";
import { Button, Form, Input, Select, Layout, Alert } from 'antd';
import { workersAPI } from "../../api/api";


const { Content } = Layout;
const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
    },
};


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

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70, }} defaultValue={'+7'} >
                <Option value="+7">+7</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Content className="site-layout" style={{ padding: '50px 15px' }} >
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 470 }} >
                <Form.Item name="surname" label="Фамилия" rules={[{ required: true, message: 'Необходимо заполнить поле', max: 15 }]} >
                    <Input placeholder="Введите фамилию" />
                </Form.Item>
                <Form.Item name="name" label="Имя" rules={[{ required: true, message: 'Необходимо заполнить поле', max: 15 }]} >
                    <Input placeholder="Введите имя" />
                </Form.Item>
                <Form.Item name="secondName" label="Отчество" rules={[{ required: true, message: 'Необходимо заполнить поле', max: 15 }]} >
                    <Input placeholder="Введите отчество" />
                </Form.Item>
                <Form.Item name="telephone" label="Телефон" rules={[{ required: true, message: 'Необходимо заполнить поле', len: 10}]} >
                    <Input addonBefore={prefixSelector} placeholder="Введите номер телефона" />
                </Form.Item>
                <Form.Item name="department" label="Отдел" rules={[{ required: true, message: 'Необходимо заполнить поле' }]}>
                    <Select placeholder="Выберите отдел из списка" allowClear >
                        <Option value="Front-end">Front-end</Option>
                        <Option value="Back-end">Back-end</Option>
                        <Option value="Q & A">Q & A</Option>
                        <Option value="HR">HR</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="position" label="Должность" rules={[{ required: true, message: 'Необходимо заполнить поле' }]}>
                    <Select placeholder="Выберите должность из списка" allowClear >
                        <Option value="junior">Junior</Option>
                        <Option value="middle">Middle</Option>
                        <Option value="senior">Senior</Option>
                        <Option value="teamlead">Team lead</Option>
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