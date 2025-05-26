import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage({ open, onClose }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit(data => {
        console.log(data);
        signin(data);
    });

    if (!open) return null;

    return (
        // Overlay del modal: Posicionamiento fijo, ocupa toda la pantalla, fondo semitransparente, centrado.
        // Los estilos de 'flex', 'items-center', 'justify-center', 'h-[calc(100vh-100px)]' ya son de Tailwind.
        // Aquí agregamos 'fixed', 'inset-0', 'bg-black/40', y 'z-50' para la superposición estructural.
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={onClose}
        >
            {/* Contenedor del modal: Asegura que el clic dentro del modal no cierre el mismo.
                Los estilos de 'bg-zinc-800', 'max-w-md', 'w-full', 'p-10', 'rounded-md' ya son de Tailwind y controlan la apariencia.
                'relative' es estructural para el botón de cierre.
            */}
            <div
                className="bg-zinc-800 max-w-md w-full p-10 rounded-md relative"
                onClick={e => e.stopPropagation()}
            >
                {
                    signinErrors.map((error, i) => (
                        <div className="bg-red-500 text-white p-2 rounded-md my-2 text-center" key={i}>
                            {error}
                        </div>
                    ))
                }
                {/* Botón de cierre: Posicionamiento absoluto y estilos de apariencia. */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-white text-2xl font-bold cursor-pointer bg-transparent border-none p-0"
                >
                    ×
                </button>
                <h1 className="text-2xl font-bold text-white mb-4">Login</h1>

                <form onSubmit={onSubmit}>
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                    />
                    {
                        errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                Email is required
                            </p>
                        )
                    }
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                    />
                    {
                        errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                Password is required
                            </p>
                        )
                    }
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 transition duration-200">
                        Login
                    </button>
                </form>

                <p className="text-white text-sm mt-4 text-center">
                    ¿Aún no tienes una cuenta? <a href="#" className="text-blue-400 hover:underline">Regístrate aquí</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;