<template>
  <f7-view main>
    <f7-page>
      <f7-navbar ref="navbar" title="Toolbar & Tabbar" back-link="Back"></f7-navbar>

      <f7-toolbar :position="isBottom ? 'bottom' : 'top'">
        <f7-link>Left Link</f7-link>
        <f7-link>Right Link</f7-link>
      </f7-toolbar>
      <f7-block-title>Toolbar Position - find more in doc</f7-block-title>
      <f7-block>
        <p>Toolbar supports both top and bottom positions. Click the following button to change its position.</p>
        <p>
          <f7-button raised @click="isBottom = !isBottom">Toggle Toolbar Position</f7-button>
        </p>
      </f7-block>
      <f7-block>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae...</p>
      </f7-block>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "ExToolbarNTabbar",
  data() {
    return {
      isBottom: true
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
