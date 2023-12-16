<template>
  <section class="home-earning">
    <div class="container container-general container-earning">
      <div class="row text-start mx-auto my-5">
        <div class="col-12">
          <h1 class="text-center title">{{contentOptions.title}}</h1>
        </div>
        <div class="col-12">
          <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-6 align-self-center px-1">
              <img :src="require(`~/static/images/${contentOptions.image}`)" class="image img-fluid mx-auto px-2 px-md-3 d-block" alt="">
            </div>
            <div class="col-12 col-md-6 col-desc px-5">
              <p class="description py-1">{{contentOptions.description_1}}</p>
              <p class="description py-1">{{contentOptions.description_2}}</p>
              <p class="description py-1">{{contentOptions.description_3}}</p>
              <p class="description py-1">{{contentOptions.description_4}}</p>
              <button class="btn btn-primary btn-lg w-100">{{contentOptions.button_primary}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'EarningItem',
    props: {
      contentOptions:{
        required: true,
        type: Object,
        value:{}
      }
    }
  }
</script>
