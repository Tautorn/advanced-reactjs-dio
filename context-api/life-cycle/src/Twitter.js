import React, { Component } from 'react'

class Twitter extends Component {

  state = {
    tweet: 'title'
  }

  componentDidMount() {
    const { posts, loading } = this.props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
    
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido :(')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet
  }

  tweet = () => {
    this.setState({
      tweet: true
    })
  }

  render () {
    const { posts } = this.props
    console.log('render', posts)
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        tests
      </div>
    )
  }
}

export default Twitter
