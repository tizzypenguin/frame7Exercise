<template>
  <router-view ref="rv"/>
</template>

<script>
export default {
  name: 'F7Home',
  data () {
    return {
    }
  },
  created() {
    
  },
  mounted() {
    const _this = this;
    this.$f7ready((f7) => {
      _this.addClick();
    });
  },
  updated() {
    this.addClick();
  },
  methods: {
    addClick: function() {
      const _this = this;
      const children = _this.$refs.rv.$refs.navbar.$children;
      for(var i=0; i< children.length; i++) {
        if(children[i]) {
          children[i].$el.addEventListener("click", _this.goBack);
        }
      }
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
