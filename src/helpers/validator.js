import { extend } from "vee-validate";

extend("age-bar", value => {
  return value >= 18;
});

