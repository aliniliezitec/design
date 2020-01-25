import { BehaviorSubject } from 'rxjs';

// tslint:disable-next-line: no-namespace
export namespace NaoCrud {
    export interface Status {
        canClick: boolean;
        loaded: boolean;
        processing: boolean;
        firstLoading: boolean;
        fatalError: boolean;
        state: BehaviorSubject<State>;
    }
    export enum State {
        init = 'init',
        ready = 'ready',
        loading = 'loading',
        processing = 'processing',
        done = 'done', // shift back to ready
        warning = 'warning',
        error = 'error',
        fatalError = 'fatalError',
        destroy = 'destroy'
    }

}
