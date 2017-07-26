import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesExample extends Component {
    render() {
        return (
            <div className="prop-types-example">
                <h3>PropTypes</h3>
                <p>
                    PropTypes allows us to supply a property type for all our different properties,
                    so that it will validate to make sure that we are supplying the right type of 
                    data for a particular property.

                    PropTypes, can also be considered as working documentation about the props 
                    that we are using and what should be supplied as values.

                    When an inncorrect value is passed for a property, it will throw a warning in the console.
                    Similarly, when a required property is not defined, it will throw a warning in the console.
                    Using PropTypes, we can also specify if a particular property is required or not.

                </p>
                <p>Examples:</p>
                <p>{this.props.name}, of age {this.props.age}{(this.props.human) ? ' is a person.' : null}</p>
            </div>
        )
    }
}

PropTypesExample.defaultProps = {
    name: 'John Doe',
    age: 20,
    human: true,
};

PropTypesExample.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  human: PropTypes.bool.isRequired,
};

export default PropTypesExample;