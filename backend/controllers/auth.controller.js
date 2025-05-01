import User from '../models/user.model.js';

// export const register = (req,res) => res.send("register");
// export const login = (req,res) => res.send("login");

// req es el request que viene del cliente
// res es la respuesta que se le va a enviar al cliente


export const register = async(req,res) => {
    // console.log(req.body);
    // res.send('registrando');
    const {email, password, username} = req.body;
    try {
        // crear un nuevo usuario
        const newUser = new User({
            username,
            email,
            password
        })
        // guardar el usuario en la base de datos
        await newUser.save();
        // enviar una respuesta al cliente
        res.send('registrando');
        console.log(email, password, username);
    } catch (error) {
        console.log(error);
    }
};

export const login = (req,res) => res.send("login");