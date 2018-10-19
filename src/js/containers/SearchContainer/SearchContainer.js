import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import './SearchContainer.css';

const conditions = ['Title', 'Genre'];

const renderConditions = (conditions) => {
  return (
    <div className='label'>
      Search by
      {conditions.map((item, index) => {
        return (
          <div key={index}>
            <button onClick={onClick}>{item}</button>
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
  <button type='submit' onClick={onClick}>Search</button>
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
