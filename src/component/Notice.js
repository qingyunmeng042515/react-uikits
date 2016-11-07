import React, { Component } from 'react'
import {Notice} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UINotice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Notice {...props} className={className} />
        )
    }
}

export default UINotice