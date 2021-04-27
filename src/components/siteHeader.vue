<template>
  <div class="siteHeader">
          <ul>
            <li><a href="#0"><img class="logo" src="../assets/images/logo_white_cropped.png"/></a></li>
            <li><a href="#0">Guide</a></li>
            <li><a href="#0">API</a></li>
            <li><a href="#0">Maps</a></li>
            <li><a href="#0">Partners</a></li>
            <li><a href="#0">Blog</a></li>
            <li><a href="#0">Marketplace</a></li>
            <li><a href="#0">Support</a></li>
            <li><a href="#0" class="sign-out-link">Sign in</a></li>
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
};
</script>

<style>
.siteHeader {
  background-color: #48484a;
}

.logo {
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 10px;
  width: 94px;
  height: 40px;
}
 ul {
     list-style: none;
     display: flex;
     align-items: center;
  }
 ul > li {
      width: auto;
      padding: 5px;
      font-weight: bold;
      color: #CDD0D0;
      background: darken(#CDD0D0, 40%);
  }

 ul > li > a {
    text-decoration: none;
    color: #CDD0D0;
    padding: 5px;
    display: inline-block;
  }

.sign-out-link {
  color: #f2f2f2;
  font-size: 0.8rem;
  margin-left: 10px;
  text-transform: uppercase;
}
</style>
