module.exports = {
    general: {

    },
    timeouts: {
        defaultCommandTimeout: 10000,
        responseTimeout: 10000,
        requestTimeout: 10000,
        pageLoadTimeout: 10000,
    },

    localUrl: {
        baseUrl: 'http://127.0.0.1',
    },

    stageUrl: {
        baseUrl: 'https://synthworld.ai/',
    },

    sumsung: {
        viewportWidth: 360,
        viewportHeight: 760,
    },

    ipad: {
        viewportWidth: 768,
        viewportHeight: 1024,
    },

    macbook: {
        viewportWidth: 1280,
        viewportHeight: 800,
    },

    monitor: {
        viewportWidth: 1920,
        viewportHeight: 1080,
    },

    env: {
        localDb: {
            host: '127.0.0.1',
            user: 'root',
            password: 'secret',
            database: 'digest',
            port: '3308'
        },
        MAILSLURP_API_KEY: "b509e48229e8ab1cba1dfa5fa6972d7446576c97eec32e67313a3ecbdc39c5bd",
        inboxIds: {
            Abce: "abce8e9c-7dd2-43fb-9b74-a23ea9a77513",
            B67b: "b67b452f-1847-4d01-81de-5b8703f44077",
            Guest: "68a636c3-0330-41ef-b68b-649037db1e78"
        }
    },
};