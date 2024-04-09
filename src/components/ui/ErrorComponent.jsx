import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 40px;`

const ErrorCard = styled.div `
width: 65%;
max-width: 70%;
text-align: center;
background-color: lightgray;
padding: 40px;
border-radius: 20px;

`

const Message = styled.p`
margin-bottom: 30px;`

const linkStyle = {
    backgroundColor: "#4D4D4D",
    color: "whitesmoke",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
}

const ErrorComponent = ({error}) => {
return <Wrapper>
    <ErrorCard>
<h2>Error {error.status}</h2>
<Message>{error.data.msg}</Message>
<Link to='/' style={linkStyle}>Back to home</Link>
    </ErrorCard>
</Wrapper>
}

export default ErrorComponent