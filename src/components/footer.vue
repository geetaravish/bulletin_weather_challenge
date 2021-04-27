<template>
  <div class="site-footer">
          <ul>
            <li><a href="#0">Product Collections</a></li>
            <li><a href="#0">Subscriptions</a></li>
            <li><a href="#0">Technologies</a></li>
            <li><a href="#0">Terms and Conditions</a></li>
          </ul>
</div>
</template>

<script>

export default {
  name: "siteHeader",
  data() {
    return {
     
    };
  },
  components: {
    
  },
  methods: {
  
  }
};
</script>

<style>
.site-footer {
   background: #48484a;
    color: white;
    display: flex;
    align-items: center;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
.site-footer > ul {
    list-style: none;
    display: flex;
  }
  .site-footer > ul > li {
      color: #CDD0D0;
      font-size: 12px;
      background: darken(#CDD0D0, 40%);
      text-align: left;
  }

  .site-footer > ul > li > a {
    text-decoration: none;
    color: #CDD0D0;
    padding-right: 25px;
    display: inline-block;
  }
 

</style>
