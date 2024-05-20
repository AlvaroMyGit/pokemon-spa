import routes from '/js/routes.js';

async function launchController(controllerName) {
  try {
    const module = await import(`/js/controller/${controllerName}.js`);
    console.log(`Launching controller: ${controllerName}`); // Debug log
    module.default.init();
  } catch (err) {
    console.error(err);
  }
}

function setCurrentRoute({ path, controller }) {
  routes.currentPath.path = path;
  routes.currentPath.controller = controller;
}

export function navigate(path) {
  if (path === routes.currentPath.path) {
    return;
  }

  const routesKey = Object.keys(routes).find((key) => {
    const routePath = routes[key].path.replace(':name', '([a-zA-Z]+)');
    const regex = new RegExp(`^${routePath}$`);
    console.log(path + " Estou dentro do setCurrentRoute");
    return regex.test(path);
  });

  let route = routes[routesKey];

  if (!route) {
    route = routes.home;
    window.location.hash = routes.home.path;
    console.log(window.location.hash);
  }

  console.log(`Navigating to: ${path}`); // Debug log
  setCurrentRoute(route);
  launchController(route.controller);
}

function getPath(urlStr) {
  return new URL(urlStr).hash.slice(1);
}

function init() {
  window.location.hash = window.location.hash || routes.home.path;
  navigate(getPath(window.location.href));

  window.addEventListener('hashchange', function (event) {
    const path = getPath(event.newURL);
    console.log(`Hash changed to: ${path}`); // Debug log
    navigate(path);
  });
}

export default { init };
