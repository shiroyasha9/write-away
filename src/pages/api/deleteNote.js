export default async function deleteNote(req, res) {
  const { id } = req.body;
  const note = await prisma.note.delete({
    where: {
      id,
    },
  });
  res.json(note);
}
