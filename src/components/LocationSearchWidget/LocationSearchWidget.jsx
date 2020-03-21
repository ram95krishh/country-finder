import React, { Component } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import './LocationSearchWidget.css';

class LocationFinderWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', selectedOp: {} };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleOptionChange(e, option) {
    this.setState({ selectedOp: option });
  }

  handleSearchTermChange(e) {
    const { getCountriesBySearchTerm } = this.props;
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
    getCountriesBySearchTerm(searchTerm);
  }

  render() {
    const { searchTerm, selected, selectedOp } = this.state;
    const { options } = this.props;

    const selectionExists = Object.keys(selectedOp) && Object.keys(selectedOp).length;

    return (
      <div styleName="locationFinder">
        <Autocomplete
          disableClearable
          getOptionLabel={option => option.name}
          hasClearIcon={false}
          name="search"
          onChange={this.handleOptionChange}
          options={options}
          renderInput={params => (
            <TextField
              {...params}
              label="Search"
              name="country"
              onChange={this.handleSearchTermChange}
              value={searchTerm}
              variant="standard"
            />
          )}
          styleName="search"
          value={selected}
        />
        {selectionExists ? (
          <div>
            {`${selectedOp.name} is ${selectedOp.distance / 1000 * 0.62137} sky miles away from you!`}
          </div>
        ) : null}
      </div>
    );
  }
}

LocationFinderWidget.propTypes = {
  getCountriesBySearchTerm: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number,
      geo: PropTypes.arrayOf(PropTypes.number),
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default LocationFinderWidget;
