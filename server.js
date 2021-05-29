// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
// 	console.log(req.url)

// 	const publicPath = './public'

// 	let body = null
// 	try {
// 		body = fs.readFileSync(`${publicPath}${req.url}`)
// 	} catch (e) {
// 		console.log(e)
// 		body = fs.readFileSync(`${publicPath}/shop.html`)
// 	}

// 	res.end(body)
// })

// const port = process.env.PORT || 3000
// server.listen(port)

// console.log(`Server started on port ${port}!`)

const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')
const { json } = require('body-parser')

app.use(express.static('./public'))
app.use(bodyParser.json())

app.listen(3000, () => {
	console.log('Server started!')
})

app.get('/itemslist/:page', (req, res) => {
	const page = req.params.page
	fs.readFile(`./public/database/database${page}.json`, 'utf8', (err, data) => {
		console.log(err)
		res.send(data)
	})
})
