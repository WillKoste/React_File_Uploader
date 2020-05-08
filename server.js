const express = require('express');
const fileUpload = require('express-fileupload');
const colors = require('colors');

const app = express();

app.use(fileUpload());

app.post('/upload', () => {
  if(req.files === null){
    return resizeBy.status(400).json({msg: 'No file uploaded'});
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err){
      console.error(err)
      return res.status(500).send(err);
    }

    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan.underline);
});