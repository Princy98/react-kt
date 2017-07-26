import React, { Component } from 'react';
import StatelessComponent from './StatelessComponent';
import TodoList from './TodoList';

const statelessComponentProps = {
    author: 'Vinay Uttam Vemparala'
};

const todos = [
    { title: 'First Todo' },
    { title: 'Second Todo' },
    { title: 'Third Todo' },
];

/**
 * Simple React Component. 
 */
class Welcome extends Component {
    // render() is expected to return other elements or components.
    render() {
        return (
            <div className="main-container">
                <h1>Welcome to React!</h1>

                <h2>What is React?</h2>
                <p>
                    React is a library to build interfaces. Using React one can build reusable
                    components and these components display data as it changes over time. React was
                    created at Facebook and it was initially released in March 2013.

                    React has expanded beyond the web with React Native, a tool to create native 
                    mobile applications using React for iOS and Android.
                </p>
                <StatelessComponent {...statelessComponentProps} />
                <TodoList todos={todos} />             
            </div>
        );
    }
}

export default Welcome;