import DB from "@database";

const allAvocados = async (req, res) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const lenght = allEntries.length;

  // res.status(200);
  // res.setHeader("Contend-type", " application/json");
  // res.end(JSON.stringify({ data: allEntries, lenght: lenght }));
  res.status(200).json({ data: allEntries, lenght: lenght });
};

export default allAvocados;
