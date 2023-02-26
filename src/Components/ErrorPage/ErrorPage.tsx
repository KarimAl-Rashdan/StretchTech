import "../ErrorPage/ErrorPage.css"
import coverImage from "../../images/PageNotFound.png"

const ErrorPage = () => {
  return (
    <div className="PageNotFound" style={{backgroundImage: `url(${coverImage})`} }>
    <h2>Something went wrong: 404- Page Not Found!</h2>
    </div>
  )
}

export default ErrorPage