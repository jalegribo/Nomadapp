import AuthService from '../services/AuthService.js';

class AuthController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await AuthService.login(username, password);
            
            req.session.userId = user.id_usuario; // Guarda el ID del usuario en la sesión
            res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to logout' });
            }
            res.status(200).json({ message: 'Logout successful' });
        });
    }
}

export default new AuthController();