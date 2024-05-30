import express from 'express'
import multer from 'multer'

const app = express()
app.disable('x-powered-by')
const PATH = process.env.INIT_CWD

const middlewareMulter = multer({
  limits: {
    fileSize: 1000000000
  },
  dest: PATH + '\\uploads'
})

app.post('/Upload', middlewareMulter.single('file'), (req, res) => {
  console.log(req.file)

  res.statusCode(200)
})

app.get('/Upload', (req, res) => {
  res.json({ dd: 'df' })
})

app.listen(3000, () => {
  console.log('listener in port 3000')
})
