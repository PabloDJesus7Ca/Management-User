const pool = require('../config/database')

class Request {
	// GET /personas/:id — obtener una persona por su ID
	static obtenerPorId = async (req, res) => {
		try {
			const { id } = req.params
			const { rows } = await pool.query(
				'SELECT * FROM personas WHERE id = $1',
				[id]
			)
			if (rows.length === 0) {
				return res.status(404).json({ error: 'Persona no encontrada' })
			}
			res.json(rows[0])
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}

	// GET /personas — obtener todas const
	static obtenerTodas = async (req, res) => {
		try {
			const { rows } = await pool.query(
				'SELECT * FROM personas ORDER BY creado_en DESC'
			)
			res.json(rows)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}

	// GET /personas/buscar?nombre=Maria — búsqueda
	static buscarPorNombre = async (req, res) => {
		try {
			const { nombre } = req.query
			const { rows } = await pool.query(
				`SELECT * FROM personas WHERE nombre ILIKE $1 OR apellido ILIKE $1`,
				[`%${nombre}%`]
			)
			res.json(rows)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}
	// POST /personas — crear nueva persona
	static crearPersona = async (req, res) => {
		try {
			const { nombre, apellido, email, edad } = req.body
			if (!nombre || !apellido) {
				return res.status(400).json({ error: 'Nombre y apellido requeridos' })
			}
			const { rows } = await pool.query(
				`INSERT INTO personas (nombre,apellido,email,edad) VALUES ($1,$2,$3,$4) RETURNING *`,
				[nombre, apellido, email, edad]
			)
			res.status(201).json(rows[0])
		} catch (e) {
			if (e.code === '23505') {
				return res.status(400).json({ error: 'Email ya registrado' })
			}
			res.status(500).json({ error: e.message })
		}
	}
	// PUT /personas/:id — actualizar
	static actualizarPersona = async (req, res) => {
		try {
			const { id } = req.params
			const { nombre, apellido, email, edad } = req.body
			const { rows } = await pool.query(
				`UPDATE personas SET nombre=$1,apellido=$2,email=$3,edad=$4 WHERE id=$5 RETURNING *`,
				[nombre, apellido, email, edad, id]
			)
			if (!rows.length) {
				return res.status(404).json({ error: 'No encontrada' })
			}
			res.json(rows[0])
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}
	// DELETE /personas/:id — eliminar
	static eliminarPersona = async (req, res) => {
		try {
			const { id } = req.params
			const { rowCount } = await pool.query(
				'DELETE FROM personas WHERE id=$1',
				[id]
			)
			if (!rowCount) {
				return res.status(404).json({ error: 'No encontrada' })
			}
			res.json({ mensaje: 'Persona eliminada' })
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}
}

module.exports = Request
