function get(req, res) {
  res.status(200).json({ success: true });
}

function post(req, res) {
  res.status(200).json({ success: true });
}

module.exports = {
  post,
  get
};
