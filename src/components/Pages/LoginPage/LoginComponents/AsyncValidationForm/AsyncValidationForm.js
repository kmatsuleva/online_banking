import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../../../../formValidation/validate';
import "./styles.css"
import RequiredField from '../../../../Common/RequiredField/RequiredField';
import asyncValidate from '../../../../../formValidation/asyncValidate'


const renderField = (
  { input, label, type, meta: { asyncValidating, touched, error } },
) => (
  <div>
    <label className="form__label">{label}</label>
    <RequiredField />
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} className="form__input"/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const AsyncValidationForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username:"
        className="form__input"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password:"
       
      />
      <div>
        <input type="submit" value = 'Sign in' disabled={submitting} className="loginButton"/>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'asyncValidation',
  validate,
  asyncValidate,
  asyncBlurFields: ['username'],
})(AsyncValidationForm);