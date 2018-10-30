import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import './SearchContainer.css';

const conditions = ['Title', 'Genre'];

class SearchContainer extends Component {

  render() {
    const actionButton = <Button title='Search' type='submit' className='submitButton' onClick={() => console.log('click Search')} />;

    const renderConditions = conditions => {
      return (
        <div className='label'>
          Search by
          {conditions.map((item, index) => {
            return (
              <div key={index} className='condition'>
                {/* TODO: add logic for selected */}
                <Button title={item} className='searchButton' onClick={() => console.log(`click ${item}`)} />
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <div className='searchWrapper'>
        <Search
          title='Find your movie'
          conditions={renderConditions(conditions)}
          actionButton={actionButton} />
      </div>
    )
  }
}

SearchContainer.propTypes = {
  // conditions
}

export default SearchContainer;
