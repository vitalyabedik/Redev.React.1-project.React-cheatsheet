import {
    AsyncRequest,
    ComponentClass,
    ComponentFunction,
    Events,
    Form,
    Fragment,
    Home,
    Key,
    Lifecycle,
    NotFound404,
    PropsClass,
    PropsFunction,
    ReactMemo,
    Refs,
    Routing,
    StateClass,
    StateFunction,
    UseContext,
    UseEffect,
    UseMemo,
    VirtualDom,
} from '../pages/index';

import {
    ASYNC__REQUEST,
    COMPONENT_CLASS,
    COMPONENT_FUNCTION,
    EVENTS,
    FORM,
    FRAGMENT,
    KEY,
    LIFECYCLE,
    PROPS_CLASS,
    PROPS_FUNCTION,
    REACT__MEMO,
    REFS,
    ROUTING,
    STATE_CLASS,
    STATE_FUNCTION,
    USE__CONTEXT,
    USE__EFFECT,
    USE__MEMO,
    VIRTUAL__DOM,
} from '../utils/constants/path.constants';

export const routes = [
    { path: '/', element: Home, index: true },
    { path: VIRTUAL__DOM, element: VirtualDom },
    { path: COMPONENT_CLASS, element: ComponentClass },
    { path: COMPONENT_FUNCTION, element: ComponentFunction },
    { path: PROPS_CLASS, element: PropsClass },
    { path: PROPS_FUNCTION, element: PropsFunction },
    { path: STATE_CLASS, element: StateClass },
    { path: STATE_FUNCTION, element: StateFunction },
    { path: LIFECYCLE, element: Lifecycle },
    { path: EVENTS, element: Events },
    { path: KEY, element: Key },
    { path: REFS, element: Refs },
    { path: FRAGMENT, element: Fragment },
    { path: REACT__MEMO, element: ReactMemo },
    { path: USE__MEMO, element: UseMemo },
    { path: USE__EFFECT, element: UseEffect },
    { path: USE__CONTEXT, element: UseContext },
    { path: FORM, element: Form },
    { path: ROUTING, element: Routing },
    { path: ASYNC__REQUEST, element: AsyncRequest },
    { path: '*', element: NotFound404 },
];
