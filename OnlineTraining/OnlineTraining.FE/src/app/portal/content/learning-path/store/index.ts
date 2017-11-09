import * as fromLearningPath from '../store/reducers/learning-path.reducer';
import * as fromLearningPathLayout from '../store/reducers/learning-path.layout.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LearningPathLayoutState } from './reducers/learning-path.layout.reducer';
import { LearningPathState } from './reducers/learning-path.reducer';

export const selectLearningPathState = createFeatureSelector('portalModule');

export const selectLearningPathList = createSelector(
  selectLearningPathState,
  (state: LearningPathState) => state.learningPathReducer
);

export const selectLearningPathLayout = createSelector(
  selectLearningPathState,
  (state: LearningPathLayoutState) => state.isDetailPage
);





