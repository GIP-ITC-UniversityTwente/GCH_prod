import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="ui fluid container ldr-padding" ref="home">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column">
                            <div className="ui segment content">
                                <h2 className="ui header">Geo Course Hub (GCH)</h2>
                                <p>
                                    <img className="ui left floated image animate__animated animate__zoomIn" src="/assets/img/GCH_logo.png" alt="gch" />
                                    <b>Geo Course Hub (GCH)</b> is a project at the
                                    <a href="https://www.itc.nl/">Faculty of Geo-Information Science and Earth observation (ITC)</a> of Twente University. <br/>
                                    The aim of the project is to capture and store courses and learning materials available at ITC.
                                    <br/>It is based on Linked Data and follows FAIR principles.
                                    It provides an ontology, a data browser and a course register.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Home;
