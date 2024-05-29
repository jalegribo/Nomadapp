import db from '../config/Database.js';
import Rol from '../models/rolModel.js';
import Users from '../models/userModel.js';

class UserService {
    async getAllUsers() {
        return await Users.findAll();
    }

    async getUserById(id) {
        return await Users.findByPk(id);
    }

    async createUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await Users.create({ ...userData, password: hashedPassword });
        return newUser;
    }

    async updateUser(id, data) {
        return await Users.update(data, { where: { id_usuario: id } });
    }

    async deleteUser(id) {
        return await Users.destroy({ where: { id_usuario: id } });
    }
    async getAllRoles() {
        return await Rol.findAll();
    }
    async findOneRol(roleName) {
        try {
          const rol = await Rol.findOne({
            where: {
              nombre_rol: roleName,
            },
          });
          return rol.dataValues.nombre_rol;
        } catch (error) {          
        }
      }
}

export default new UserService();




