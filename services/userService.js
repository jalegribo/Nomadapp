import db from '../config/Database.js';
import Rol from '../models/rolModel.js';
import Users from '../models/userModel.js';
import curso from '../models/cursoModel.js';
import cursoUsuario from '../models/cursoUsuarioModel.js';
import LoginUser from '../models/loginUserModel.js';
import RolUsuario from '../models/rolUsuarioModel.js';
import bcrypt from 'bcrypt';

class UserService {
    async getAllUsers() {
        return await Users.findAll();
    }

    async getUserById(id) {
        return await Users.findByPk(id);
    }
    async getDnI(dni) {
        return await Users.findOne({ where: { dni: dni } });
    }
    async getPhone(telefono) {
        return await Users.findOne({ where: { telefono: telefono } });
    }
  
    async getUserByEmail(email) {      
    
      const user = await Users.findOne({ where: { email: email } });
      return user;
   
    }

    async createUser(userData) {
      try{        
        const newUser = await Users.create(userData);
        const rol = await Rol.findOne({ where: { nombre_rol: userData.rol } }); 
        const rol_usuario = await RolUsuario.create({id_usuario: newUser.id_usuario, id_rol: rol.id_rol})    
        return {newUser,rol_usuario}
      }catch(error){
        console.log(error);
      }      
    }    
    async createUserLogin(userData) {
      try{        
        const data={
          id_usuario:userData.id_usuario,
          username:userData.email,
          password:bcrypt.hashSync(userData.password, 10)
        }        
        const newLogin = await LoginUser.create(data);        
        return newLogin
      }catch(error){
        console.log(error);
      }      
    }
    async updateUser(id, data) {    
        const user = await Users.findOne({ where: { email :data.email } });
        
        try{
            if(user){
                await Users.update(data, {where: {id_usuario : user.id_usuario}});
                return "Usuario actualizado";
            }else{
                return "Usuario no encontrado";
            }        
        } catch (error) {
          console.error(error);
        }
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
    async addMyCourse(id_usuario,id_curso) {
      try{
        const course = await curso.findByPk(id_curso);
        const data={
          id_usuario:id_usuario,
          id_curso:id_curso,
          nombre_curso:course.nombre_curso
        }
        const newRelation = await cursoUsuario.create(data);        
        return newRelation
      }catch(error){
        console.log(error);
      }
    }
}

export default new UserService();




