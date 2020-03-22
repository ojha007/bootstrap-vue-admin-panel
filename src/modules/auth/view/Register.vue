<template>
  <b-container class="h-100">
    <div
      class=" row h-100 d-flex justify-content-center align-self-center mt-7"
    >
      <div class="col-md-5" style="top: 100px;">
        <b-card>
<!--          <ValidationObserver v-slot:'{passes }'></ValidationObserver>-->
          <!--        &lt;!&ndash;          <ValidationObserver ref="observer" v-slot="{ passes }">&ndash;&gt;-->
<!--          <ValidationObserver>-->
          <b-form
            @submit.prevent="passes(registerUser)"
            @reset="resetForm"
            class="form-horizontal"
          >
            <Input
              rules="required|email"
              type="email"
              label="Email address:"
              name="email"
              v-model="user.email"
              placeholder="Enter email"
            />
            <Input
              rules="required|min:5|alpha_num"
              type="text"
              label="User Name:"
              name="username"
              v-model="user.username"
              placeholder="Enter Username"
            />
            <Input
              rules="required|min:6"
              type="password"
              label="Password"
              name="password"
              v-model="user.password"
              ref="password"
            />
            <Input
              rules="required|confirmed:password"
              type="password"
              label="Confirm Password"
              name="confirm_password"
              v-model="user.confirm_password"
              :vid="password"
            />
            <b-button
              type="submit"
              squared
              block
              variant="primary"
              class="mt-4"
            >
              Register
            </b-button>
          </b-form>
          <!--        &lt;!&ndash;          </ValidationObserver>&ndash;&gt;-->
          <div class="clearflix"></div>
          <router-link :to="{ name: 'Login' }" class="mt-2">Login</router-link>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
// import { ValidationObserver } from "vee-validate";
import Input from "../../../components/form/fields/Input";

export default {
  name: "Register",
  components: { Input },
  data: () => {
    return {
      user: {
        email: "",
        username: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  methods: {
    resetForm() {},
    registerUser() {}
  }
};
</script>

<style scoped></style>
