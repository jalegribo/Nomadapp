import UserService from '../services/UserService.js';
import courseService from '../services/CourseService.js';
class UserController {
    async getUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.body.id_usuario);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req, res) {
        try {                                
            const newUser = await UserService.createUser(req.body);  
            const idUser = newUser.id_usuario;     
            const newLogin = await UserService.createUserLogin({...req.body,id_usuario:idUser});        
            res.status(201).json([newLogin, newUser]);                        
        } catch (error) {
            res.status(500)
        }
    }

    async updateUser(req, res) {
        try {            
            const updatedUser = await UserService.updateUser(req.session.id,req.body);
            res.status(200).json({message: updatedUser});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await UserService.deleteUser(req.params.id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async addMyCourse(req, res) {
        try {
            const user = await UserService.getUserById(req.session.id);
            const course = await courseService.getCourseById(req.body.id_curso);
            if (user && course) {
                await UserService.addMyCourse(user, course);
                res.status(200).json({ message: 'Course added to user' });
            } else {
                res.status(404).json({ message: 'User or course not found' });
            }
        }catch (error) {
         
          res.status(500).json({ message: error.message });
        }
    }    
            
}
export default new UserController();