
const multer = require("multer");

const path = require("path");


// STORAGE CONFIG
const storage = multer.diskStorage({

  destination: function (
    req,
    file,
    cb
  ) {

    cb(null, "uploads/");
  },

  filename: function (
    req,
    file,
    cb
  ) {

    const uniqueName =
      Date.now() +
      "-" +
      file.originalname.replace(/\s+/g, "-");

    cb(null, uniqueName);
  },
});


// FILE FILTER
const fileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    ".pdf",
    ".docx",
  ];

  const ext =
    path.extname(
      file.originalname
    ).toLowerCase();


  if (
    allowedTypes.includes(ext)
  ) {

    cb(null, true);

  } else {

    cb(
      new Error(
        "Only PDF and DOCX files are allowed"
      ),
      false
    );
  }
};


// MULTER INSTANCE
const upload = multer({

  storage,

  fileFilter,
});


module.exports = upload;
