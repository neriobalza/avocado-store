import DB from "@database";

const avocadoById = async (req, res) => {
  const db = new DB();
  const id = req.query.id;
  const entry = await db.getById(id);

  if (!entry) {
    res.status(404).send("Not Found");
  }

  // res.status(200);
  // res.end(JSON.stringify({ data: entry }));
  res.status(200).json(entry);
};

export default avocadoById;
