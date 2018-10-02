import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class If extends Component {
  constructor () {
    super()
    this.renderIf = this.renderIf.bind(this)
    this.renderElse = this.renderElse.bind(this)
  }
  renderIf (children) {
    /*
    * If children is not an array there is no upcoming Else
    * so returning right the children away.
    */
    if (!Array.isArray(children)) {
      return children
    }
    const sliceIndex = children.findIndex(child => child.props.operator === 'Else' || child.props.operator === 'ElseIf') || children.length
    const result = children.slice(0, sliceIndex)
    return result
  }
  renderElse (children) {
    /*
    * If the component's children are not an array there is no Else content
    * so returning null
    */
    if (!Array.isArray(children)) {
      return null
    }
    // Find index to know where to slice
    const sliceIndex = children.findIndex(
      child => child.props.operator === 'Else'
    )
    if (sliceIndex) {
      // Else were found so slicing
      return children.slice(sliceIndex + 1, children.length)
    } else {
      // Else were not found so returning null because the state ment is false
      return null
    }
  }

  render () {
    if (this.props.statement === true) {
      return this.renderIf(this.props.children)
    } else {
      return this.renderElse(this.props.children)
    }
  }
}
If.propTypes = { statement: PropTypes.bool.isRequired }

export class Else extends React.Component {
  render () {
    return null
  }
}
Else.propTypes = { operator: PropTypes.oneOf(['else']) }
Else.defaultProps = { operator: 'Else' }
