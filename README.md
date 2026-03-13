# CSE341 - Professional Portfolio API

A full-stack web application that displays professional portfolio information through a REST API backend and a responsive frontend.

## Project Structure

```
cse341/
├── backend/                 # Node.js/Express API server
│   ├── app.js              # Main application entry point
│   ├── controllers/        # Route controllers
│   │   └── professional.js # Professional data controller
│   ├── db/                 # Database connection
│   │   └── connect.js      # MongoDB connection setup
│   ├── routes/             # API routes
│   │   └── professional.js # Professional data routes
│   └── package.json        # Backend dependencies
└── frontend/               # Static web frontend
    ├── index.html          # Main HTML page
    ├── script.js           # JavaScript functionality
    └── style.css           # Styling
```

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing
- **Dotenv** - Environment variable management
- **Nodemon** - Development auto-restart

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - ES6+ features
- **Font Awesome** - Icon library

## Features

- **Professional Portfolio Display**: Shows professional information including name, image, descriptions, and social links
- **RESTful API**: Clean API endpoints for data retrieval
- **Responsive Design**: Mobile-friendly interface
- **Dynamic Content**: Frontend fetches data from backend API
- **Base64 Image Support**: Images stored and displayed as base64 encoded data

## API Endpoints

### GET /professional
Returns professional portfolio data including:
- Professional name
- Base64 encoded image
- Primary description
- Work descriptions
- Social media links (LinkedIn, GitHub)
- Contact information

**Example Response:**
```json
{
  "professionalName": "John Doe",
  "base64Image": "iVBORw0KGgoAAAANSUhEUgAA...",
  "primaryDescription": "Software Developer",
  "workDescription1": "Description of work experience...",
  "workDescription2": "Additional work details...",
  "linkTitleText": "Connect with me",
  "linkedInLink": {
    "text": "LinkedIn",
    "link": "https://linkedin.com/in/johndoe"
  },
  "githubLink": {
    "text": "GitHub", 
    "link": "https://github.com/johndoe"
  }
}
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

4. Start the development server:
```bash
npm start
```

The backend server will run on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Open `index.html` in a web browser or serve it with a simple HTTP server:
```bash
# Using Python 3
python -m http.server 3000

# Using Node.js http-server
npx http-server -p 3000
```

The frontend will be available at `http://localhost:3000`

## Database Setup

1. Ensure MongoDB is running on your system
2. Create a database named `portfolio`
3. Create a collection named `professional`
4. Insert a document with the professional data structure shown in the API example above

## Development

### Running the Application

1. Start the MongoDB service
2. Start the backend server (`npm start` in backend directory)
3. Open the frontend in a browser or serve it with an HTTP server

### Project Scripts

- `npm start` - Start the backend server with nodemon
- `npm test` - Placeholder for tests (currently shows error message)

## Configuration

- **Port**: Backend runs on port 8080 by default (configurable via PORT environment variable)
- **Database**: MongoDB connection configured via MONGODB_URI environment variable
- **CORS**: Enabled for all origins in development

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License - See package.json for details

## Author

Pedro A - Full Stack Developer
