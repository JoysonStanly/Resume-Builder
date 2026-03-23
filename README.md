# 📄 Resume Builder

A modern, full-stack web application for creating, editing, and sharing professional resumes with AI-powered enhancements and multiple customizable templates.

![React](https://img.shields.io/badge/React-19.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-9.3-brightgreen)
![License](https://img.shields.io/badge/License-ISC-yellow)

## ✨ Features

### 🎨 **Resume Templates**
- **Classic Template** - Professional and timeless design
- **Minimal Template** - Clean and elegant layout
- **Minimal Image Template** - Showcases profile pictures
- **Modern Template** - Contemporary and stylish format

### ✏️ **Resume Builder**
- Complete resume editing interface with multiple sections:
  - Personal Information (with profile image upload)
  - Professional Summary
  - Work Experience
  - Education
  - Projects
  - Skills
- Real-time resume preview
- Customizable accent colors
- Auto-save functionality

### 🤖 **AI-Powered Features**
- **Enhance Professional Summary** - AI-generated summaries powered by OpenAI
- **Enhance Job Descriptions** - Improve work experience descriptions
- **Resume Upload** - Extract and import data from PDF resumes
- PDF-to-text conversion for resume analysis

### 🔐 **User Authentication**
- Secure user registration and login
- JWT token-based authentication
- Protected routes and API endpoints
- Password encryption with bcrypt

### 🌐 **Resume Sharing**
- Public resume links for sharing
- Privacy controls (public/private toggle)
- View publicly shared resumes without authentication

### 📸 **Media Management**
- Image upload support via ImageKit
- Profile image integration
- Secure file handling with multer

### 🎯 **Additional Features**
- Multiple resume creation per user
- Resume templates switching
- Color customization
- Responsive design (mobile-friendly)
- Real-time form validation
- Toast notifications

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI library
- **Vite 7.3** - Fast build tool
- **Redux Toolkit** - State management
- **Tailwind CSS 4.2** - Styling
- **React Router DOM 7.13** - Client-side routing
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **React Hot Toast** - Notifications

### Backend
- **Node.js / Express 5.2** - Server framework
- **MongoDB 9.3** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **OpenAI** - AI enhancements
- **ImageKit** - Image hosting
- **Multer** - File upload handling
- **CORS** - Cross-origin requests
- **Dotenv** - Environment variables

---

## 📋 Prerequisites

- **Node.js** v16 or higher
- **MongoDB** (local or cloud connection)
- **Git** for version control
- OpenAI API key (for AI features)
- ImageKit credentials (for image upload)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/JoysonStanly/Resume-Builder.git
cd Resume-Builder
```

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
CLIENT_URL=http://localhost:5173
EOF

# Start the server
npm run server    # with nodemon (development)
# or
npm start         # production mode
```

### 3. Frontend Setup

```bash
cd client

# Install dependencies
npm install

# Create .env file
cat > .env.local << EOF
VITE_BASE_URL=http://localhost:3000
EOF

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
Resume-Builder/
├── client/                    # React frontend
│   ├── src/
│   │   ├── assets/           # Templates and assets
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components (Dashboard, ResumeBuilder, etc.)
│   │   ├── app/              # Redux store and slices
│   │   ├── configs/          # API configuration
│   │   └── utils/            # Utility functions
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Express backend
│   ├── models/              # MongoDB schemas (Resume, User)
│   ├── routes/              # API routes (users, resumes, AI)
│   ├── controllers/         # Business logic
│   ├── middlewares/         # Auth middleware
│   ├── configs/             # DB, AI, ImageKit configs
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

### User Routes (`/api/users`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /profile` - Get user profile

### Resume Routes (`/api/resumes`)
- `POST /` - Create new resume
- `GET /` - Get all user resumes
- `GET /:resumeId` - Get specific resume
- `PUT /:resumeId` - Update resume
- `DELETE /:resumeId` - Delete resume
- `GET /public/:resumeId` - Get public resume (no auth required)
- `PATCH /:resumeId/visibility` - Toggle resume visibility

### AI Routes (`/api/ai`)
- `POST /enhance-pro-sum` - Enhance professional summary
- `POST /enhance-job-desc` - Enhance job description
- `POST /upload-resume` - Upload & parse resume PDF

---

## 🔒 Authentication

The application uses **JWT (JSON Web Tokens)** for secure authentication:

1. User registers/logs in
2. Backend generates JWT token
3. Token stored in Redux state (frontend)
4. Token sent in `Authorization` header for protected requests
5. Middleware verifies token before processing

---

## 📝 Environment Variables

### Server (.env)
```
PORT=3000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
JWT_SECRET=your_super_secret_jwt_key
OPENAI_API_KEY=sk-...
IMAGEKIT_PRIVATE_KEY=private_...
IMAGEKIT_PUBLIC_KEY=public_...
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/...
CLIENT_URL=http://localhost:5173
```

### Client (.env.local)
```
VITE_BASE_URL=http://localhost:3000
```

---

## 🎯 Usage Guide

### Creating a Resume
1. Sign up or log in
2. Click "Create New Resume"
3. Fill in your information across different sections
4. Choose a template from the template selector
5. Customize the accent color
6. Use AI features to enhance your content
7. Click "Save" to persist changes

### Using AI Features
- **Enhance Professional Summary**: Click the sparkle icon in the summary section
- **Enhance Job Description**: Click the sparkle icon for each experience entry
- **Upload Resume**: Use the AI section to upload a PDF and auto-populate fields

### Sharing Your Resume
1. Go to Resume Settings
2. Toggle the visibility to "Public"
3. Copy and share the public link
4. Others can view your resume without logging in

---

## 🐛 Known Issues & Fixes

### Fixed Issues
- ✅ Resume.findByIdAndUpdate() → Resume.findOneAndUpdate() (Mongoose compatibility)
- ✅ FormData Content-Type header handling
- ✅ JSON POST for visibility changes
- ✅ Missing API endpoint leading slashes
- ✅ Resume validation and null checks
- ✅ Error logging for debugging

---

## 📦 Build & Deployment

### Build Frontend
```bash
cd client
npm run build
```
Output: `dist/` folder ready for deployment

### Production Server
```bash
cd server
npm start
```

### Deployment Platforms
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, AWS EC2, DigitalOcean
- **Database**: MongoDB Atlas
- **Storage**: ImageKit

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Joyson Stanly**

- GitHub: [@JoysonStanly](https://github.com/JoysonStanly)
- Repository: [Resume-Builder](https://github.com/JoysonStanly/Resume-Builder)

---

## 🙏 Acknowledgements

- OpenAI for AI-powered text enhancements
- ImageKit for image hosting
- MongoDB for database solutions
- React and Vite communities

---

## 📞 Support

If you encounter issues or have questions:

1. Check existing issues on GitHub
2. Create a new issue with detailed information
3. Include error logs and steps to reproduce
4. Please be descriptive and specific

---

## 🚀 Future Enhancements

- [ ] Download resume as PDF
- [ ] Resume version history
- [ ] Collaboration features
- [ ] More resume templates
- [ ] Mobile app
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Social media integration

---

**Made with ❤️ by Joyson Stanly**
