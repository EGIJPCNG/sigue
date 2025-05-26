import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        // Contenedor principal que centra el contenido en la página
        <div className="h-screen flex flex-col items-center justify-center py-10">
            {/* Título de la página, fuera del contenedor de los formularios */}
            <h1 className="text-4xl font-bold text-white mb-8">Panel De Administrador (Registro)</h1>

            {/* Div contenedor para el formulario de registro y posibles componentes adyacentes */}
            <div className="flex gap-8 items-start">
                {/* Formulario de registro */}
                <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Registrarse</h2>
                    {
                        registerErrors.map((error, i) => (
                            <div className="bg-red-500 text-white p-2 rounded-md my-2 text-center" key={i}>
                                {error}
                            </div>
                        ))
                    }
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            {...register("username", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nombre de usuario"
                        />
                        {
                            errors.username && (
                                <p className="text-red-500 text-sm mt-1">
                                    El nombre de usuario es requerido
                                </p>
                            )
                        }
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                        />
                        {
                            errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    El email es requerido
                                </p>
                            )
                        }
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Contraseña"
                        />
                        {
                            errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    La contraseña es requerida
                                </p>
                            )
                        }
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 transition duration-200"
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
                <div className="bg-gray-700 max-w-md w-full p-10 rounded-md shadow-lg text-white">
                    <h2 className="text-xl font-bold mb-4">Otro componente aquí</h2>
                    <p>Este es un espacio para otro formulario o información.</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;