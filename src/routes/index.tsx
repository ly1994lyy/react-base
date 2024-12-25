import {RouteObject} from 'react-router-dom';
import Login from '@/views/login.tsx';

export const routers:RouteObject[] = [
	{
		path:'/login', element: <Login />
	}
]