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
    this.$f7ready((f7) => {
      this.addClick();
    });
  },
  updated() {
    this.addClick();
  },
  methods: {
    addClick: function() {
      const _this = this;
      const childRef = _this.$refs.rv.$refs;
      if(childRef.navbar && childRef.navbar.$children) {
        const children = _this.$refs.rv.$refs.navbar.$children;
        for(var i=0; i< children.length; i++) {
          if(children[i] && children[i].$el.className=='left') {
            children[i].$el.addEventListener("click", _this.goBack);
          }
        }
      } else {
        alert('there is no navbar in page');
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
