import {
  NotfoundContainer,
  NotfoundImage,
  NotfoundTitle,
  NotfoundDesc,
} from './styledComponent'

const NotFound = () => (
  <NotfoundContainer>
    <NotfoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotfoundTitle>Page Not Found</NotfoundTitle>
    <NotfoundDesc>
      We are sorry, the page you requested could not be found.
    </NotfoundDesc>
  </NotfoundContainer>
)

export default NotFound
