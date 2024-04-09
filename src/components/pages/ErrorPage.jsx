import ErrorComponent from "../ui/ErrorComponent"


const ErrorPage = () => {
    const error = {status: 404, data:{msg: 'Page does not exist'}}
return <ErrorComponent error = {error}/>
}

export default ErrorPage