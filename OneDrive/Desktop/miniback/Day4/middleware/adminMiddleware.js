const admin = (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Access denied. Admin privileges required.' });
    }
    next();
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
};

module.exports = admin;
