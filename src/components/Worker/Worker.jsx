import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, Layout } from 'antd';
import { useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { connect } from "react-redux";
import { getWorkerInfoThunk, updateWorkerInfoThunk } from "../../store/updateWorkerInfoReducer";
import telephonePrefixSelector from "../telephonePrefixSelector/telephonePrefixSelector";
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
    positionOptions } from "../../consts/workerConsts";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import FailMessage from "../FailMessage/FailMessage";


const { Content } = Layout;
const { Option } = Select;


const Worker = ({worker, getWorkerInfoThunk, updateWorkerInfoThunk}) => {

    const { workerId } = useParams();
    const [form] = Form.useForm();
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false)

    useEffect(() => {
        getWorkerInfoThunk(workerId)
    }, [workerId]);

    const onFinish = (values) => {;
        updateWorkerInfoThunk(workerId, values).then(response => {
            if (response === 200) {
                setSuccess(true)
                form.resetFields()
            } else {
                setFail(true);
            }
            setTimeout(() => {
                setSuccess(false);
                setFail(false);
            }, 1000);
        })
    };

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
                
                <Form.Item name="surname" label="Фамилия" rules={[surnameRules]} >
                    <Input />
                </Form.Item>

                <Form.Item name="name" label="Имя" rules={[nameRules]} >
                    <Input />
                </Form.Item>

                <Form.Item name="secondName" label="Отчество" rules={[secondNameRules]} >
                    <Input />
                </Form.Item>

                <Form.Item name="telephone" label="Телефон" rules={[telephoneRules]} >
                    <Input addonBefore={telephonePrefixSelector} placeholder="Введите номер телефона" />
                </Form.Item>

                <Form.Item name="department" label="Отдел" rules={[departmentRules]} >
                    <Select placeholder="Выберите отдел из списка" allowClear >
                        {
                            departmentOptions.map(item => <Option key={item.value} value={item.value}>{item.text}</Option>)
                        }
                    </Select>
                </Form.Item>

                <Form.Item name="position" label="Должность" rules={[positionRules]} >
                    <Select placeholder="Выберите должность из списка" allowClear >
                        {
                            positionOptions.map(item => <Option key={item.value} value={item.value}>{item.text}</Option>)
                        }
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 13 }}>
                        Подтвердить
                    </Button>
                </Form.Item>
                
            </Form>

            {
                success && <SuccessMessage />
            }

            {
                fail && <FailMessage />
            }

        </Content>
    );
};


const mapDispatchToProps = (state) => {
    return {
        worker: state.worker.workerInfo
    }
}


export default connect(mapDispatchToProps, { getWorkerInfoThunk, updateWorkerInfoThunk })(Worker);