module.exports = ({ env }) => {
    if (env("NODE_ENV") === "development") {
        return {
            defaultConnection: "default",
            connections: {
                default: {
                    connector: "mongoose",
                    settings: {
                        client: "mongo",
                        host: env("DATABASE_HOST", "localhost"),
                        srv: env.bool("DATABASE_SRV", false),
                        port: env.int("DATABASE_PORT", 27017),
                        database: env("DATABASE_NAME", "production"),
                        username: env("DATABASE_USERNAME", ""),
                        password: env("DATABASE_PASSWORD", ""),
                        uri: env("DATABASE_URI"),
                    },
                    options: {
                        authenticationDatabase: env(
                            "AUTHENTICATION_DATABASE",
                            null
                        ),
                        ssl: env("DATABASE_SSL", true),
                    },
                },
            },
        };
    } else if (env("NODE_ENV") === "production") {
        return {
            defaultConnection: "default",
            connections: {
                default: {
                    connector: "mongoose",
                    settings: {
                        client: "mongo",
                        host: env("DATABASE_HOST", "localhost"),
                        srv: env.bool("DATABASE_SRV", false),
                        port: env.int("DATABASE_PORT", 27017),
                        database: env("DATABASE_NAME", "production"),
                        username: env("DATABASE_USERNAME", ""),
                        password: env("DATABASE_PASSWORD", ""),
                        uri: env("DATABASE_URI"),
                    },
                    options: {
                        authenticationDatabase: env(
                            "AUTHENTICATION_DATABASE",
                            null
                        ),
                        ssl: env("DATABASE_SSL", true),
                    },
                },
            },
        };
    }
};
