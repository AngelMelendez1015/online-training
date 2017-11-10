import { Action } from '@ngrx/store';

export const DETAIL_PAGE = 'DETAIL_PAGE';

export class DetailPage implements Action {
    readonly type = DETAIL_PAGE;
    constructor(public payload: any) {
    }
}

export type Actions = DetailPage;

