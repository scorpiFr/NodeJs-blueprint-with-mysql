// middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error(err); // Log de l’erreur côté serveur
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erreur interne du serveur";
  res.status(statusCode).json({ erreur: message });
}

module.exports = errorHandler;
