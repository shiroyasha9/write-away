export const isEditorEmpty = (text) =>
  text.replace(/<(.|\n)*?>/g, '').trim().length === 0;
