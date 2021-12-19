const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/privacidad"],
    exact: true,
    component: "Privacy"
  },
  {
    path:["/terminos"],
    exact: true,
    component: "Terms"
  }
];

export default routes;
