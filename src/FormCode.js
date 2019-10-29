import React from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
      errors.lastName = 'Minimum be 2 characters or more'
    }
    if (!values.address) {
      errors.address = 'Required'
    } else if (values.address.length < 10) {
      errors.address = 'Minimum be 10 characters or more'
    } else if (values.address.length > 101){
      errors.address = 'Maximum be 100 characters or minus'
    }
    return errors
  }
  
const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched && ((error && <span className="text-danger">{error}</span>))}
        </div>
    </div>
)

const renderFieldTextArea = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div>
      <label className="control-label">{label}</label>
      <div>
          <textarea {...input} placeholder={label} type="TextArea" className="md-textarea form-control"/>
          {touched && ((error && <span className="text-danger">{error}</span>))}
      </div>
  </div>
)


let FormCode = props => {
    const { handleSubmit, pristine, submitting } = props;
    return(
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <Field name="firstName" component={renderField} label="First Name"/>
            </div>
            <div className="form-group">
                <Field name="lastName" component={renderField} label="Last Name"/>
            </div>
            <div className="form-group">
                <Field name="email" component={renderField} label="e-mail"/>
            </div>
            <div className="form-group">
                <Field name="address" component={renderFieldTextArea}  label="Address"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit></button>
            </div>
        </form>
    )
}



FormCode = reduxForm({
    form:'contact',
    validate,
})(FormCode);

export default FormCode;