const Usuario = require('../models/User');

exports.agregarMascota = async (req, res) => {
    const { nombre, edad, raza } = req.body;
    const usuarioId = req.usuario.id;

    try {
        // Verificar si el usuario está logueado
        const usuario = await Usuario.findById(usuarioId);
        if (!usuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        // Agregar nueva mascota
        usuario.mascotas.push({ nombre, edad, raza });
        await usuario.save();

        res.json({ msg: 'Mascota añadida correctamente', usuario });
    } catch (err) {
        console.error('Error durante la adición de la mascota:', err.message);
        res.status(500).send('Error en el servidor');
    }
};
