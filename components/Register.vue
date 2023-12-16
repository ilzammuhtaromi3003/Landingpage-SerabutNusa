<template>
  <section class="home-register">
    <div class="container container-general">
      <div class="row mx-auto my-5">
        <div class="col-12 col-md-6 order-md-2 p-2 p-md-3">
          <img :src="require(`~/static/images/${contentOptions.image}`)" class="img-fluid mx-auto" alt="">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div class="row">
            <div class="col-12 px-md-5 text-center text-md-start">
              <p class="description">
                {{contentOptions.description}}
              </p>
            </div>
            <div class="col-12 px-md-5 d-flex justify-content-md-start justify-content-center">
              <button class="btn btn-primary btn-primary-register">{{contentOptions.button_primary}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterItem',
  props: {
    contentOptions:{
      required: true,
      type: Object,
      value:{}
    }
  }
}
</script>
