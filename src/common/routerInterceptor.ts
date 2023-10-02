const routerInterceptor = async (to, from, next) => {
  if (to.path === '/login' || to.path === '/pre-login') {
    next();
  } else {
    // 在登陆页的时候会去加上 localStorage
    const userInfo = localStorage.getItem('TOILET_USERINFO');
    if (!userInfo && to.path !== '/pre-login') {
      next('/pre-login');
    } else {
      next();
    }
  }
};

export default routerInterceptor;
