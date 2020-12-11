import axios from 'axios';
import React from 'react';
import Clients from '../components/Client';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

class ClientList extends React.Component {
    state = {
        clients: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/people/')
            .then(res => {
                this.setState({
                    clients: res.data
                });
                console.log(res.data)
            })
    }

    render() {
        return (
            <Clients data={this.state.clients} />
        )
    }
}

export default ClientList