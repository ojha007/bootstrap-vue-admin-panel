<template>
  <div class="user-panel mt-2">
    <div class="pull-left image">
      <img
        src="https://picsum.photos/200/300"
        class="img-circle"
        alt="User Image"
      />
    </div>
    <div class="pull-left info">
      <p>Alexander Pierce</p>
      <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.img-circle {
  width: 100%;
  vertical-align: middle;
  border-radius: 50%;
  max-width: 50px;
  height: 50px;
  border: 0;
}

.user-panel > .info {
  padding: 5px 5px 5px 15px;
  line-height: 1;
  position: absolute;
  left: 62px;
}

.pull-left {
  float: left !important;
}

.user-panel {
  position: relative;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
}

.user-panel > .info > p {
  font-weight: 600;
  margin-bottom: 9px;
}

.user-panel > .info,
.user-panel > .info > a {
  color: #fff;
}
</style>
