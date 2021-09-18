import { Button, Form, Input, message } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../utils";
//rcc

class LoginForm extends React.Component {
    state = {
        loading: false,
    };

    onFinish = (data) => {
        //step1: set loading true
        //step2: send login request (call login api)
        //step3: deal with login status
        //step4: set loading false

        this.setState({
            loading: true,
        });
        login(data)
            .then(() => { //success
                message.success(`Login Successful`);
                this.props.onSuccess();
            })
            .catch((err) => { //failed
                message.error(err.message);
            })
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
    };

    render = () => {
        return (
            <Form
                name="normal_login"
                onFinish={this.onFinish}
                style={{
                    width: 300,
                    margin: "auto",
                }}
            >
                <Form.Item
                    name="username"
                    rules={[ //validation rules
                        { required: true, message: "Please input your Username!" }
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please input your Password!" }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item>

                    <Button type="primary"
                            htmlType="submit" // submit触发form的onFinish方法
                            loading={this.state.loading}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    };
}



export default LoginForm;