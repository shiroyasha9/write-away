export default async function addNote(req, res) {
  const { title, description } = req.body;
  const note = await prisma.note.create({
    data: {
      title,
      description,
    },
  });
  res.json(note);
}
