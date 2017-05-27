import {createElement, createClass} from 'react'
import {createConnector} from 'react-instantsearch'

import Results from './results'
import Loader from './loader'

const connectConditionalResults = createConnector({
  displayName: 'ConditionalResults',
  getProvidedProps (props, searchState, searchResults) {
    const {searching} = searchResults
    return {searching}
  }
})

const ConditionalResults = createClass({
  getInitialState () {
    return {loading: true, ready: false}
  },

  componentWillReceiveProps () {
    const {searching} = this.props
    const {ready} = this.state
    if (searching && !ready) this.setState({loading: false, ready: true})
  },

  render () {
    const {loading} = this.state
    const {toggle, get, set} = this.props
    const props = {toggle, get, set}

    return createElement(
      loading ? Loader : Results,
      props
    )
  }
})

export default connectConditionalResults(ConditionalResults)
