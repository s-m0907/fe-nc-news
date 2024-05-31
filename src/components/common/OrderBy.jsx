import styled from "styled-components"

const Wrapper = styled.div`
text-decoration: none;
display: flex;
column-gap: 5px;
`
const linkStyle= {
    color: "#DE2B67"
}

const OrderBy = ({setOrder}) => {

return <Wrapper>
<div onClick={() => {setOrder('desc')}} style={linkStyle}><i className="fa-solid fa-arrow-down-wide-short fa-lg"></i></div>   
<div onClick={() => {setOrder('asc')}} style={linkStyle}><i className="fa-solid fa-arrow-up-short-wide fa-lg"></i></div>
</Wrapper>
}

export default OrderBy