import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
text-decoration: none;
display: flex;
column-gap: 5px;
`
const linkStyle= {
    color: "#BF4F74"
}

const OrderBy = ({setSortOrder}) => {

return <Wrapper>
<div onClick={() => {setSortOrder('desc')}} style={linkStyle}><i className="fa-solid fa-arrow-down-wide-short fa-xl"></i></div>   
<div onClick={() => {setSortOrder('asc')}} style={linkStyle}><i className="fa-solid fa-arrow-up-short-wide fa-xl"></i></div>
</Wrapper>
}

export default OrderBy