import dotenv from "dotenv";
import { app } from './app.js';

dotenv.config({path: '/.env'});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and ready to accept requests.
        Visit http://localhost:${PORT} to access the server.`);
});
