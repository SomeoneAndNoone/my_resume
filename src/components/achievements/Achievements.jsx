import React, { useState, useEffect } from "react";
import Achievement from "./Achievement";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import honorsList from "./honorsList";
import axios from "axios";
import urls from "../../urls"

function Achievements(props) {

    const [honors, setHonors] = useState(honorsList);

    useEffect(() => {
        if (props.shouldUpdate > 0) {
            axios.get(urls.BASE_SERVER_URL + "/someone/honors")
                .then(res => {
                    // console.log(res.data)
                    if (res.status !== 404)
                        setHonors(res.data)
                })
                .catch(err => { })
        }
    }, [props.shouldUpdate])

    return (
        <div className="achievements-container">
            <div className="achieve-title" style={{ textAlign: "center" }}>
                <p>Achievements</p>
            </div>

            <Tabs className="myClass" id="noanim-tab-example">

                {honors.map((value, index) => (
                        <Tab eventKey={index+1} title={value.listTitle} key={value.listId+"tab"}>
                            <Achievement
                                key={value.listId+"key"}
                                itemsCollection={value} />
                        </Tab>
                    )
                )}

            </Tabs>

        </div>
    )
}

export default Achievements;
















