<template>
 <div>
   <section class="header fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img class="logo" :src="require(`~/static/images/${contentOptions.image}`)" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" class="wrap-navbar-nav collapse navbar-collapse justify-content">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#hero">{{contentOptions.link_1}}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#kenalan">{{contentOptions.link_2}}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#product">{{contentOptions.link_3}}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">{{contentOptions.link_4}}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </section>
 </div>
</template>
<script>
export default {
  name: 'NavbarItem',
  props: {
    contentOptions:{
      required: true,
      type: Object,
      value:{}
    }
  }
}
</script>