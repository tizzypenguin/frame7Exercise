<template>
  <f7-view main>
    <f7-page>
      <f7-navbar ref="navbar" title="List View"></f7-navbar>
      <f7-block-title>Simple List</f7-block-title>
      <f7-list>
        <ul>
          <f7-list-item
            v-for="(item, index) in titleArr"
            :key="index"
            :title="item"
            @click="($router.push('/f7/'+pathArr[index]))"
          ></f7-list-item>
        </ul>
      </f7-list>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "ExList",
  data() {
    return {
      titleArr: [
        "Accordion",
        "Acction Sheet",
        "Appbar",
        "Badge",
        "Block",
        "Button",
        "Cards",
        "Cehckbox",
        "Chips/Tags",
        "Contact List",
        "FAB",
        "Gauge",
        "Grid",
        "Icon",
        "Inputs",
        "Link",
        "List Button",
        "List Index",
        "List Item",
        "List View",
        "Login Screen",
        "Menu",
        "Messagebar",
        "Messages",
        "Navbar",
        "Page",
        "Panel",
        "Photo Browser",
        "Popover",
        "Popup",
        "Preloader",
        "Progressbar",
        "Radio",
        "RangeSlider",
        "Searchbar",
        "Sheet Modal",
        "Skeleton",
        "Smart Select",
        "Sortable",
        "Statusbar",
        "Stepper",
        "Subnavbar",
        "Swipeout",
        "Swiper",
        "Tabs",
        "Toggle",
        "Toolbar/Tabbar",
        "Treeview",
        "View",
        "Virtual List"
      ],
      pathArr: [
        "accordion",
        "actionsheet",
        "appbar",
        "badge",
        "block",
        "button",
        "cards",
        "cehckbox",
        "chipsntags",
        "contactlist",
        "fab",
        "gauge",
        "grid",
        "icon",
        "inputs",
        "link",
        "listbutton",
        "listindex",
        "listitem",
        "listview",
        "loginscreen",
        "menu",
        "messagebar",
        "messages",
        "navbar",
        "page",
        "panel",
        "photobrowser",
        "popover",
        "popup",
        "preloader",
        "progressbar",
        "radio",
        "rangeslider",
        "searchbar",
        "sheetmodal",
        "skeleton",
        "smartselect",
        "sortable",
        "statusbar",
        "stepper",
        "subnavbar",
        "swipeout",
        "swiper",
        "tabs",
        "toggle",
        "toolbarntabbar",
        "treeview",
        "view",
        "virtuallist"
      ]
    };
  },
  components: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
};
</script>

<style>
</style>
