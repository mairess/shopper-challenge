function extractMimeType(base64String: string): string {
  const defaultMimeType = 'image/png';
  const match = base64String.match(/^data:(image\/\w+);base64,/);
  return match ? match[1] : defaultMimeType;
}

export default extractMimeType;