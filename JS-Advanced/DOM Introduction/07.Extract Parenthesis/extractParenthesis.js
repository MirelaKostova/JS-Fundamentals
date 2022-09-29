function extract(content) {
  const paraText = document.getElementById("content").textContent;
  const pattern = /\(([^*)]+)\)/g;
  const result = [];

  let match = pattern.exec(paraText);
  while (match) {
    result.push(match[1]);
    match = pattern.exec(paraText);
  }

  return result.join("; ");
}
