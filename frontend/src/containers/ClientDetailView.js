import { Card } from 'antd';
import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";

import ClientForm from '../components/ClientForm';

class ClientDetail extends React.Component {
    state = {
        client: {}
    }

    componentDidMount() {
        const clientID = this.props.match.params.clientID;
        axios.get(`http://127.0.0.1:8000/api/people/${clientID}/detail/`)
            .then(res => {
                this.setState({
                    client: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.client.name}>
                    <p>{this.state.client.surname}</p>
                </Card>
                <ClientForm 
                requestType="post" 
                clientID={this.props.match.params.clientID}
                btnText = "Update"
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    };
  };

export default connect(mapStateToProps)(ClientDetail);