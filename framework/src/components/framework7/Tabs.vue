<template>
  <f7-view main>
    <f7-page :page-content="false">
      <f7-navbar ref="navbar" title="Tabs" back-link="Back"></f7-navbar>
      <f7-toolbar tabbar bottom>
        <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
        <f7-link tab-link="#tab-2">Tab 2</f7-link>
        <f7-link tab-link="#tab-3">Tab 3</f7-link>
      </f7-toolbar>
      <!-- <f7-tabs> -->
      <!-- <f7-tabs animated> -->
      <f7-tabs swipeable>
        <f7-tab id="tab-1" class="page-content" tab-active>
          <f7-block>
            <p>Tab 1 content</p>
            ...
          </f7-block>
        </f7-tab>
        <f7-tab id="tab-2" class="page-content">
          <f7-block>
            <p>Tab 2 content</p>
            ...
          </f7-block>
        </f7-tab>
        <f7-tab id="tab-3" class="page-content">
          <f7-block>
            <p>Tab 3 content</p>
            ...
          </f7-block>
        </f7-tab>
      </f7-tabs>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "ExTabs",
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
