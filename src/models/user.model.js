import mongoose from "mongoose";

// Diseñar Esquema (Que se va a guardar)

const userSchema = moongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    
})

// Crea una clase de objetos "USER"; (Interactuar con la base de datos)
export default mongoose.model('User', userSchema);