import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import './SearchContainer.css';

const conditions = ['Title', 'Genre'];

const renderConditions = (conditions) => {
  return (
    <div className='label'>
      Search by
      {conditions.map((item, index) => {
        return (
          <div key={index} className='condition'>
            {/* TODO: add logic for selected */}
            <Button title={item} className='searchButton' onClick={onClick} />
          </div>
        )
      })}
    </div>
  )
}

const onClick = () => {
  console.log('click');
}

const actionButton = (
  <Button title='Search' type='submit' className='submitButton' onClick={onClick} />
);

class SearchContainer extends Component {
  render() {
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

export default SearchContainer;
