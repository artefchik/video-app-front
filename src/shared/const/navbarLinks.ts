import {  getRoutePathMain, getRoutePathVideos, Routes } from '@/shared/const/router';

interface NavbarLink {
    title: string;
    path: string;
}

export const navbarLinks:NavbarLink[] = [
    {
        title:'Home',
        path:getRoutePathMain()
    },
    {
        title:'Videos',
        path:getRoutePathVideos()
    }
]