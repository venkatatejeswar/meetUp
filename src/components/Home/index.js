import {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  HomeContainer,
  Title,
  Description,
  Button,
  Image,
} from './styledComponent'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Home extends Component {
  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {name, topic, showRegView} = value
          const topicText = topicsList.find(each => each.id === topic)
          return (
            <>
              <Header />
              <HomeContainer>
                <Title>
                  {showRegView ? `Hello ${name}` : 'Welcome to Meetup'}
                </Title>
                <Description>
                  {showRegView
                    ? `Welcome to ${topicText.displayText}`
                    : 'Please register for the topic'}
                </Description>
                {!showRegView && (
                  <Link to="/register">
                    <Button type="button">Register</Button>
                  </Link>
                )}
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
