import React, { Component } from 'react';
import Avdomo from '../images/funnydomo.png';

class Myself extends Component {
  render() {
    return (
      <>
        <div className="myself">
          <div className="head text-center">
            <div className="av">
              <img src={Avdomo} alt="" style={{width: "250px"}}/>
            </div>
            <div className="hello">
              <span className="underline underline-black text-shadow-red">
                Xin chào human
                <span style={{color: "#1e272e",
                              position: "relative"
                              }}>!
                              <span style={{position: "absolute",
                                            color: "#fff",
                                            left: "2px",
                                            fontSize: ".9rem",
                                            bottom: "-11px"
                                            }} className="smile">
                              </span>
                </span>
              </span>
            </div>
          </div>
          <div className="bot text-center">
            <h2 className="text-shadow-red">Tôi là Nhựt</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Myself;