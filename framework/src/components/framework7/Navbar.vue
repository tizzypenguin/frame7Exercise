<template>
  <f7-page>
    <!-- <f7-navbar ref="navbar" title="Navbar" back-link="Back"></f7-navbar>
    <f7-navbar title="My App"></f7-navbar>
    <f7-navbar title="My App" back-link="Back"></f7-navbar>
    <f7-navbar title="My App" back-link="Back" :sliding="false"></f7-navbar>
    <f7-navbar title="My App" back-link="Back">
      <f7-nav-right>
        <f7-link icon="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar> -->

    <!-- or -->

    <!-- <f7-navbar title="My App" back-link="Back">
      <f7-link slot="nav-right" icon="icon-bars" panel-open="right"></f7-link>
    </f7-navbar>
    <f7-navbar title="My App" back-link="Back" large></f7-navbar> -->

    <!-- with different large title text -->

    <f7-navbar ref="navbar" title="Navbar" back-link="Back" large title-large="Large Title"></f7-navbar>
    <f7-navbar>
      <f7-nav-left back-link="Back"></f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon="icon-bars" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- <f7-navbar>
      <f7-nav-left>
        <f7-link>Left Link</f7-link>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link>Right Link</f7-link>
      </f7-nav-right>
    </f7-navbar> -->
  </f7-page>
</template>

<script>
export default {
  name: "ExNavbar",
  data() {
    return {};
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
