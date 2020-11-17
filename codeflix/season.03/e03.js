const http = require('http')
const fs = require('fs')

const PORT = process.argv[2]

// Check if PORT defined
if (!PORT) {
    console.log('usage: node e01.js <PORT>')
    process.exit(0)
}

// Execute HTTP Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    const content = fs.readFileSync('./pages/index.html')
    res.write(content)

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})