import React from 'react';

export interface RouteConfig{
    path:string;
    component:React.FC;
    exact?:boolean;
}