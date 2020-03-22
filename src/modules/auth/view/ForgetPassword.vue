<template>
  <b-container class="d-flex">
    <div
      class=" row h-100 d-flex justify-content-center align-self-center mt-7"
    >
      <b-card>
        <b-card-title>
          Forget Password ?
        </b-card-title>
        <b-card-body>
          <ValidationProvider ref="observer" v-slot="{ passes }">
            <form
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
            </form>
          </ValidationProvider>
        </b-card-body>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import Input from "../../../components/form/fields/Input";

export default {
  name: "ForgetPassword",
  components: { Input },
  data: () => ({
    user: {
      email: ""
    }
  }),
  methods: {
    resetForm() {
      this.user.email = null;
    },
    onSubmit() {}
  }
};
</script>

<style scoped></style>
