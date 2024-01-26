// Importe Bootstrap JavaScript
import 'bootstrap';
import './style/index.scss'; // Attention ici, il faut bien mettre l'extension `.scss`

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne l'élément avec l'ID "alert-container" (ou tout autre sélecteur approprié)
  const alertContainer = document.getElementById('alert-container');
  const funContainer = document.getElementById('fun-alert')
  // Crée une alerte Bootstrap
  const bootstrapAlert = new bootstrap.Alert(alertContainer);
  const bootstrapFunAlert = new bootstrap.Alert(funContainer);
});
