import ReducerRegistry from '@redhat-cloud-services/frontend-components-utilities/files/ReducerRegistry';
import { getCPStore } from './Reducer';
import promiseMiddleware from 'redux-promise-middleware';
let registry;

export function init(...middleware) {
    if (registry) {
        throw new Error('store already initialized');
    }

    registry = new ReducerRegistry({}, [
        promiseMiddleware,
        ...middleware
    ]);

    registry.register({ CPStore: getCPStore() });

    return registry;
}

export function getStore() {
    return registry.getStore();
}

export function register(...args) {
    return registry.register(...args);
}
