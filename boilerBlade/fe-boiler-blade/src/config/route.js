// 
import loadable from '../helper/router/loadable';
// component

const Login = loadable(() => import('../page/login'));
const Home = loadable(() => import('../page/home'));

// route
export const ROUTES = {
    // unAuth
    LOGIN: "login",
    SETTING: "setting",
    WELCOME: "welcome",
    // authed
    HOME: "",
    MONITORING: "monitoring",
    MACHINING: "machining",
    PRODUCTION_IMPLEMENTATION: "production-implementation",
    PRODUCTION: {
        IMPLEMENTATION: "production-implementation",
        PLAN: "production-plan",
    },
    MAINTENANCE: "maintenance",
    ANALYTICS: "analytics",
    // SETTINGS: 'settings',
    ACCOUNT: "account",
    PROFILE: "profile",
    ABOUT: "about",
    SETTINGS: {
        SETTING_PRODUCT: "setting-product",
        GENERAL_SETTING: "general-setting",
    },
    SETTING_PRODUCT: "setting-product",
    GENERAL_SETTING: "general-setting",
    MACHINE_ANALYTIC: "analytic",
    PARETO: "pareto",
    SOFTWARE: "software",
    KPI: "kpi",
};

export const private_route = [
    {
        path: `/${ROUTES.HOME}`,
        Com: Home,
    },
    {
        path: `/${ROUTES.WELCOME}`,
        Com: Home,
    }
];

export const public_route = [
    {
        path: `/${ROUTES.LOGIN}`,
        Com: Login,
    },
    {
        path: `/404`,
        Com: () => <div>2223</div>,
    }
];