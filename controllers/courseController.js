import CourseService from '../services/courseService.js';

class courseController{
    async getCourses(req, res) {
        try {
            const courses = await CourseService.getAllCourses();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getCourseById(req, res) {
        try {
            const course = await CourseService.getCourseById(req.body.id_course);
            if (course) {
                res.json(course);
            } else {
                res.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createCourse(req, res) {
        try {                            
            const newCourse = await CourseService.createCourse(req.body);  
            res.status(201).json(newCourse);                                    
        } catch (error) {
            res.status(500)
        }
    }
    async deleteCourse(req, res) {
        try {
            await CourseService.deleteCourse(req.body.id_course);
            res.status(204).json("curso eliminado");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createModule(req, res) {
        try {
            const newModule = await CourseService.createModule(req.body);
            res.status(201).json(newModule);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default new courseController();