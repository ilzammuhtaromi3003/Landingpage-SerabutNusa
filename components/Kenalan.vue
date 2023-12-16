<template>
  <section id="kenalan" class="home-kenalan">
    <div class="container">
      <div class="row text-start mx-auto">
        <div class="col-12 text-center my-3 my-lg-5">
          <h1 class="title">{{ contentOptions.title }} <span class="span">{{ contentOptions.title_span }}</span></h1>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-lg-6 align-self-center">
              <div class="image-overlap image-overlap-first">
                <img class="image-top-bg" :src="require(`~/static/images/${contentOptions.content_top.image_bg}`)"/>
                <img class="image-top" :src="require(`~/static/images/${contentOptions.content_top.image}`)"/>
              </div>
            </div>
            <div class="col-12 col-lg-6 align-self-center text-center text-lg-start p-2 p-lg-5">
              <p class="description p-2 p-lg-3 m-0">{{ contentOptions.content_top.description1 }}</p>
              <p class="description p-2 p-lg-3 m-0">{{ contentOptions.content_top.description2 }}</p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-lg-6 order-lg-2 align-self-center">
              <div class="image-overlap image-overlap-second">
                <img class="image-top-bg" :src="require(`~/static/images/${contentOptions.content_middle.image_front_bg}`)"/>
                <img class="image-bot-bg" :src="require(`~/static/images/${contentOptions.content_middle.image_back_bg}`)"/>
                <img class="image-bot" :src="require(`~/static/images/${contentOptions.content_middle.image_back}`)"/>
                <img class="image-top" :src="require(`~/static/images/${contentOptions.content_middle.image_front}`)"/>
              </div>
            </div>
            <div class="col-12 col-lg-6 align-self-center text-center text-lg-start h-100 p-2 p-lg-5">
              <p class="description mx-lg-5 mb-lg-5">{{ contentOptions.content_middle.description1 }}</p>
              <p class="description mx-lg-5">{{ contentOptions.content_middle.description2 }}</p>
              <p class="description mx-lg-5 mt-lg-5">{{ contentOptions.content_middle.description3 }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 my-5">
          <div class="row">
            <div class="col-12 col-lg-6 align-self-center">
              <div class="image-overlap image-overlap-third">
                <img class="image-top-bg" :src="require(`~/static/images/${contentOptions.content_bottom.image_bg}`)"/>
                <img class="image-top" :src="require(`~/static/images/${contentOptions.content_bottom.image}`)" />
              </div>
            </div>
            <div class="col-12 col-lg-6 align-self-center p-2 p-lg-5">
              <div class="row">
                <div class="col-12 text-center text-lg-start">
                  <p class="description">
                    {{ contentOptions.content_bottom.description1 }}
                  </p>
                </div>
                <div class="col-12 d-flex justify-content-md-start justify-content-center">
                  <button class="btn btn-primary btn-primary-kenalan">{{ contentOptions.button_primary }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'KenalanItem' ,
  props: {
    contentOptions: {
      required: true,
      type: Object,
      value: {}
    }
  }
}
</script>
