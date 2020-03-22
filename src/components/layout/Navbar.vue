<template>
  <div>
    <div id="navbar">
      <header class="main-header">
        <a href="javascript:void 0" class="logo text-decoration-none">
          <span>Vue Demo </span>
        </a>
        <b-navbar
          toggleable="lg"
          type="dark"
          class="navbar navbar-static-top h66"
        >
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
          </b-collapse>
        </b-navbar>
      </header>
    </div>
  </div>
</template>

<script>
// import SideBar from "./SideBar";

export default {
  name: "Navbar"
  // components: { SideBar }
};
</script>

<style scoped>
#navbar {
  position: relative;
  max-height: 100px;
  z-index: 1030;
  background: #3c8dbc;
}

.navbar-header {
  transition: margin-left 0.3s ease-in-out;
  margin-bottom: 0;
  border: none;
  min-height: 50px;
  border-radius: 0;
}

.skin-blue .main-header .logo {
  background-color: #367fa9;
  color: #fff;
  border-bottom: 0 solid transparent;
}

.h66 {
  transition: margin-left 0.3s ease-in-out;
  margin-bottom: 0;
  border: none;
  min-height: 66px;
  border-radius: 0;
}

.main-header .logo {
  -webkit-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  display: block;
  float: left;
  height: 66px;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  width: 246px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 15px;
  font-weight: 300;
  overflow: hidden;
  background-color: #367fa9;
  color: #fff;
  border-bottom: 0 solid transparent;
}
</style>
