import Users from "../models/UserModel.js";

// Middleware para verificar si un usuario está autenticado
export const verifyUser = async(req, res, next) => {

    // Comprobamos si no hay un ID de usuario en la sesión
    if (!req.session.userId){
        // Si no hay, devolvemos un mensaje de error 401 (No autorizado)
        return res.status(401).json({msg: "Por favor inicie sesión"})
    }

    // Buscamos al usuario en la base de datos usando su UUID almacenado en la sesión
    const user = await Users.findOne({
        where: {
            id_usuario: req.session.userId
        }
    });

    // Si el usuario no existe, devolvemos un mensaje de error 404 (No encontrado)
    if (!user) return res.status(404).json({msg: "Usuario no encontrado"});

    // Si el usuario existe, almacenamos su ID y rol en el objeto de solicitud (req)
    req.userId = user.id;
    req.rol = user.rol;
    //console.log("User ID set in    middleware:", req.userId);  // log para verificar asociacion

    // Llamamos a la siguiente función en la cadena de middlewares
    next();
}


// Middleware para dar permisos especiales solo a los administradores
export const adminOnly = async(req, res, next) => {

    // Buscamos al usuario en la base de datos usando su UUID almacenado en la sesión
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });

    // Si el usuario no existe, devolvemos un mensaje de error 404 (No encontrado)
    if (!user) return res.status(404).json({msg: "Usuario no encontrado"});

    // Si el rol del usuario no es "admin", devolvemos un mensaje de error 403 (Prohibido)
    if (user.rol !== "admin") return res.status(403).json({msg: "Acceso prohibido"});

    // Si el usuario es administrador, permitimos el acceso llamando a la siguiente función en la cadena de middlewares
    next();
}