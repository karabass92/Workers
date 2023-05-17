import React from 'react';
import { Space, Spin } from 'antd';


const Preloader = () => (
    <Space direction="vertical" style={{ width: '100%', height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center'}} >
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
    </Space>
);


export default Preloader;