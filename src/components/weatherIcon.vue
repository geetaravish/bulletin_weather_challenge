<template>
  <div>
    <div>Day {{idx+1}}</div>
    <img class="img-icon" :src="getDayIcon"/>{{description}}
  </div>  
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "weatherIcon",
  props: {
      description: String,
      idx: Number
      },
   computed: {
      ...mapState("wheatherState", ["dayNightIconList"]),
      getDayIcon() {
        let icon = ""
        if(this.description && this.dayNightIconList) {
            this.dayNightIconList.filter(item => { 
              if (item.description === this.description) {
                icon = item.icon
              } 
            });
        }
        return icon
      },
       getNightIcon() {
          let icon = ""
          if(this.description && this.dayNightIconList) {
              this.dayNightIconList.filter(item => { 
                if (item.description === this.description) {
                    console.log(item.night_icon)
                  icon = item.night_icon
                }
              });
          }
          return icon
      },
  }
};
</script>
<style>
.img-icon{
  width: 50px;
  height: 50px;
  overflow: hidden;
}
div {
      color: #000000b3;
      line-height: 20px;

}
</style>