<template>
     <!-- start header -->
    <header class="w-full relative">
      <swiper :autoplay='{"delay": 2500,"disableOnInteraction": false}' :pagination="{ clickable: true }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="banner in banners" v-bind:key="banner.id" v-bind:banner="banner"><img :src='"https://api.khoonevar.ir"+banner.get_picture_url' alt="" class="object-none" ></swiper-slide>
      </swiper>
    </header>
    <!-- end header -->
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation,Pagination,EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import SwiperCore, {Autoplay} from 'swiper/core';
import axios from 'axios'
SwiperCore.use([Autoplay,Pagination,Navigation]);
export default {
    name: 'HomeViewHeader',
    components: {Swiper, SwiperSlide},
    data(){
      return{ 
        banners: []
      }
    },
    setup() {
        return {
          modules: [Navigation,Pagination,EffectCards],

        };
      },
      mounted(){
      this.getBanners()
    },
    methods:{
      getBanners(){
        axios.get('index')
        .then(response=>{
          this.banners = response.data["banners"]
          // console.log(response.data)
        })
        .catch(error=>{
        console.log(error)
      })
      }
    }
}
</script>
<style>
header{
  height: 590px;
}

@media(max-width:950px){
  header{
  height: 480px !important;
  }
}
@media(max-width:500px){
  header{
  height: 400px !important;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
header .swiper-slide img{
  object-fit: none !important;
}
</style>