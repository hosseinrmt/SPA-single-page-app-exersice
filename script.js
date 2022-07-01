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

// // 1.what view show to user based on Route ?
// function router() {
//   const routes = [
//     {
//       path: "/SPA/",
//       view: Dashboard,
//     },
//     {
//       path: "/products",
//       view: Products,
//     },
//     { path: "/posts", view: Posts },
//   ];

//   const potentialRoutes = routes.map((item) => {
//     return {
//       route: item,
//       isMatch: location.pathname === item.path,
//     };
//   });

//   let match = potentialRoutes.find((item) => item.isMatch);

//   if (!match) {
//     match = {
//       route: { path: "/not-found", view: () => console.log("not-found page") },
//       isMatch: true,
//     };
//   }

//   document.querySelector("#app").innerHTML = match.route.view();
// }

// // 2.push user to new url :
// function navigateTo(url) {
//   history.pushState(null, null, url);
//   router();
// }

// window.addEventListener("popstate", router);

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", (e) => {
//     if (e.target.hasAttribute("data-link")) {
//       e.preventDefault();
//       navigateTo(e.target.href);
//     }
//   });
//   router();
// });
