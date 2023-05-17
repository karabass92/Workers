import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, Layout, Alert } from 'antd';
import { useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { connect } from "react-redux";
import { getWorkerInfoThunk, updateWorkerInfoThunk } from "../../store/updateWorkerInfoReducer";


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
        offset: 11,
    },
};

const Worker = ({worker, getWorkerInfoThunk, updateWorkerInfoThunk}) => {

    let { workerId } = useParams();
    const [form] = Form.useForm();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getWorkerInfoThunk(workerId)
    }, []);

    const onFinish = (values) => {
        updateWorkerInfoThunk(workerId, values)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false);
        }, 1000);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70, }} defaultValue={'+7'} >
                <Option  value="+7">+7</Option>
            </Select>
        </Form.Item>
    );

    if (!worker) {
        return <Preloader />
    };

    form.setFieldsValue ({
        surname: worker.surname,
        name: worker.name,
        secondName: worker.secondName,
        telephone: worker.telephone,
        department: worker.department,
        position: worker.position
    });

    return (
        <Content className="site-layout" style={{ padding: '50px 15px' }} >
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 470 }} >
                <Form.Item name="surname" label="Фамилия" rules={[{ required: true, message:'Необходимо заполнить поле', max:15 }]} >
                    <Input />
                </Form.Item>
                <Form.Item name="name" label="Имя" rules={[{ required: true, message:'Необходимо заполнить поле', max:15 }]} >
                    <Input />
                </Form.Item>
                <Form.Item name="secondName" label="Отчество" rules={[{ required: true, message:'Необходимо заполнить поле', max:15 }]} >
                    <Input />
                </Form.Item>
                <Form.Item name="telephone" label="Телефон" rules={[{ required: true, message: 'Необходимо заполнить поле', len: 10 }]} >
                    <Input addonBefore={prefixSelector} placeholder="Введите номер телефона" />
                </Form.Item>
                <Form.Item name="department" label="Отдел" rules={[{ required: true }]} >
                    <Select placeholder="Выберите отдел из списка" allowClear >
                        <Option value="Front-end">Front-end</Option>
                        <Option value="Back-end">Back-end</Option>
                        <Option value="Q & A">Q & A</Option>
                        <Option value="HR">HR</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="position" label="Должность" rules={[{ required: true }]} >
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
                </Form.Item>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'center', opacity: success ? 1 : 0, transition: 'all 0.5s ease' }}>
                <Alert message="Данные успешно изменены!" type="success" style={{ width: 300, textAlign: 'center' }} />
            </div>
        </Content>
    );
};


const mapDispatchToProps = (state) => {
    return {
        worker: state.worker.workerInfo
    }
}


export default connect(mapDispatchToProps, { getWorkerInfoThunk, updateWorkerInfoThunk })(Worker);