const http = require('http')

const PORT = process.argv[2]

// Check if PORT defined
if (!PORT) {
    console.log('usage: node e01.js <PORT>')
    process.exit(0)
}

// Execute HTTP Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    if (req.method === 'GET') {
        res.write('<h1> Hello World!</h1>')
    } else if (req.method === 'POST') {
        res.write('Heisenberg')
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})