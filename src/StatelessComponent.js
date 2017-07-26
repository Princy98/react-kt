import React, { Component } from 'react';

const StatelessComponent = (props) => {
    return (
        <div className="stateless-component">
            <h2>What are Stateless Components?</h2>
            <p>
                Stateless components are functions that take in property information and return
                JSX elements. Stateless components do not have access to `this`, so properties 
                are passed directly into the function.

                Also, Stateless components doesn't have state or any of the React Component lifecyle
                methods.
            </p>
            <span>Author: {props.author}</span>
        </div>
    )
}

export default StatelessComponent;