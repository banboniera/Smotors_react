import { Button, Card } from 'antd';
import axios from 'axios';
import React from 'react';
import ClientForm from '../components/ClientForm';


class ClientDetail extends React.Component {
    state = {
        client: {}
    }

    componentDidMount() {
        const clientID = this.props.match.params.clientID;
        axios.get(`http://127.0.0.1:8000/api/people/${clientID}/`)
            .then(res => {
                this.setState({
                    client: res.data
                });
            })
    }

    handleDelete = (event) => {
        const clientID = this.props.match.params.clientID;
        axios.delete(`http://127.0.0.1:8000/api/people/${clientID}/delete/`);
        this.props.history.push('/api/people/');
    }

    render() {
        return (
            <div>
                <Card title={this.state.client.name}>
                    <p>{this.state.client.surname}</p>
                </Card>
                <ClientForm
                    requestType="put"
                    clientID={this.props.match.params.clientID}
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default ClientDetail;