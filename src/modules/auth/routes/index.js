import ForgetPassword from "../view/ForgetPassword";
import Register from "../view/Register";
import Login from "../Login";

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: ForgetPassword
  },
  {
    path: "register",
    name: "Register",
    meta: "Register ",
    component: Register
  }
];
export default authRoutes;
