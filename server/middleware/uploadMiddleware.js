const multer = require('multer');

// Define storage for the uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let ext =path.extname(file.originalname)
    cb(null,Date.now()+ext);
  }
});

// Initialize Multer with the specified storage options
const upload = multer({ 
  storage: storage ,
  fileFilter: function(req,file,callback){
    if(
      file.mimetype =="image/png" ||
      file.mimetype =="image/jpg"
    ){
      callback(null, true);
    }
    else{
      console.log('only jpg and png are supported in the database');
      callback(null,false);
    }
  },
  limits:{
    fileSize: 1020*1024*2
  }
});

module.exports = upload;
