import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, List, Button } from 'antd';
import avatar from '../../assets/img/avatar.svg';
import { connect } from "react-redux";
import { deleteWorkerThunk, getAllWorkersThunk } from "../../store/workersReducer";
import Preloader from "../Preloader/Preloader";


const { Content } = Layout;


const Workers = ({ workers, deleteWorkerThunk, getAllWorkersThunk }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllWorkersThunk();
        setLoading(false);
    }, []);

    const onDelete = async (id) => {
        deleteWorkerThunk(id)
    };

    if (loading) {
        return <Preloader />
    };

    return (
        <Content className="site-layout" style={{ padding: '0 15px' }} >
            <div style={{ 
                padding: 16, 
                height: '100%' 
                }} >
                
                <List 
                    pagination={{ 
                        position: 'top', 
                        align: 'center', 
                        pageSize: 5 
                    }} 
                    dataSource={workers}
                    renderItem={(item) => (
                        <List.Item key={item.id} >
                            <section 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-around' 
                                    }}>

                                <img src={avatar} alt="avatar" 
                                    style={{ 
                                        width: 60, 
                                        marginRight: 15, 
                                        borderRadius: '50%' 
                                        }} />
                                <div 
                                    style={{ 
                                        width: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'flex-start' 
                                        }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        {`${item.surname} ${item.name} ${item.secondName}`}
                                    </span>
                                    <span>
                                        Телефон: {item.telephone}
                                    </span>
                                    <span>
                                        Отдел: {item.department}
                                    </span>
                                    <span>
                                        Должность: {item.position}
                                    </span>
                                </div>
                            </section>
                            
                            <section 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-around', 
                                    flexDirection: 'column' 
                                    }}>
                                <Link to={`/${item.id}`}>
                                    <Button type="primary" size={'middle'} style={{ marginBottom: 10 }}>
                                        Редактировать
                                    </Button>
                                </Link>
                                <Button type="primary" danger size={'middle'} onClick={() => onDelete(item.id)} >
                                    Удалить
                                </Button>
                            </section>

                        </List.Item>
                    )}
                />
            </div>
        </Content>
    );
};


const mapDispatchToProps = (state) => {
    return { workers: state.workers.workers }
};


export default connect(mapDispatchToProps, { getAllWorkersThunk, deleteWorkerThunk })(Workers);