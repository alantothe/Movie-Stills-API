import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    const { UserName, EMail, Password } = req.body;
    let user;

    try {
        // check if user already exists
        user = await User.findOne({ EMail });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // hash 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        // create new user
        user = new User({
            UserName,
            EMail,
            Password: hashedPassword,
            Favorites: [],
        });

        await user.save();
        
        
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}
