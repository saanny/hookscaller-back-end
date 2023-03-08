const PRODUCTION = ["prod", "production"].includes(
    process.env.NODE_ENV as string
);
const DEVELOPMENT = !PRODUCTION;
if (DEVELOPMENT) {
    require("dotenv").config();
}
const {
    PORT,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    POSTGRES_HOST,
    POSTGRES_DATABASE
} = process.env;

export {
    PORT,
    POSTGRES_PORT,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_DATABASE
};

