const http = require('http')
const url = require('url')
const querystring = require('querystring')

const PORT = process.argv[2]

// Check if PORT defined
if (!PORT) {
    console.log('usage: node e01.js <PORT>')
    process.exit(0)
}

// Execute HTTP Server
const server = http.createServer((req, res) => {
    const { query } = url.parse(req.url)

    if (query) {
        console.log('My request dump:')
        console.log(`GET /?${query}`)

        const queryObject = querystring.parse(query)
        for (const [key, value] of Object.entries(queryObject)) {
            console.log(`${key}: ${value}`)
        }

        res.write('done')
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})