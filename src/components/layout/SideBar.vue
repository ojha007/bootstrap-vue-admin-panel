<template>
  <div id="sidebar">
    <aside class="main-sidebar">
<!--      <section class="" style="height: auto;">-->
<!--        <UserInfo :user="user"></UserInfo>-->
<!--        <GlobalSearch />-->
<!--        <sidebar-menu :menu="menu" />-->
<!--      </section>-->
    </aside>
  </div>
</template>

<script>
// import UserInfo from "./UserInfo";
// import GlobalSearch from "../partials/GlobalSearch";

export default {
  name: "SideBar",
  // components: { GlobalSearch, UserInfo },
  data() {
    return {
      user: {
        image: "/src/assets/logo.png"
      },
      menu: [
        {
          header: true,
          title: "Example"
        },
        {
          title: "Badge",
          icon: "fa fa-cog",
          badge: {
            text: "new",
            class: "default-badge"
          }
        },
        {
          href: "#page",
          title: "Dropdown Page",
          icon: "fa fa-list-ul",
          child: [
            {
              href: "#sub-page-1",
              title: "Sub Page 01",
              icon: "fa fa-file-alt"
            },
            {
              href: "#sub-page-2",
              title: "Sub Page 02",
              icon: "fa fa-file-alt"
            }
          ]
        },
        {
          title: "Multiple Level",
          icon: "fa fa-list-alt",
          child: [
            {
              title: "page"
            },
            {
              title: "Level 2 ",
              child: [
                {
                  title: "page"
                },
                {
                  title: "Page"
                }
              ]
            },
            {
              title: "Page"
            },
            {
              title: "Another Level 2",
              child: [
                {
                  title: "Level 3",
                  child: [
                    {
                      title: "Page"
                    },
                    {
                      title: "Page"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          href: "#disabled",
          title: "Disabled page",
          icon: "fa fa-lock",
          disabled: true
        },
        {
          header: true,
          title: "Another Example"
        },
        {
          href: "#disabled",
          title: "Disabled page",
          icon: "fa fa-lock",
          disabled: true
        },
        {
          title: "Badge",
          icon: "fa fa-cog",
          badge: {
            text: "new",
            class: "default-badge"
          }
        },
        {
          href: "#page",
          title: "Dropdown Page",
          icon: "fa fa-list-ul",
          child: [
            {
              href: "#sub-page-1",
              title: "Sub Page 01",
              icon: "fa fa-file-alt"
            },
            {
              href: "#sub-page-2",
              title: "Sub Page 02",
              icon: "fa fa-file-alt"
            }
          ]
        },
        {
          title: "Multiple Level",
          icon: "fa fa-list-alt",
          child: [
            {
              title: "page"
            },
            {
              title: "Level 2 ",
              child: [
                {
                  title: "page"
                },
                {
                  title: "Page"
                }
              ]
            },
            {
              title: "Page"
            },
            {
              title: "Another Level 2",
              child: [
                {
                  title: "Level 3",
                  child: [
                    {
                      title: "Page"
                    },
                    {
                      title: "Page"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 64px;
  min-height: 100%;
  width: 246px;
  z-index: 810;
  background-color: #222d32;
  display: block;
}

.sidebar-menu li.header {
  padding: 10px 25px 10px 15px;
  font-size: 12px;
}

.sidebar-menu,
.main-sidebar .user-panel,
.sidebar-menu > li.header {
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-menu,
.main-sidebar .user-panel,
.sidebar-menu > li.header {
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu > li {
  position: relative;
  margin: 0;
  padding: 0;
}

.sidebar-menu > li > .treeview-menu {
  margin: 0 1px;
  background: #2c3b41;
}

.treeview.menu-open > ul.treeview-menu {
  overflow: visible;
  height: auto;
}

.sidebar-menu .active > .treeview-menu {
  display: block;
}

.treeview > ul.treeview-menu {
  overflow: hidden;
  height: auto;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.treeview-menu {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0 0 0 5px;
}

.treeview-menu > li > a:hover {
  color: white;
}

.sidebar-menu .treeview-menu > li > a {
  color: white;
}

.sidebar-menu > li.header {
  color: #4b646f;
  background: #1a2226;
}

.sidebar-form,
.sidebar-menu > li.header {
  overflow: hidden;
  text-overflow: clip;
}

.sidebar-menu,
.main-sidebar .user-panel,
.sidebar-menu > li.header {
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-menu li.header {
  padding: 10px 25px 10px 15px;
  font-size: 12px;
}

.sidebar-menu > li {
  position: relative;
  margin: 0;
  padding: 0;
}

.sidebar-menu > li > a {
  color: white;
}

.sidebar a:hover {
  text-decoration: none;
}

.font-32 {
  font-size: 32px;
}
</style>
