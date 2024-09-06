export const readData = (req, res) => {
  res.send("Get The Movie");
};
export const createData = (req, res) => {
  //Create the Movie
  //id,tittle,desc
  console.log(req.body);
  return res.json(req.body);
};
export const updateData = (req, res) => {
  res.send("Update Movie");
};
export const deleteData = (req, res) => {
  res.send("Delete Movie");
};
