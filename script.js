const redirectMap = {};

function relink() {
  const existingLink = document.getElementById("existingLink").value;
  const newLink = document.getElementById("newLink").value;

  if (!isValidURL(existingLink) || !isValidURL(newLink)) {
    alert("Invalid URL. Please enter valid URLs.");
    return;
  }

  redirectMap[newLink] = existingLink;
  alert("URLs have been linked successfully!");
}

function isValidURL(inputURL) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "([a-z0-9]+\\.)?([a-z0-9-]+)\\.[a-z]{2,}" + // domain
    "(\\/[a-zA-Z0-9-._~:\/?#[\\]@!$&'()*+,;=%]*)?" + // path
    "$", 
    "i"
  );
  return pattern.test(inputURL);
}

function golink() {
  const newURL = window.location.href;
  const existingLink = redirectMap[newURL];

  if (existingLink) {
    window.location.href = existingLink;
  } else {
    alert("This URL is not linked to any existing link.");
  }
}
