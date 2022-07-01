import Dashboard from "./pages/Dashboard.js";
import Products from "./pages/Products.js";
import Posts from "./pages/Posts.js";

function router() {
  const routes = [
    { path: "/SPA/", view: Dashboard },
    { path: "/products", view: Products },
    { path: "/posts", view: Posts },
  ];

  const potentialRoutes = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  const matchPath = potentialRoutes.find((route) => route.isMatch);

  const app = (document.querySelector("#app").innerHTML =
    matchPath.route.view());
}

function navigateToURL(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateToURL(e.target.href);
    }
  });
  router();
});
