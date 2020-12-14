import {
    Button, Form,
    Input,
    InputNumber, Select
} from 'antd';
import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="48">+48</Option>
            <Option value="42">+42</Option>
        </Select>
    </Form.Item>
);

class ClientForm extends React.Component {

    handleFormSubmit = async (event, requestType, clientID) => {
        event.preventDefault();

        const postObj = {
            name: event.target.elements.name.value,
            surname: event.target.elements.surname.value,
            phone: event.target.elements.phone.value,
            nip: event.target.elements.nip.value,
            email: event.target.elements.email.value,
            comment: event.target.elements.comment.value,
        }
        if (postObj.nip = undefined) {
            postObj.nip = 0;
        }
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`,
        };
        if (requestType === "post") {
            await axios.post('http://localhost:8000/api/people/create/', postObj)
                .then(res => {
                    if (res.status === 201) {
                        // this.props.history.push(`/api/people/`);
                    }
                })
                .catch(error =>
                    console.log(error.response.data)
                )
        } else if (requestType === "put") {
            await axios.put(`http://localhost:8000/api/people/${clientID}/update/`, postObj)
                .then(res => {
                    if (res.status === 200) {
                        // this.props.history.push(`/api/people/`);
                    }
                })
                .catch(error =>
                    console.log(error.response.data)
                )
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.clientID
                )}>
                    <Form.Item label="Name">
                        <Input name="name" />
                    </Form.Item>
                    <Form.Item label="Surname">
                        <Input name="surname" />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input name="phone" addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="NIP">
                        <InputNumber name="nip" />
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input name="email" />
                    </Form.Item>
                    <Form.Item label="Comment">
                        <Input name="comment" />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default ClientForm;