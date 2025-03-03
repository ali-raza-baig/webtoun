import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Drawer } from 'antd';

const { Header, Sider, Content } = Layout;

const UserDashboard = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation(); // ✅ Track current path
    const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleResize = () => {
        setCollapsed(window.innerWidth < 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuClick = ({ key }) => {
        navigate(key);
        setDrawerVisible(false); // Close drawer on mobile after navigation
    };

    return (
        <Layout className="h-[90%] min-h-[90vh]">
            {/* Sidebar for large screens */}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="md"
                collapsedWidth={window.innerWidth < 768 ? 0 : 80}
                className="hidden md:block"
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]} // ✅ Dynamically track active route
                    onClick={handleMenuClick}
                    items={[
                        {
                            key: '/dashboard/user',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '/dashboard/user/services',
                            icon: <VideoCameraOutlined />,
                            label: 'Services',
                        },
                        {
                            key: '/dashboard/user/plans',
                            icon: <UploadOutlined />,
                            label: 'My Plans',
                        },
                        {
                            key: '/dashboard/user/avaliablePlan',
                            icon: <UploadOutlined />,
                            label: 'Buy Plans',
                        },
                        // {
                        //     key: '/dashboard/user/subscription',
                        //     icon: <FileTextOutlined />,
                        //     label: 'Subscription',
                        // },
                    ]}
                />
            </Sider>

            {/* Drawer for mobile */}
            <Drawer
                placement="left"
                closable={true}
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                className="md:hidden"
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]} // ✅ Track active route for mobile drawer too
                    onClick={handleMenuClick}
                    items={[
                        {
                            key: '/dashboard/admin',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '/dashboard/admin/services',
                            icon: <VideoCameraOutlined />,
                            label: 'Services',
                        },
                        {
                            key: '/dashboard/admin/plan',
                            icon: <UploadOutlined />,
                            label: 'Plans',
                        },
                        {
                            key: '/dashboard/admin/subscription',
                            icon: <FileTextOutlined />,
                            label: 'Subscription',
                        },
                    ]}
                />
            </Drawer>

            <Layout>
                <Header
                    className="flex items-center px-4 justify-between"
                    style={{ background: colorBgContainer }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className="hidden md:inline-flex"
                        style={{ fontSize: '16px', width: 64, height: 64 }}
                    />
                    <Button
                        type="text"
                        icon={<MenuUnfoldOutlined />}
                        onClick={() => setDrawerVisible(true)}
                        className="md:hidden"
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default UserDashboard;