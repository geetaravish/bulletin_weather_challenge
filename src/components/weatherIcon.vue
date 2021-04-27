<template>
  <div>
    <img class="day-icon" :src="getDayIcon"/>{{description}}
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
.day-icon{
  width: 50px;
  height: 50px;
  overflow: hidden;
}
</style>