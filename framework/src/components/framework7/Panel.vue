<template>
  <f7-view main>
    <f7-page>
      <f7-navbar ref="navbar" title="Panel" back-link="Back"></f7-navbar>
      <f7-block class="row">
        <f7-col>
          <f7-button raised panel-open="left">Open left panel</f7-button>
        </f7-col>
        <f7-col>
          <f7-button raised panel-open="right">Open right panel</f7-button>
        </f7-col>
      </f7-block>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "ExPanel",
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

<style scoped>
  .panel {
    min-width: 100px;
    max-width: 90vw;
  }
</style>
