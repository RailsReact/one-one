import React from 'react'

class MyName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({name: event.target.value})
  }

  render () {
    const {name} = this.state 

    return (
      <div>
        <h1>My name is: {name}</h1>
        <input type="text" value={name} onChange={this.handleChange} />
      </div>
    )
  }
}

export default MyName
