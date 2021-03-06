import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
import React from 'react';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

function Clients(props) {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        title={<a href={`${item.id}/`}>{item.name} {item.surname}</a>}
                        description={item.phone}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );
}

export default Clients;