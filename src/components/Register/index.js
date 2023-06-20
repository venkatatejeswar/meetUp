import {Component} from 'react'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'
import {
  RegisterContainer,
  Image,
  FormContainer,
  RegisterTitle,
  Label,
  Input,
  Select,
  Option,
  Button,
  ErrorMsg,
} from './styledComponent'

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

class Register extends Component {
  state = {showError: false}

  render() {
    const {showError} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {name, topic, nameChange, topicChange, onRegister} = value
          const onNameChange = e => {
            this.setState({showError: false})
            nameChange(e.target.value)
          }
          const onTopicChange = e => {
            const topicId = e.target.value
            topicChange(topicId)
          }

          const onFormSubmit = event => {
            event.preventDefault()
            const {history} = this.props
            if (name === '') {
              this.setState({showError: true})
            } else {
              onRegister()
              history.replace('/')
            }
          }
          return (
            <>
              <Header />
              <RegisterContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={onFormSubmit}>
                  <RegisterTitle>Let us join</RegisterTitle>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={onNameChange}
                  />
                  <Label htmlFor="topics">TOPICS</Label>
                  <Select id="topics" onChange={onTopicChange} value={topic}>
                    {topicsList.map(topics => (
                      <Option key={topics.id} value={topics.id}>
                        {topics.displayText}
                      </Option>
                    ))}
                  </Select>
                  <Button type="submit">Register Now</Button>
                  {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
                </FormContainer>
              </RegisterContainer>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
