require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoutes = require('./routes/user')
const studentClassRoutes = require('./routes/class')
const studentYearRoutes = require('./routes/studentYear')
const studentGroupRoutes = require('./routes/studentGroup')
const studentShiftRoutes = require('./routes/studentShift')
const feeCategoryRoutes = require('./routes/feeCategory')
const feeCategoryAmountRoutes = require('./routes/feeCategoryAmount')
const examTypeRoutes = require('./routes/examType')
const studentSubjectRoutes = require('./routes/studentSubject')
const studentSubjectAssignRoutes = require('./routes/studentSubjectAssign')
const designationRoutes = require('./routes/designation')

//DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("DB CONNECTED")
})

//Middleware
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(cors())

app.use('/api', userRoutes)
app.use('/api', studentClassRoutes)
app.use('/api', studentYearRoutes)
app.use('/api', studentGroupRoutes)
app.use('/api', studentShiftRoutes)
app.use('/api', feeCategoryRoutes)
app.use('/api', feeCategoryAmountRoutes)
app.use('/api', examTypeRoutes)
app.use('/api', studentSubjectRoutes)
app.use('/api', studentSubjectAssignRoutes)
app.use('/api', designationRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`App is running at ${port}`)
})