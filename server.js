const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const multer = require('multer');
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')));

// Route to render the index.ejs page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// Route to render the account.ejs page
app.get('/account', (req, res) => {
    res.render('pages/account');
});

// Route to render the account.ejs page
app.get('/gallery', (req, res) => {
  res.render('pages/gallery');
});

// Route to render the account.ejs page
app.get('/posts', (req, res) => {
  res.render('pages/posts');
});

// Route to render the account.ejs page
app.get('/badges', (req, res) => {
  res.render('pages/badges');
});

// Route to render the upload.ejs page
app.get('/upload', (req, res) => {
    res.render('pages/upload');
});

// Route to render the upload.ejs page
app.get('/data', (req, res) => {
  res.render('pages/data');
});

// Multer configuration for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img'); // Destination folder for uploaded images
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, uniqueSuffix + fileExtension);
    }
});

// Initialize multer
const upload = multer({ storage });

// Route to handle image upload (no database, just saving the file)
app.post('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // Image successfully uploaded to 'public/img' folder
    res.send(`Image uploaded successfully: <a href="/img/${req.file.filename}" target="_blank">View Image</a>`);
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
