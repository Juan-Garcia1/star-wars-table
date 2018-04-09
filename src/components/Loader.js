import React, { Component } from 'react'

const Loader = (WrappedComponent) => {
    return class Loader extends Component {
        render() {
            return this.props.characters.length === 0 ? 
            <i style={spinner} className="fa fa-spinner fa-4x fa-pulse" aria-hidden="true"></i> : 
            <WrappedComponent {...this.props} />
        }
    }
}

const spinner = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'yellow',
}

export default Loader