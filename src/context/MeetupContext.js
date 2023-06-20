import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  showError: false,
  showRegView: false,
  onRegister: () => {},
  nameChange: () => {},
  topicChange: () => {},
})

export default MeetupContext
