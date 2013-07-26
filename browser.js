function sync_http(path) {
  var req = new window.XMLHttpRequest();
  req.open('GET', path, false);
	req.send();
  if (req.status === 200) {
    return req.responseText;
  }
}

module.exports.readFileSync = sync_http;
