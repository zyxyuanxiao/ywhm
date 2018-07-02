<template>
  <div>
  	<div id="box" ref="mybox">
      DEMO
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
  	return {
      
  	}
  },
  mounted () {
    this.init();
  },
  methods:{
    init() {
      const self = this;
      this.$refs.mybox.style.color = 'red';
      setTimeout(() => {
        self.$refs.mybox.value = 'woshi';
      },2000)
    }
  }
 
}
</script>
 
<style scoped>
  #box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    text-align: center;
    border: 1px solid black;
    margin: 50px; 
    color: yellow;
  }
</style>