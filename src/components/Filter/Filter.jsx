import React from "react";
import { Component } from "react";
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`;

export class Filter extends Component{
    state={
       value: '',
    };

    render() {
        return (
        <>
            <Label htmlFor="filter">Find contacts by name</Label>
            <input type="text" name="filter" value={this.props.value} onChange={this.props.onChange} />
        </>
        );

    }
}