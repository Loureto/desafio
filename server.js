import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use(router)

server.listen(3001, () => {
  console.log('JSON Server está rodando na porta 3001')
})
