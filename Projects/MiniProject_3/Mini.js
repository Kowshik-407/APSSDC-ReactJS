import React, { Component } from 'react'

// rcc is the shortcut to create class - based components


export default class ClassState extends Component {
    constructor() {
        super()
        this.state={
            name:"Kowshik407"
        }
    }
    change() {
        this.setState(
            {
                name:"Aravind415"
            }
        )
    }

    render() {
        return (
            <div>
                <h2>{ this.state.name }</h2>
                <button onClick={ ()=> this.change() }> Click Me </button>
            </div>
        )
    }
}