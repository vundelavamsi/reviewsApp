// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    console.log(index)
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    // console.log(index)
    const {reviewsList} = this.props
    // console.log(reviewsList)
    const {imgUrl, username, companyName, description} = reviewsList[index]
    // console.log(username)

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
