import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

export class Outages extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/outages')
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json
            })
        });
    }

    render() {
        const data = this.state.data;
        if (data.length == 0) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((outage: any) =>
                            <tr key={outage.id + outage.begin}>
                                <td>{outage.id}</td>
                                <td>{outage.begin}</td>
                                <td>{outage.end}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}
