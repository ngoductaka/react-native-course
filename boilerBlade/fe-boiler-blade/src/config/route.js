
// CONST
import { ROUTES } from './router_app';
// 
import loadable from '../helper/router/loadable';
// component

const Login = loadable(() => import('../page/login'));
const Home = loadable(() => import('../page/home'));

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