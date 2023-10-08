import React, { Component, PureComponent } from 'react'

export default class User extends PureComponent {

    render() {
        console.log("rerendering")
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
