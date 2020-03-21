import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Country Finder </h1>
        <span>
          Front end ReactJS Web App developed for Journi to
          show an auto complete text field that shows countries
          in ascending order by their distance from user&aposs location.
        </span>
      </div>
    );
  }
}

export default About;
