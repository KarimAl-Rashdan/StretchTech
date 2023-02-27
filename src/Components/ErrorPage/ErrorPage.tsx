import "../ErrorPage/ErrorPage.css"
import coverImage from "../../images/PageNotFound.png"
import { useHistory } from 'react-router-dom';


const ErrorPage = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="PageNotFound" style={{backgroundImage: `url(${coverImage})`} }>
      <h2>Something went wrong: 404- Page Not Found!</h2>
      <button className="backButton" onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default ErrorPage
