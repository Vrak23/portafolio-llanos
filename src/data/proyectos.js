import gestionCitas from '../assets/gestioncitas.png'
import logosoundvibe from '../assets/logosoundvibe.png'
import Escuela from '../assets/escuela.png'
import senatiLogo from '../assets/senatilogo.jpg'
import loginApp from '../assets/autenticacion.png'
import vendefacilLogo from '../assets/vendefacil-logo.png'

export const proyectos = [
    {
        id: 1,
        slug: 'gestion-citas',
        titulo: 'App Gestión Citas',
        descripcion: 'Aplicación web para gestionar citas, usuarios y registros de atención.',
        descripcionLarga: 'Un completo sistema web diseñado para clínicas o consultorios médicos. Permite gestionar de manera eficiente las citas de los pacientes, almacenar historiales de atención y administrar registros de usuarios con diferentes niveles de acceso. Cuenta con una interfaz intuitiva que simplifica el agendamiento y control diario.',
        funcionalidades: [
            'Gestión de pacientes, médicos y especialidades',
            'Agendamiento, cancelación y reprogramación en tiempo real',
            'Filtros de búsqueda avanzada e historial de atenciones',
            'Dashboard interactivo para control administrativo'
        ],
        imagen: gestionCitas,
        tecnologias: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/Vrak23/app-gestion-citas',
        demo: 'https://gestion-citas.free.nf/'
    },

    {
        id: 2,
        slug: 'soundvibe',
        titulo: 'SoundVibe',
        descripcion: 'Aplicación web para compra de artículos de música.',
        descripcionLarga: 'Plataforma de comercio electrónico dedicada a la venta de instrumentos musicales, equipos de audio y accesorios. Desarrollada con Laravel en el backend, proporciona un flujo de compra robusto, catálogo dinámico categorizado, carrito de compras interactivo y un panel de administración para el inventario.',
        funcionalidades: [
            'Catálogo dinámico de artículos con filtros de marca y categoría',
            'Carrito de compras interactivo con actualización automática',
            'Panel administrativo completo para la gestión de productos y stock',
            'Autenticación y registro seguro de clientes'
        ],
        imagen: logosoundvibe,
        tecnologias: ['Laravel', 'MySQL', 'JavaScript'],
        github: 'https://github.com/Vrak23/Proyecto-musica',
        demo: 'https://soundvibe.great-site.net'
    },

    {
        id: 3,
        slug: 'app-matricula',
        titulo: 'App Matrícula',
        descripcion: 'Sistema con login y dashboard para administrar alumnos, cursos, citas y profesores.',
        descripcionLarga: 'Sistema académico completo orientado a instituciones educativas. Permite realizar matrículas de estudiantes de forma virtual, asignación de cursos, gestión de docentes y visualización de reportes académicos a través de un panel de control intuitivo.',
        funcionalidades: [
            'Matrícula de alumnos y asignación automática de aulas',
            'Gestión de docentes y vinculación con sus respectivos cursos',
            'Dashboard administrativo con estadísticas globales en tiempo real',
            'Generación y exportación de reportes académicos en formato PDF'
        ],
        imagen: Escuela,
        tecnologias: ['JavaScript', 'PHP', 'MySQL'],
        github: 'https://github.com/Vrak23/app-matricula',
        demo: 'https://matriculasystem.infinityfree.me/'
    },

    {
        id: 4,
        slug: 'portal-senati',
        titulo: 'Portal SENATI',
        descripcion: 'Portal web institucional para la gestión de alumnos, profesores y cursos.',
        descripcionLarga: 'Portal web institucional que conecta a alumnos y docentes. Facilita la gestión de cursos, visualización de horarios, registro de notas y comunicación interna. La integración de React con Laravel asegura una carga rápida de datos y una experiencia fluida.',
        funcionalidades: [
            'Portal dedicado al alumno para consultar asignaturas y asistencia',
            'Panel docente para registro ágil de calificaciones e incidencias',
            'Horarios interactivos adaptados por carrera y ciclo académico',
            'Base de datos centralizada y segura de la comunidad educativa'
        ],
        imagen: senatiLogo,
        tecnologias: ['React', 'Laravel', 'MySQL'],
        github: 'https://github.com/Vrak23/portal-senati',
        demo: 'https://portal-senati.vercel.app/'
    },

    {
        id: 5,
        slug: 'login-app',
        titulo: 'Login App',
        descripcion: 'Login con autenticación y dashboard para administrar usuarios, roles y permisos.',
        descripcionLarga: 'Módulo de autenticación seguro y reutilizable con sistema de gestión de roles y permisos (RBAC). Permite registrar usuarios, verificar credenciales mediante tokens y controlar el acceso a diferentes vistas del sistema basado en los privilegios asignados.',
        funcionalidades: [
            'Autenticación robusta y segura mediante tokens JWT',
            'Control de accesos basado en Roles y Permisos (RBAC)',
            'Perfil de usuario interactivo y actualizable',
            'Registro y auditoría de accesos al sistema'
        ],
        imagen: loginApp,
        tecnologias: ['React', 'Laravel', 'MySQL'],
        github: 'https://github.com/Vrak23/loginApp',
        demo: '#'
    },

    {
        id: 6,
        slug: 'vendefacil',
        titulo: 'VendeFacil',
        descripcion: 'Aplicación web para compra de productos tecnológicos.',
        descripcionLarga: 'Tienda virtual optimizada para la comercialización de productos tecnológicos de última generación. Posee una interfaz moderna, buscador predictivo, visualización detallada de especificaciones técnicas y un proceso de checkout fluido.',
        funcionalidades: [
            'Buscador inteligente con sugerencias de productos',
            'Filtros dinámicos por marcas y especificaciones de hardware',
            'Carrito interactivo con persistencia de datos mediante localStorage',
            'Diseño responsive adaptado a pantallas móviles, tabletas y computadoras'
        ],
        imagen: vendefacilLogo,
        tecnologias: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/Vrak23/vendefacil',
        demo: 'https://vendefacil-gold.vercel.app/'
    }
]