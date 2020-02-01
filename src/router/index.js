const Home = () => import('@/views/Home');
export default [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "图刀|首页"
      }
    }
]