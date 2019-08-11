import { COMPONENTS, COMPONENT_STATE } from '../containers/Scheduler/config';

export const hasSate = (state, component) => (Boolean(COMPONENT_STATE[state] & COMPONENTS[component]));
export const addLeadingZerro = value => `0${value}`.slice(-2);
