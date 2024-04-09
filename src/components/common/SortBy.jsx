import styled from "styled-components"

const Sort = styled.div`
padding: 10px;
cursor: pointer
`
const Heading = styled.div`
padding: 10px;
font-weight: bold;
`

const SortBy = ({setSort, setCurrSort, currSort}) => {

  const handleClick = (sort, text) => {
    
    setCurrSort(text)
    setSort(sort)
  }

  return (
    <div className='sort-dropdown'>
      <div className='sortbtn'> {currSort} <i className="fa-solid fa-circle-chevron-down"></i></div>
      <div className='sort-content'>
          <Heading>Sort by</Heading>
          <Sort value='created_at' onClick={() => handleClick('created_at', 'Date')}> Date </Sort>
          <Sort value='votes' onClick={() => handleClick('votes', 'Votes')}> Votes </Sort>
          <Sort value='comment_count' onClick={() => handleClick('comment_count', 'Comments')}> Comments </Sort>
        </div>
    </div>
  );
}

export default SortBy
