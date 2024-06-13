import cursoModel from "../models/cursoModel.js";
import moduleModel from "../models/moduloModel.js";


class CourseService {
    async createCourse(course) {
        try{
            
            return await cursoModel.create({nombre_curso:course.nombre,descripcion:course.descripcion,puntuacion_curso:0.0,});
        }catch(error){
            console.log(error);
        }
    } 
    async getAllCourses() {
        try {
            const cursos = await cursoModel.findAll();
            const modulos = await moduleModel.findAll();
                
            const a = cursos.map(curso => {
                const modulosDelCurso = modulos.filter(modulo => modulo.id_curso === curso.id_curso);
                return {
                    ...curso.toJSON(),  // Convierte el objeto Sequelize a JSON
                    modulos: modulosDelCurso.map(modulo => modulo.toJSON())
                };
            });
            return a;
        } catch (error) {
            console.error('Error obteniendo cursos con módulos:', error);
        }
    }

    async getCourseById(id) {
        try {
            return await cursoModel.findByPk(id);            
        } catch (error) {
            console.log(error);            
        }
    }

    async updateCourse(course, id) {
        return await cursoModel.update(course, { where: { id_curso: id } });
    }

    async deleteCourse(id) {
        return await cursoModel.destroy({ where: { id_curso: id } });
    }
    async createModule(module) {
        
        return await moduleModel.create(module);
    }
    async getModulesByCourseId(id) {
        return await moduleModel.findAll({ where: { id_curso: id } });
    }
}

export default new CourseService();