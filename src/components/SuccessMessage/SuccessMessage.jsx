import React from "react";
import { Alert } from 'antd';


const SuccessMessage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', opacity: 1, transition: 'all 0.5s ease' }}>
            <Alert message='Данные успешно обработаны' type="success" style={{ width: 300, textAlign: 'center' }} />
        </div>
    );
};


export default SuccessMessage;