import React from 'react';
import './App.css';
import {Outages} from './Outages'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {SiteInfo} from "./SiteInfo";
import {OutagesForSite} from "./OutagesForSite";

function App() {
  return (
    <div className="App">
        <Tabs defaultActiveKey="outages" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="outages" title="Outages">
                <Outages></Outages>
            </Tab>
            <Tab eventKey="siteInfo" title="Site Info">
                <SiteInfo></SiteInfo>
            </Tab>
            <Tab eventKey="siteOutageInfo" title="Site Outage Info">
                <OutagesForSite></OutagesForSite>
            </Tab>
        </Tabs>

    </div>
  );
}

export default App;
