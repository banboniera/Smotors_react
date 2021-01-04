import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAuth(values.userName, values.password);
                this.props.history.push('/api/people/');
            }
        });
    }
    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            < div >
                { errorMessage}
                {
                    this.props.loading ?

                        <Spin indicator={antIcon} />

                        :

                        <Form
                            name="normal_login"
                            className="login-form"
                            onSubmit={this.handleSubmit}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                            </Button>
                             Or <a href="/signup/">signup</a>
                            </Form.Item>
                        </Form>
                }
            </div >
        );
    }
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);