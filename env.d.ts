declare namespace NodeJS {
    declare type PasswordsMap = {
        [id: string]: string;
    };
    interface ProcessEnv {
        readonly CHAIN_ID: string;
        readonly NEXT_PUBLIC_ALCHEMY_ID: string;
        readonly COOKIE_NAME: string;
        readonly SESSION_SECRET: string | PasswordsMap;
        readonly WEB_DB_HOST: string;
        readonly WEB_DB_PORT: string;
        readonly WEB_DB_USER: string;
        readonly WEB_DB_PASS: string;
        readonly WEB_DB_NAME: string;
        readonly WEB_DB_POOL_MAX: string;
        readonly GAME_DB_HOST: string;
        readonly GAME_DB_PORT: string;
        readonly GAME_DB_USER: string;
        readonly GAME_DB_PASS: string;
        readonly GAME_DB_NAME: string;
        readonly GAME_DB_POOL_MAX: string;
    }
}

// MP4 파일
declare module '*.mp4' {
    const src: string;
    export default src;
}
