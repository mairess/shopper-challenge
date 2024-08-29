function base64ToBuffer(base64String: string): Buffer {
  const buffer = Buffer;
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  return buffer.from(base64Data, 'base64');
}

export default base64ToBuffer;