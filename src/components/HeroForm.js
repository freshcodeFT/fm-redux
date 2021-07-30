import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createHeroRequest } from '../actions/heroCreators';

function HeroForm (props) {
  const { createHeroAction } = props;
  const onSubmit = (values, actions) => {
    createHeroAction(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        nickName: '',
        realName: '',
        originDescription: '',
        catchPhrase: '',
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='nickName' placeholder='nickName' />
        <Field name='realName' placeholder='realName' />
        <Field name='originDescription' placeholder='originDescription' />
        <Field name='catchPhrase' placeholder='catchPhrase' />
        <button type='submit'>Create Hero</button>
        <button type='reset'>Reset Hero</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createHeroAction: values => dispatch(createHeroRequest(values)),
});

export default connect(null, mapDispatchToProps)(HeroForm);
