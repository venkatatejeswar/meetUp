import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import MeetupContext from './context/MeetupContext'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    showError: false,
    showRegView: false,
  }

  registerName = () => {
    this.setState({showRegView: true})
  }

  onnameChange = name => {
    this.setState({name})
  }

  ontopicChange = topic => {
    this.setState({topic})
  }

  render() {
    const {name, topic, showError, showRegView} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          showError,
          showRegView,
          onRegister: this.registerName,
          nameChange: this.onnameChange,
          topicChange: this.ontopicChange,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
