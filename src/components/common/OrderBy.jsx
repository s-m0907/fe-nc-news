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

const OrderBy = ({setOrder}) => {

return <Wrapper>
<div onClick={() => {setOrder('desc')}} style={linkStyle}><i className="fa-solid fa-arrow-down-wide-short fa-xl"></i></div>   
<div onClick={() => {setOrder('asc')}} style={linkStyle}><i className="fa-solid fa-arrow-up-short-wide fa-xl"></i></div>
</Wrapper>
}

export default OrderBy