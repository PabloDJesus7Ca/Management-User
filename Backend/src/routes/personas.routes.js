const router = require('express').Router()
const Request_User = require('../controller/personas.controller')

router.get('/', Request_User.obtenerTodas)
router.get('/buscar', Request_User.buscarPorNombre)
router.get('/:id', Request_User.obtenerPorId)

router.post('/', Request_User.crearPersona)
router.put('/:id', Request_User.actualizarPersona)
router.delete('/:id', Request_User.eliminarPersona)

module.exports = router
