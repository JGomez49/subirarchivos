const express = require('express');
const app = express();
const multer = require('multer');
const mimetypes = require('mime-types');
const cors = require('cors');

app.use(cors());


const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        // cb('', file.originalname + '.' + mimetypes.extension(file.mimetype))    
        cb('', file.originalname)  
    }
});
    
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

const upload = multer({
    storage: storage
});

app.post('/files', upload.single('avatar') ,(req,res)=>{
    res.send('Subido con exito!');
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});