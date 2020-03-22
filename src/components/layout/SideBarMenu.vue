<template>
  <ul class="sidebar-menu tree" data-widget="tree">
    <li class="header">MAIN NAVIGATION</li>
    <li class="active treeview menu-open">
      <a href="#">
        <div>
          <b-icon icon="grid-fill" class="mt-2"></b-icon>
          DashBoard
        </div>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#" class="mb-2">
            <b-icon icon="gear-fill" class="btn-adn"></b-icon>
            Settings
          </a>
        </li>
        <li class="active">
          <a href="index2.html">
            <b-icon icon="chevron-right"></b-icon>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
};
export default {
  name: "SideBarMenu",
  methods: {
    onCollapse(collapsed) {
      console.log(collapsed);
      this.collapsed = collapsed;
    },
    // onItemClick(event, item) {
    //   console.log("onItemClick");
    //   // console.log(event)
    //   // console.log(item)
    // }
  },
  data: function() {
    return {
      themes: ["", "white-theme"],
      selectedTheme: "white-theme",
      collapsed: false,
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
          component: separator,
          visibleOnCollapse: true
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

<style scoped></style>
