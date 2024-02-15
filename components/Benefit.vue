<template>
 <section class="home-benefit">
    <div class="container container-benefit my-2 my-md-5">
      <div class="row  justify-content-center">
        <div class="col col-md-8 text-center">
          <h1 class="title">{{contentOptions.title}}</h1>
        </div>

        <div class="wrapper row text-center">
          <div class="col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_1}`)" class= "image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="column col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_1}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_2}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_2}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_3}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_3}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_4}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_4}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_5}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_5}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_6}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_6}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-6 col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_7}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_7}}</p>
              </div>
            </div>
          </div>
          <div class="column col col-md-3 col-sm-6">
            <img :src="require(`~/static/images/${contentOptions.image_8}`)" class="image img-fluid mx-auto d-block" alt="">
            <div class="row  justify-content-center">
              <div class="col-12 col-md-10 text-center">
                <p class="description">{{contentOptions.description_8}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
</template>

<script>
export default {
  name: 'BenefitItem',
  props: {
    contentOptions:{
      required: true,
      type: Object,
      value:{}
    }
  }
}
</script>
