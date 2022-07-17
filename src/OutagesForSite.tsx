import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import {Button, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export class OutagesForSite extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: undefined,
            siteId: 'norwich-pear-tree'
        };
    }

    getSiteInfo() {
        fetch('http://localhost:8080/api/site-outages/' + this.state.siteId)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }

    handleChange(event: any) {
        this.setState({siteId: event.target.value});
    }

    render() {
        const data = this.state.data;

        const header = <InputGroup className="mb-3">
            <Form.Control
                placeholder="Site ID"
                value={this.state.siteId}
                onChange={(e) => this.handleChange(e)}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={() => this.getSiteInfo()}>
                Submit
            </Button>
        </InputGroup>;

        if (!data) {
            return header;
        } else {
            return (

                <div>
                    {header}

                    <div>
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Begin</th>
                                <th>End</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((outage: any) =>
                                <tr key={outage.id}>
                                    <td>{outage.id}</td>
                                    <td>{outage.name}</td>
                                    <td>{outage.begin}</td>
                                    <td>{outage.end}</td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </div>
                </div>
            );
        }
    }
}
