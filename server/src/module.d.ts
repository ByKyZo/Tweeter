declare namespace NodeJS {
    export interface ProcessEnv {
        HOST: string;
        PORT: number;
        DB_USER: string;
        DB_PASSWORD: string;
        DATABASE: string;
    }
}
