<template>
  <section class="home-why">
    <div class="container container-general">
      <div class="row text-center justify-content-center mx-auto my-5">
        <div class="col-12">
          <h1 class="title">{{contentOptions.title}}</h1>
        </div>
        <div class="col-12 p-1 p-md-5">
          <img :src="require(`~/static/images/${contentOptions.image}`)" class="image img-fluid mx-auto p-3 d-block" alt="">
        </div>
        <div class="col-12 col-md-9">
          <p class="description px-3">
            {{contentOptions.description}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { 
  name: 'WhyItem',
  props: {
    contentOptions:{
      required: true,
      type: Object,
      value:{}
    }
  } 
}
</script>
