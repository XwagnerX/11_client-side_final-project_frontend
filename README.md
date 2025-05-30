# Book Collection Manager

A modern web application for managing your book collection, built with React and Vite.

## 🚀 Features

- 📚 Complete book management (CRUD)
- 🎨 Modern and responsive interface
- ⚡ Fast Refresh with Vite
- ✅ Automated tests
- 🔄 Continuous integration with GitHub Actions
- 🛡️ Validations and error handling
- 📱 Design adaptable to all devices

## 🛠️ Technologies

- React 19
- Vite 6
- Vitest + React Testing Library
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/XwagnerX/11_client-side_final-project_frontend.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```env
VITE_API_URL=http://your-api-url
```

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run test` - Run tests
- `npm run lint` - Run the linter

## 🧪 Testing

The project uses Vitest and React Testing Library for testing. Tests cover:

- Main components (BookCard, BookForm, BookList)
- User interactions
- State management
- API calls

To run the tests:
```bash
npm test
```

## 🔄 CI/CD

- Husky for git hooks
- lint-staged for code validation
- GitHub Actions for continuous integration
- Automatic deployment on Netlify

## 📦 Project Structure

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

## 🌐 Deployment

The application is deployed on Netlify and is accessible at: [Deployment URL]

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✨ Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Testing Library](https://testing-library.com/)
- [Netlify](https://www.netlify.com/)