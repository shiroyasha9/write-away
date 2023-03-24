export default async function editNote(req, res) {
  const { title, description, id } = req.body;
  const note = await prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      description,
    },
  });
  res.json(note);
}
