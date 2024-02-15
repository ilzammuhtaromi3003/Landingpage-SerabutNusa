<template>
  <section class="home-step">
    <div class="container container-step">
      <div class="row text-center py-2 py-md-5 justify-content-center">
        <div class="col-11 col-md-8 h1">
          <h1 class="title">{{contentOptions.title}}<span class="span">{{contentOptions.title_span}}</span></h1>
        </div>
        <div class="col-12 col-md-6 p-2 p-md-3">
          <img :src="require(`~/static/images/${contentOptions.image}`)" class="image img-fluid mx-auto d-block" alt="">
        </div>
        <div class="col-12 col-md-6 text-start align-self-center">
          <ul class="list-container ms-4 ms-md-0">
            <li class="list">{{contentOptions.list_1}}</li>
            <li class="list">{{contentOptions.list_2}}</li>
            <li class="list">{{contentOptions.list_3}}</li>
            <li class="list">{{contentOptions.list_4}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StepItem',
  props: {
    contentOptions:{
      required: true,
      type: Object,
      value:{}
    }
  }
}
</script>