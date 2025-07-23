function generateObjectId() {
  const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4 bytes
  const random = 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
    Math.floor(Math.random() * 16).toString(16)
  ); // 8 + 8 = 16 hex chars (8 bytes)
  return timestamp + random; // 12 bytes total (24 hex chars)
}

// Example usage
// console.log(generateObjectId()); // e.g., 64e5cc174c0c1b8f38ae0c89

export default generateObjectId;