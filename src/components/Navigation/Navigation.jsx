import React from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const { Header } = Layout;


const Navigation = () => {
    return (
        <Header style={{ width: '100%', height: '8%', borderRadius: '10px 10px 0 0', paddingTop: '8px' }} >
            <Menu theme="dark" defaultSelectedKeys={['1']} style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                
                <Menu.Item key={'1'} icon={<UserOutlined />}>
                    <Link to={'/'}>
                        Все сотрудники
                    </Link>
                </Menu.Item>

                <Menu.Item key={'2'} icon={<SettingOutlined />}>
                    <Link to='/createworker'>
                        Новый сотрудник
                    </Link>
                </Menu.Item>
                
            </Menu>
        </Header>
    );
};


export default Navigation;