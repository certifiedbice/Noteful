module.exports={
    PORT:process.env.PORT||8000,
    NODE_ENV:process.env.NODE_ENV||'development',
    DB_URL:process.env.DB_URL||'postgresql://noteful:noteful@localhost/noteful',
    TEST_DB_URL:process.env.TEST_DB_URL||'postgresql://noteful:noteful@localhost/noteful-test',
}