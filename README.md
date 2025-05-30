# Book Collection Manager

Una aplicación web moderna para gestionar tu colección de libros, construida con React y Vite.

## 🚀 Características

- 📚 Gestión completa de libros (CRUD)
- 🎨 Interfaz moderna y responsive
- ⚡ Fast Refresh con Vite
- ✅ Tests automatizados
- 🔄 Integración continua con GitHub Actions
- 🛡️ Validaciones y manejo de errores
- 📱 Diseño adaptable a todos los dispositivos

## 🛠️ Tecnologías

- React 19
- Vite 6
- Vitest + React Testing Library
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/XwagnerX/11_client-side_final-project_frontend.git
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=http://tu-api-url
```

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run test` - Ejecuta los tests
- `npm run lint` - Ejecuta el linter

## 🧪 Testing

El proyecto utiliza Vitest y React Testing Library para testing. Los tests cubren:

- Componentes principales (BookCard, BookForm, BookList)
- Interacciones de usuario
- Manejo de estados
- Llamadas a la API

Para ejecutar los tests:
```bash
npm test
```

## 🔄 CI/CD

- Husky para git hooks
- lint-staged para validación de código
- GitHub Actions para integración continua
- Despliegue automático en Netlify

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── BookCard/
│   ├── BookForm/
│   └── BookList/
├── test/
│   └── setup.js
├── App.jsx
└── main.jsx
```

## 🌐 Despliegue

La aplicación está desplegada en Netlify y es accesible en: [URL del despliegue]

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## ✨ Agradecimientos

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Testing Library](https://testing-library.com/)
- [Netlify](https://www.netlify.com/)
