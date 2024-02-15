<template>
  <section id="hero" class="home-hero">
    <div class="scroll">
      <a href="#hero" class="to-top">
        <i class='bx bxs-chevron-up scrolltop_icon'></i>
      </a>
    </div>
    <div class="container container-hero">
      <div class="row text-center">
        <div class="col-12 mt-1 mt-md-5 px-md-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-12 mt-3">
              <h1 class="h1">{{contentOptions.title}}</h1>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 px-2 px-md-5">
              <p class="description mb-0">
                {{contentOptions.sub_title}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <div class="row no-gutters justify-content-center">
            <div class="col-12 col-md-4 d-flex offset-md-1 justify-content-md-end justify-content-center mt-1 mt-md-3 mt-ms-0">
              <button class="btn btn-warning btn-warning-hero">
                {{contentOptions.button_primary}}
              </button>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center mt-3 mt-ms-0">
              <button class="btn btn-primary btn-primary-hero">
                {{contentOptions.button_secondary}}
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 mb-5 mt-5">
          <div class="row justify-content-center text-center mx-auto">
            <div class="col-11 col-md-6">
                <img :src="require(`~/static/images/${contentOptions.image}`)" class="img-fluid mx-auto d-block" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-wave"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroItem',
  props: {
    contentOptions: {
      required: true,
      type: Object,
      value: {}
    }
  }
}
</script>

