import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './router/book_route.js'
import userRoute from './router/user.route.js'

import cors from 'cors'
const app =express()
dotenv.config();
const port = process.env.PORT|| 4000


// Connect to mongodb
const db=process.env.MongoDbURI;
try {
    mongoose.connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log('Connected to database')
} catch (error) {
    console.log('error',error)
}
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    res.locals.currUser = req.user;
    next();
  });
// defining routes
app.use('/book',bookRoute)
app.use('/user',userRoute)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})