/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}

// declare module "vue-router"
// declare module 'vue';

