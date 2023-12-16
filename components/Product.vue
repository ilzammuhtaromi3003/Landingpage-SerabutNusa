<template>
  <section id="product" class="home-product">
    <div class="container container-product text-center">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="title text-center py-3 py-md-5">{{contentOptions.title}}</h1>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <p class="description">
            {{contentOptions.subtitle}}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 col-12 col-product">
          <div class="card my-2 my-md-4 mx-auto">
            <div class="row">
              <div class="col-md-12 col-4">
                <img class="image card-img-top mx-auto" :src="require(`~/static/images/${contentOptions.card.image1}`)" alt="Card image cap">
              </div>
              <div class="col-md-12 col-8">
                <div class="card-body">
                  <h5 class="card-title">{{contentOptions.card.title1}}</h5>
                  <p class="card-text">{{contentOptions.card.description1}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 col-12 col-product">
          <div class="card my-2 my-md-4 mx-auto">
            <div class="row">
              <div class="col-md-12 col-4">
                <img class="image card-img-top mx-auto" :src="require(`~/static/images/${contentOptions.card.image2}`)" alt="Card image cap">
              </div>
              <div class="col-md-12 col-8">
                <div class="card-body">
                  <h5 class="card-title">{{contentOptions.card.title2}}</h5>
                  <p class="card-text">{{contentOptions.card.description2}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 col-12 col-product">
            <div class="card my-2 my-md-4 mx-auto">
              <div class="row">
              <div class="col-md-12 col-4">
                <img class="image card-img-top mx-auto" :src="require(`~/static/images/${contentOptions.card.image3}`)" alt="Card image cap">
              </div>
              <div class="col-md-12 col-8">
                <div class="card-body">
                  <h5 class="card-title">{{contentOptions.card.title3}}</h5>
                  <p class="card-text">{{contentOptions.card.description3}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 col-12 col-product">
          <div class="card my-2 my-md-4 mx-auto">
            <div class="row">
              <div class="col-md-12 col-4">
                <img class="image card-img-top mx-auto" :src="require(`~/static/images/${contentOptions.card.image4}`)" alt="Card image cap">
              </div>
              <div class="col-md-12 col-8">
                <div class="card-body">
                  <h5 class="card-title">{{contentOptions.card.title4}}</h5>
                  <p class="card-text">{{contentOptions.card.description4}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-2 my-md-5">
        <div class="col-12 my-1 my-md-3">
          <button class="btn btn-warning btn-lg my-md-4 px-md-5">{{ contentOptions.button_secondary }}</button>
        </div>
        <div class="col-12 my-2">
        <p class="description">
            {{ contentOptions.description1 }}
          </p>
        </div>
        <div class="col-12 my-2">
         <p class="description">
            {{ contentOptions.description2 }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-wave"></div>
  </section>
</template>

<script>
  export default { name: 'ProductItem',
  props: {
    contentOptions: {
      required: true,
      type: Object,
      value: {}
    }
  }
}

</script>
