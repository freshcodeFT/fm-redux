import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as HeroActionCreators from '../actions/heroCreators';

export function * createHeroSaga (action) {
  try {
    const { values } = action;
    const {
      data: {
        data: { createdHero },
      },
    } = yield API.createHero(values);
    console.log(createdHero);

    yield put(HeroActionCreators.createHeroSuccess(createdHero));
  } catch (error) {
    yield put(HeroActionCreators.createHeroError(error));
  }
}
