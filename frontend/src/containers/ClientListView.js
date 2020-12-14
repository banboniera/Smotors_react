import axios from 'axios';
import React from 'react';
import Clients from '../components/Client';
import ClientForm from '../components/ClientForm';

class ClientList extends React.Component {
    state = {
        clients: []
    }

    fetchClients = () => {
        axios.get("http://127.0.0.1:8000/api/people/").then(res => {
            this.setState({
                clients: res.data
            });
        });
    }

    componentDidMount() {
        this.fetchClients();
    }

    render() {
        return (
            <div>
                <Clients data={this.state.clients} />
                <br />
                <h2>Client form</h2>
                <ClientForm
                    requestType="post"
                    clientID={null}
                    btnText="Create"
                />
            </div>
        )
    }
}

export default ClientList