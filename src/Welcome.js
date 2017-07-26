import React, { Component } from 'react';
import StatelessComponent from './StatelessComponent';
import TodoList from './TodoList';
import DefaultProps from './DefaultProps';
import PropTypesExample from './PropTypesExample';
import StateExample from './StateExample';
import OwnerOwneeExample from './OwnerOwneeExample';
import RefsExample from './RefsExample';
import ComponentLifecycleEx from './ComponentLifecycleEx';

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
                <div className="default-props-example">
                    <h2>Default Properties Example</h2>
                    <h3>List of Authors and Editors</h3>
                    <span>When no properties are passed to the component it takes the default values specified for each of the property</span>
                    <DefaultProps />

                    <h3>List of Authors and Editors - (Only Author is passed as property for this component)</h3>
                    <span>When only few properties are passed, it would considered the passed properties values and for missing properties it will use the default props specified.</span>

                    <DefaultProps author={'Vinay Uttam Vemparala'} />

                    <h3>List of Authors and Editors - (Both properties are passed)</h3>
                    <span>When all parameteres are passed, it would considered the passed properties instead of the specified props.</span>
                    <DefaultProps author={'Vinay Uttam Vemparala'} editor={'Vinay Uttam Vemparala'} />
                    <PropTypesExample />
                    <StateExample />
                    <OwnerOwneeExample />
                    <RefsExample />
                    <ComponentLifecycleEx />
                </div>
            </div>
        );
    }
}

export default Welcome;