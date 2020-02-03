const Upload = () => import('@/views/upload');
const Platform = () => import('@/views/platform');
export default [
    {
      path: "/",
      redirect: '/upload'
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
      meta: {
        title: "图龙|上传"
      }
    },
    {
      path: "/platform",
      name: "Platform",
      component: Platform,
      meta: {
        title: "图龙|平台"
      }
    }
]