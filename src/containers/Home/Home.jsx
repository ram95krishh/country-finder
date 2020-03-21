import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocationSearchWidget from '../../components/LocationSearchWidget';
import { operations as searchOperations, selectors } from '../../state/ducks/search';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    const { getCountriesBySearchTerm, getCurrentLocation } = this.props;
    getCountriesBySearchTerm('');
    getCurrentLocation();
  }

  render() {
    const { getCountriesBySearchTerm, options } = this.props;
    return (
      <div styleName="screenArea">
        Journi Location Finder
        <LocationSearchWidget
          getCountriesBySearchTerm={getCountriesBySearchTerm}
          options={options}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCountriesBySearchTerm: searchOperations.getCountriesBySearchTerm(dispatch),
  getCurrentLocation: searchOperations.getCurrentLocationTrigger(dispatch),
});

const mapStateToProps = state => ({
  options: selectors.getOptions(state),
});

Home.defaultProps = {
  options: [],
};

Home.propTypes = {
  getCountriesBySearchTerm: PropTypes.func.isRequired,
  getCurrentLocation: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number,
      geo: PropTypes.arrayOf(PropTypes.string),
      name: PropTypes.string,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
