const express = require('express');
const os = require('os');
const app=express();
const ejs = require('ejs');
const networkInterfaces = os.networkInterfaces();
const ipAddresses = [];
const ip=ipAddresses[2];

Object.keys(networkInterfaces).forEach(interfaceName => {
  const interfaces = networkInterfaces[interfaceName];
  interfaces.forEach(interfaceInfo => {
    if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
      ipAddresses.push(interfaceInfo.address);
    }
  });
});

console.log(`Server IP addresses: ${ipAddresses[2]}`);

const fs = require('fs');
const path = require('path');
const multer = require('multer');



app.use(express.static(path.join(__dirname, 'public')));
// Set up storage engine

const storage = multer.diskStorage({
  destination: './uploads/',
  
  filename: function(req, file, cb) {
    cb(null, path.basename(file.originalname).split('.').slice(0, -1).join('.') + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  

}).single('file');

// Check file type


// Route for file upload
app.get("/upload", (req, res) => {
  res.sendFile(__dirname + '/public/upload.html');
});
app.post('/upload', function(req, res) {
  
  upload(req, res, function(err) {
    if (err) {
      res.send(err);
    } else {
      
      console.log(req.file);
      res.sendFile(__dirname + '/public/uploaded.html');
    }
  });
});

const directoryPath = path.join(__dirname, 'uploads');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
// Route to display a list of files and download links
app.get('/', function(req, res) {
  const uploadDir = path.join(__dirname, 'uploads');
  fs.readdir(uploadDir, async (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    const fileDetails = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(uploadDir, file);
        const stats = await fs.promises.stat(filePath);
        return {
          name: file,
          path: filePath,
          size: formatFileSize(stats.size),
          type: path.extname(filePath).substring(1),
        };
      })
      
    );
    
    res.render('index', { fileDetails });

  });
});

// Route to download a file
app.get('/download', (req, res) => {
  const filePath = decodeURIComponent(req.query.file);
  const fileName = path.basename(filePath);
  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  fileStream.pipe(res);
});




app.listen(3000,ip, ()=>{
  console.log(`server running at http://${ipAddresses[2]}:3000/`);
});

function formatFileSize(sizeInBytes) {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (sizeInBytes < KB) {
    return sizeInBytes + ' B';
  } else if (sizeInBytes < MB) {
    return (sizeInBytes / KB).toFixed(2) + ' KB';
  } else if (sizeInBytes < GB) {
    return (sizeInBytes / MB).toFixed(2) + ' MB';
  } else {
    return (sizeInBytes / GB).toFixed(2) + ' GB';
  }
}