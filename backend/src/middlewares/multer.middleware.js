import multer from "multer";


const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './public/temp/profiles'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const profileUpload = multer({ 
  storage: profileStorage, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only images are allowed"), false);
  }
});

const resourceStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './public/temp/resources'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const resourceUpload = multer({
  storage: resourceStorage, // similar storage setup
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["application/pdf", "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (allowedTypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only PDF/DOC/DOCX allowed"), false);
  }
});
 
 
export {profileUpload,resourceUpload}