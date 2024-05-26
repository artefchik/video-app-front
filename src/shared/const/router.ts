export enum Routes {
    MAIN = 'main',
    AUTH = 'auth',
    VIDEOS = 'videos'
}

export const getRoutePathMain = () => '/';
export const getRoutePathAuth = () => 'auth';
export const getRoutePathVideos = () => 'videos';

export const RoutePathConfig :Record<Routes, string> = {
    [Routes.MAIN]:getRoutePathMain(),
    [Routes.AUTH]:getRoutePathAuth(),
    [Routes.VIDEOS]:getRoutePathVideos(),
}