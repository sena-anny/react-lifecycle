import React, { Component } from 'react'
import MyNew from './MyNew'

export default class MyArticle extends Component {
  render() {
    return (
      <React.Fragment>
        <dt>
          <a href={this.props.url}>{this.props.title}</a>
          { this.props.isNew ? <MyNew /> : null }
        </dt>
        <dd>{this.props.description}</dd>

      </React.Fragment>
    )
  }
}