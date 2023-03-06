const PRODUCTION = ["prod", "production"].includes(
    process.env.NODE_ENV as string
);
const DEVELOPMENT = !PRODUCTION;
if (DEVELOPMENT) {
    require("dotenv").config();
}
const {
    PORT,
    JWT_SECRET,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB,
    NODE_ENV,
    REDIS_PORT,
    REDIS_HOST,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_DATABASE
} = process.env;

export {
    PORT,
    JWT_SECRET,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB,
    NODE_ENV,
    REDIS_PORT,
    REDIS_HOST,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_DATABASE
};

