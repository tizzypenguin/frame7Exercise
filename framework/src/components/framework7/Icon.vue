<template>
  <f7-page>
    <f7-navbar ref="navbar" title="Icon" back-link="Back"></f7-navbar>
    <!-- Default back icon -->
    <f7-icon icon="icon-back"></f7-icon>

    <!-- Some custom icon -->
    <f7-icon icon="icon-home"></f7-icon>

    <!-- F7 Icons font icon -->
    <f7-icon f7="home"></f7-icon>

    <!-- Material Icons font icon -->
    <f7-icon material="home"></f7-icon>

    <!-- Font Awesome icons font icon -->
    <f7-icon fa="home"></f7-icon>

    <!-- Ionicons icons font icon -->
    <f7-icon ion="home"></f7-icon>

    <!-- F7 icons font icon with custom size and color -->
    <f7-icon f7="home" size="44px" color="blue"></f7-icon>

    <!-- Conditional icon -->
    <f7-icon ios="f7:home" aurora="f7:home" md="material:home"></f7-icon>
  </f7-page>
</template>

<script>
export default {
  name: "ExIcon",
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
