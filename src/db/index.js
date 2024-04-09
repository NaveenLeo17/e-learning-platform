import postgres from "postgres"
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

const connectDB = async () => {
    try {
        const sql = postgres({
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            username: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            port: process.env.PORT,
            ssl: 'require',
            connection: {
                options: `project=${process.env.ENDPOINT_ID}`,
            },
        });
        console.log("\n PostgreSQL connected !!");
    }
    catch (error) {
        console.log("PostgreSQL connection error", error);
        process.exit(1);
    }
}

export default connectDB