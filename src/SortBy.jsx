import { Link } from "react-router-dom";
import { useState } from "react";

const SortBy = () => {
  const [currSort, setCurrSort] = useState('Date')

  return (
    <div className='sort-dropdown'>
      <div className='sortbtn'> {currSort} <i className="fa-solid fa-circle-chevron-down"></i></div>
      <div className='sort-content'>
        <Link to= '/articles?sort_by=created_at' onClick={() => setCurrSort('Date')}> Date </Link>
        <Link to='/articles?sort_by=votes' onClick={() => setCurrSort('Likes')}> Likes </Link>
        <Link to='/articles?sort_by=comment_count' onClick={() => setCurrSort('Comments')}> Comments </Link>
      </div>
    </div>
  );
}

export default SortBy
