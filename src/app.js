import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/index.js";
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';
import session from "express-session"
import userRouter from './routes/userRouter.js'
import adminRouter from './routes/adminRouter.js'
import videoRouter from './routes/video.js'


dotenv.config()
const PORT = process.env.PORT;
const app = express()

 connectDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running");
        
    })
})
.catch(err=>{
    console.log("Mongodb error",err);
    
})
//Built in middlewares
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:"500MB"}))
app.use(express.static('public'))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
// //session
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:72*60*60*1000
    }
}))
 app.use((req,res,next)=>{
    res.set('cache-control','no-store')
    next()
})

//ejs settings
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use('/view-order', express.static(path.join(__dirname, 'public')));

app.use('/',userRouter)
app.use('/admin',adminRouter)
app.use('/', videoRouter)
// app.use('/dist/video', express.static(path.join(process.cwd(), 'uploads')));
// app.use('/admin',adminRouter)




