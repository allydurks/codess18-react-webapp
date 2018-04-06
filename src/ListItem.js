import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

export class ListItem extends Component {
    render() {
        return (
            <ListGroupItem>
                {this.props.item}
            </ListGroupItem>
        );
    }
}