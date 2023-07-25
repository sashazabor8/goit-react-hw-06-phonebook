import React from 'react';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/filter/filter-actions';

function Filter({ filter, filterChange }) {
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        className={s.input}
        onChange={e => filterChange(e.currentTarget.value)}
        value={filter}
      />
    </label>
  );
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterChange: value => dispatch(actions.filterChange(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
