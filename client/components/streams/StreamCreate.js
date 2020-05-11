import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class StreamCreate extends React.Component {

    // Only want arror and touched property
    renderError({ error, touched }){
        if (touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    // By default, the field component will pass a large amount of props to the element in component
    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
        <div className={className}>
            <label>{formProps.label}</label>
            <input {...formProps.input} autoComplete='off'/>
            {this.renderError(formProps.meta)}
        </div>
        )
    }

    // Another implementation
    // renderInput({ input }) {
    //     return <input {...input} />
    // }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render(){
        return(
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className='ui form error'
            >
                <Field 
                    name='title' 
                    component={this.renderInput} 
                    label='Enter Title' 
                />
                <Field 
                    name='description' 
                    component={this.renderInput} 
                    label='Enter Description'
                />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){
        errors.description = 'You must enter a description'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)

export default connect(null,{createStream})(formWrapped)
