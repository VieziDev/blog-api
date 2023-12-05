import express from 'express';
import connectDatabase from './database/database'


const app = express();

connectDatabase();

// Middlewares
app.use(express.json());



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




export default app;
