import bcrypt from 'bcrypt';
import LoginUser from '../models/loginUserModel.js';

class AuthService {
    async login(username, password) {
        const user = await LoginUser.findOne({ where: { username } });

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return user;
    }
}

export default new AuthService();
