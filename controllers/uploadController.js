const postUpload = (req, res) => {
  res.send(`/${req.file.path}`);
};

export { postUpload };
 