const epxress = require('express')
const app = epxress()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router')

app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})