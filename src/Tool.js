import React, { Component } from "react";
import "./Tool.css";
import test from "./test.json";
import { Button, Row, Title, Profile } from "./tools.components";

class App extends Component {
  constructor(props) {
    super(props);
    this.info = test;
    this.state = {
      accepted: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ alignItems: "left" }}>
          <div style={{ width: 700, margin: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: 400
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Title style={{ padding: "0 0 10px 0" }}>Profile Pic</Title>
                <Profile src={this.info.ProfilePic} alt={"Russia"} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Title style={{ padding: "0 0 10px 0" }}>ID</Title>
                <Profile
                  src={this.info.IDPic}
                  alt={":("}
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
            <Title>Personal Info</Title>
            <Row>
              <p style={{ padding: "2px 0 0px 0" }}>
                {this.info.Name}, {this.info.Email}, {this.info.Phone}
              </p>
            </Row>
            <Title>Emergency Contacts</Title>
            <Row>
              <p style={{ fontWeight: "600", fontSize: "20px" }}>Contact 1: </p>
              <p style={{ padding: "2px 0 0 0px" }}>
                {this.info.EName1}, {this.info.EPhone1}, {this.info.EMail1}
              </p>
            </Row>
            <Row>
              {this.info.EName2 === "" ? (
                <p>No second emergency contact</p>
              ) : (
                <div>
                  <p style={{ fontWeight: "600", fontSize: "20px" }}>
                    Contact 2
                  </p>
                  <p>
                    {this.info.EName2}, {this.info.EPhone2}, {this.info.EMail2}
                  </p>
                </div>
              )}
            </Row>
            <Title>References</Title>
            <Row>
              <p style={{ fontWeight: "600", fontSize: "20px" }}>
                Reference 1:
              </p>
              <p style={{ padding: "2px 0 0 0px" }}>
                {this.info.R1Name}, {this.info.R1Phone}, {this.info.R1Email}
              </p>
            </Row>
            <Row>
              <p style={{ fontWeight: "600", fontSize: "20px" }}>
                Reference 2:
              </p>
              <p style={{ padding: "2px 0 0 0px" }}>
                {this.info.R2Name}, {this.info.R2Phone}, {this.info.R2Email}
              </p>
            </Row>
            <Title style={{ fontWeight: "600", fontSize: "24px" }}>
              Additional
            </Title>
            <Row>
              <p>Trips provided in: {this.info.ProvidedIn}</p>
            </Row>
            <Row>
              <p>Currency: {this.info.Currency}</p>
            </Row>
            <div style={{ display: "flex" }}>
              <Button
                onClick={() => this.setState({ accepted: true })}
                style={{ background: this.state.accepted ? "tomato" : "white" }}
              >
                Accept
              </Button>
              <Button
                onClick={() => this.setState({ accepted: false })}
                style={{ background: this.state.accepted ? "white" : "tomato" }}
              >
                Deny
              </Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
