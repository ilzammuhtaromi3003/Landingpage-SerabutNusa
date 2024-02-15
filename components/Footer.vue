

<template>
    <div>
        <footer class="text-center text-lg-start bg-light p-1 text-muted">
            <section id="footer" class="footer">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="column col-md-5 col-lg-4 col-xl-5 mx-auto ">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row">
                                        <div id="wrap-logo" class="wrap-logo">
                                            <a href="#"><img :src="require(`~/static/images/${contentOptions.image_1}`)" class="logo" alt=""></a>                       
                                        </div>
                                        <div class="col-12">
                                            <h6 class="title fw-bold">{{contentOptions.title_1}}</h6>
                                            <p id="description-ser" class="description">
                                                {{contentOptions.title_1_description}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <h6 class="title fw-bold">{{contentOptions.title_2}}</h6>
                                    <p class="description">
                                        {{contentOptions.title_2_description}}
                                    </p>
                                </div>
                                <div class="col-12">
                                    <div class="dropdown dropdown-toggle">
                                        <a id="dropdownMenuLink" class="fw-bold text-decoration-none text-reset" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                            {{contentOptions.title_dropdown}}
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">{{contentOptions.dropdown_description_1}}</a></li>
                                            <li><a class="dropdown-item" href="#">{{contentOptions.dropdown_description_2}}</a></li>
                                            <li><a class="dropdown-item" href="#">{{contentOptions.dropdown_description_3}}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="column col-md-3 col-lg-2 col-xl mx-auto ">
                            <div class="row">
                                <div class="col-12">
                                    <h6 class="title fw-bold">{{contentOptions.title_3}}</h6>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_3_description_1}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_3_description_2}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_3_description_3}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_3_description_4}}</a></p>
                                </div>
                                <div class="col-12">
                                    <h6 class="title fw-bold">{{contentOptions.title_4}}</h6>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_4_description_1}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_4_description_2}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_4_description_3}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_4_description_4}}</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="column col-md-2 col-lg-3 col-xl mx-auto">
                            <div class="row">
                                <div class="col-12">
                                    <h6 class="title fw-bold">{{contentOptions.title_5}}</h6>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_5_description_1}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_5_description_2}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_5_description_3}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_5_description_4}}</a></p>
                                </div>
                                <div class="col-12">
                                    <h6 class="title fw-bold">{{contentOptions.title_6}}</h6>
                                    <p><a target="_blank" href="https://wa.me/6281390308131" class="description text-decoration-none text-reset">{{contentOptions.title_6_desciption_1}}</a></p>
                                    <p><a href="#" class="description text-decoration-none text-reset">{{contentOptions.title_6_description_2}}</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="column col-md-2 col-lg-2 col-xl mx-auto">
                            <div class="row">
                                <div class="col-12">
                                    <h6 class="title fw-bold">{{contentOptions.title_7}}</h6>
                                    <div id="wrap-logo" class="wrap-logo">
                                        <a href="#"><img :src="require(`~/static/images/${contentOptions.image_2}`)" class="logo" alt=""></a>                       
                                    </div>
                                    <p class="description text-reset my-1">{{contentOptions.title_7_description}}</p>
                                <div class="col-12">
                                    <h6 class="title fw-bold ">{{contentOptions.title_8}}</h6>
                                    <p><a target="_blank" href="https://www.instagram.com/serabutnusa_id" class="description text-decoration-none text-reset"><img class="medsos d-inline px-1" :src="require(`~/static/images/${contentOptions.title_8_image_1}`)" alt="">{{contentOptions.title_8_description_1}}</a></p>
                                    <p><a target="_blank" href="https://www.facebook.com/profile.php?id=100072186128871" class="description text-decoration-none text-reset"><img class="medsos d-inline px-1" :src="require(`~/static/images/${contentOptions.title_8_image_2}`)" alt="">{{contentOptions.title_8_description_2}}</a></p>
                                    <p><a target="_blank" href="https://www.linkedin.com/company/serabut-nusa-berdaya" class="description text-decoration-none text-reset"><img class="medsos d-inline px-1" :src="require(`~/static/images/${contentOptions.title_8_image_3}`)" alt="">{{contentOptions.title_8_description_3}}</a></p>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div id="copyright"  class="py-4 bg-light" >
                    <a class="text-decoration-none fw-bold text-reset" href="#">{{contentOptions.copyright}}</a>
                </div>
            </section>
        </footer>
    </div>
    
</template>



<script>
export default {
  name: 'FooterItem',
  props: {
    contentOptions:{
        required: true,
        type: Object,
        value:{}
    }
  }
}
</script>


