import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const DetailTaps = () => {
    return (
        <Tabs
            defaultActiveKey="STEP1"
            className="mb-3"
            fill
        >
            <Tab eventKey="STEP1" title="STEP1">
                STEP1
            </Tab>
            <Tab eventKey="STEP2" title="STEP2">
                STEP2
            </Tab>
            <Tab eventKey="STEP3" title="STEP3">
                STEP3
            </Tab>
        </Tabs>
    );
}

export default DetailTaps;