import Vue from "vue";
import VueRouter from "vue-router";

// START:: IMPORTING MIDDLEWARE
// import auth from "../middleware/auth.js";
// END:: IMPORTING MIDDLEWARE

// START:: IMPORTING ROUTER COMPONENTS
import AppContentWrapper from "../pages/AppContentWrapper.vue";
import LandingOneHomePage from "../pages/landingOne/LandingOneHome.vue";
import LandingOneContent from "../pages/landingOne/LandingOneContent.vue";
import StartNowPage from "../pages/StartNow/StartNow.vue";
// END:: IMPORTING ROUTER COMPONENTS

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: AppContentWrapper,
    children: [
      // START::  LANDING ONE
      {
        path: "/",
        component: LandingOneHomePage,
        children: [
          {
            path: "/",
            name: "LandingOneContent",
            component: LandingOneContent,
          },
          {
            path: "start-now",
            component: StartNowPage,
          },
        ],
      },
      // END::  LANDING ONE
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
  routes,
});

// START:: MIDDLEWARE AND ROUTER GUARDS
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  } else if (localStorage.getItem("langlark_user_token")) {
    if (
      to.name == "LoginForm" ||
      to.name == "ResetPasswordPhoneNumberForm" ||
      to.name == "PhoneVerification" ||
      to.name == "ChangePhoneNumberForm" ||
      to.name == "ResetPasswordForm" ||
      to.name == "SelectRegisterationType" ||
      to.name == "RegisterFirstStepForm" ||
      to.name == "RegisterFirstStepForm" ||
      to.name == "RegisterSecondStepForm"
    ) {
      return next("/");
    } else {
      return next();
    }
  }
  return next();
});
// END:: MIDDLEWARE AND ROUTER GUARDS

export default router;
