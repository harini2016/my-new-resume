import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> Lorel Ipsum Lorel Ipsum  Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum 
              Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum 
              Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum
              Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum
              Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum 
              Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum Lorel Ipsum.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Foo Bar</span><br />
                  <span>1221 S Mopac Expressway, TX 78745 US
                  </span><br />
                  <span>(123)456-7890</span><br />
                  <span>foobar@foobar.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}