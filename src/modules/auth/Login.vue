<template>
  <b-container class="h-100">
    <div
      class=" row h-100 d-flex justify-content-center align-self-center mt-7"
    >
      <div class="col-md-5" style="top: 100px;">
        <b-card>
          <ValidationObserver ref="observer" v-slot="{ passes }">
            <b-form
              @submit.prevent="passes(onSubmit)"
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
                rules="required|min:6"
                type="password"
                label="Password"
                name="password"
                v-model="user.password"
              />
              <b-form-checkbox value="1" v-model="user.remember_me" class="mt-2"
                >Remember Me ?
              </b-form-checkbox>
              <b-button
                type="submit"
                squared
                block
                variant="primary"
                class="mt-4"
              >
                Login</b-button
              >
            </b-form>
          </ValidationObserver>
          <router-link
            :to="{ name: 'ForgetPassword' }"
            class="pull-right need-help mt-2"
          >
            Need help ?
          </router-link>
          <span class="clearfix"></span>
          <router-link
            :to="{ name: 'Register' }"
            class="text-center new-account"
            >Create an account
          </router-link>
        </b-card>
      </div>
    </div>
  </b-container>
</template>
<style scoped>
body {
  background: #3c3c3c;
}
</style>
<script>
import { ValidationObserver } from "vee-validate";
import Input from "../../components/form/fields/Input";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Input,
    ValidationObserver
  },
  data: () => ({
    githubUrl:
      "https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars",
    user: {
      email: "",
      password: "",
      remember_me: false
    }
  }),
  methods: {
    onSubmit() {
      axios
        .get(this.githubUrl)
        .then(response => {
          console.log("GitHub Response:", response);

          if (response.status !== 200) {
            this.error = response.statusText;
            return;
          }

          this.response = response.data.items;
        })
        .catch(error => {
          // Request failed.
          console.log("error", error.response);
          this.error = error.response.statusText;
        });
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.user.email = "";
      this.user.password = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>
