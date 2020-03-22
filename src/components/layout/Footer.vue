<template>
  <footer class="main-footer">
    <strong>
      Copyright &copy; {{ year }} <a href="javascript:void 0;">CoPilot</a>.
    </strong>
    All rights reserved.
    <div class="pull-right">
      Version 1.0.0
    </div>
  </footer>
</template>
<style scoped>
.main-footer {
  background: #b5bbc8;
  padding: 15px;
  color: #444;
  border-top: 1px solid #1e282c;
  transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
  margin-left: 245px;
  z-index: 820;
  display: block;
}
.pull-right {
  float: right !important;
}
</style>
<script>
export default {
  name: "Footer",
  data: function() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
