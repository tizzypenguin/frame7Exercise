<template>
  <f7-page>
    <f7-navbar ref="navbar" title="List Button" back-link="Back"></f7-navbar>
    <f7-list>
      <f7-list-button title="List Button 1"></f7-list-button>
      <f7-list-button title="List Button 2"></f7-list-button>
      <f7-list-button title="List Button 3"></f7-list-button>
    </f7-list>

    <f7-list inset>
      <f7-list-button title="List Button 1"></f7-list-button>
      <f7-list-button title="List Button 2"></f7-list-button>
      <f7-list-button title="List Button 3"></f7-list-button>
    </f7-list>

    <f7-list inset>
      <f7-list-button title="Red List Button" color="red"></f7-list-button>
      <f7-list-button title="Green List Button" color="green"></f7-list-button>
      <f7-list-button title="Orange List Button" color="orange"></f7-list-button>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: "ExListButton",
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
