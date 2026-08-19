(function () {
  var LOGO_URL = "https://tuia-fceia-unr.github.io/fdcd/_static/fdcd_logo.png";

  function fix(img) {
    if (img.dataset.fdcdFixed) return;
    img.dataset.fdcdFixed = "1";
    img.onload = function () {
      img.style.opacity = "1";
    };
    img.src = LOGO_URL;
  }

  // Si el logo ya está en el DOM cuando corre el script (caso más
  // común), se corrige de inmediato sin esperar a que termine
  // de cargar el resto de la página.
  document.querySelectorAll("img.logo.logo-img").forEach(fix);

  // Por si el script corre antes de que el sidebar se haya
  // insertado todavía: se lo espera con un observer y se corrige
  // apenas aparece, en vez de esperar a DOMContentLoaded.
  var observer = new MutationObserver(function () {
    var img = document.querySelector("img.logo.logo-img:not([data-fdcd-fixed])");
    if (img) {
      fix(img);
      observer.disconnect();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();