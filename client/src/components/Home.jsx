import React from 'react';
import {
    Link
  } from "react-router-dom";
import ThreeDModels from './ThreeDModels';
const Home = () => {
    const [switchView, setSwitchView] = React.useState(true);
    const handleSwitchView = (e) => {
        setSwitchView(!switchView)
    }
    const displayFlexContainer = {
        display: "flex"
    }
    const displayAside = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#242424",
        flex: "0 0 25%",
        maxWidth: "20%"
    }
    const displayAsideLogo = {
        height: "20vh",
    }
    const displayAsideMain = {
        flex: "1",
        display: "flex",
    }
    const displayMain = {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#121212"
    }
    const fontStyle1 = {
        color: "white"
    }
    const fontStyle2 = {
        color: "white",
        fontSize: "1.35rem",
        textDecoration: "none"
    }
    const displayBottom = {
        paddingTop: "0rem",
        padding: "2rem",
        flex: "1",
        overflow: "auto"
    }
    const displayBottomInner = {
        padding: "1rem 1rem",
        backgroundColor: "#242424",
        cursor: "pointer",
        margin: "auto"
    }
    const displayBottomInnerFlex = {
        display: "flex",
        cursor: "pointer",
    }
    const displayBottomInnerFlexContainer = {
        display: "flex",
        cursor: "pointer",
        padding: "1rem 1rem",
        backgroundColor: "#242424",
        cursor: "pointer",
        margin: "auto",
        flexWrap: "wrap"
    }
    const searchBox = {
        display: "flex",
        backgroundColor: "#363636",
        color: "white",
        width: "50%"
    }
    const searchBoxInput = {
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        border: "0px",
        color: "white",
        padding: "0rem 1rem"
    }
    const buttonFlexDiv = {
        padding: "0.5rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#363636",
        color: "white",
    }
    const buttonDiv = {
        padding: "1rem",
        display: "flex",
        margin: "0.5rem 0rem",
        justifyContent: "space-between",
        backgroundColor: "#363636",
        color: "white",
    }
    const cardView = {
        display: "flex",
        flexDirection: "column",
        // height: "50vh",
        width: "24.4%",
        backgroundColor: "#363636",
        margin: "0.2rem"
    }
    const cardViewInner = {
        flex: "1",
    }
    const displayTop = {
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between"
    }
    
    return (
        <div style={displayFlexContainer}>
          {/* <div>
            <p style={displayTop}>{model}</p>
            {
              model != null && <ThreeDModels model={model}/>
            }
          </div> */}
          <div style={displayAside}>
            <div style={displayAsideLogo}>
              logo
            </div>
            <div style={displayAsideMain}>
              <div style={displayBottomInner}>
                  <div style={buttonDiv}>
                    <Link style={fontStyle2} to="Login">Login</Link>
                  </div>
                  <div style={buttonDiv}>
                  <Link style={fontStyle2} to="Register">Register</Link>
                  </div>
                </div>
            </div>
          </div>
          <div style={displayMain}>
            <h1 style={fontStyle1}>Community</h1>
            <p style={fontStyle2}>Ideas of the open world</p>
            <div style={displayTop}>
              <div style={searchBox}>
                <input placeholder='Search' style={searchBoxInput}></input>
              </div>
              <div style={displayBottomInnerFlex}>
                <div onClick={handleSwitchView} style={buttonFlexDiv}>list</div>
                <div onClick={handleSwitchView} style={buttonFlexDiv}>grid</div>
              </div>
            </div>
            <div style={displayBottom}>
              {
                switchView && <div style={displayBottomInner}>
                  {Array(4).fill(0).map((el, i) =>
                    <div style={buttonDiv} key={i+1}>
                      <Link style={fontStyle2} to={`/P${i+1}.glb`}>P{i+1}.glb</Link>
                    </div>
                  )}
                </div>
              }
              {
                !switchView && <div style={displayBottomInnerFlexContainer}>
                  {Array(4).fill(0).map((el, i) =>
                    <Link  style={cardView} key={i+1} to={`/P${i+1}.glb`}>
                        <div style={cardViewInner}>
                            <ThreeDModels model={`P${i+1}.glb`} height={'100%'} width={'100%'}/>
                        </div>
                        <div style={fontStyle2}>P{i+1}.glb</div>
                    </Link>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
    );
};
export default Home;