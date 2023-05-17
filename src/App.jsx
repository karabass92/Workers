import React from 'react';
import { Layout } from 'antd';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Workers from './components/Workers/Workers';
import CreateNewWorkerForm from './components/CreateNewWorkerForm/CreateNewWorkerForm';
import Worker from './components/Worker/Worker';


const { Footer } = Layout;


const App = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5vh' }}>
            <Layout style={{maxWidth: 600, height: 770, borderRadius: '20px' }}>
               
                <Navigation />

                <Routes>
                    <Route path='/' element={<Workers />} />
                    <Route path='/createworker' element={<CreateNewWorkerForm />} />
                    <Route path='/:workerId' element={<Worker />} />
                </Routes>
                
                <Footer style={{ textAlign: 'center', height: '7%', borderRadius: '0 0 10px 10px' }} >
                    'Workers' test task created by K.Shatveryan ©2023
                </Footer>

            </Layout>
        </div>
    );
};


export default App;