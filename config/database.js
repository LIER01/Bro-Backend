module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "bro_strapi"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "admin"),
      },
      options: {},
    },
  },
});
