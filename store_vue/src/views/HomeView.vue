<template>
  <div class="home">
    <MenuSection/>
    <HomeViewHeader />
    <main>
      <ProductCategory />
      <SpecialOffer />
      <NewProduct />
      <BestSeller />
      <InstaPoster />
      <ArticleSectionSlider />
      <WorkWithUs />
    </main>
     <FooterSection />
  </div>
</template>
<script>
import FooterSection from '@/components/Footer.vue'
import MenuSection from '@/components/Menu.vue'
import TitrSection from '@/components/TitrSection.vue'
import ArticleSectionSlider from '@/components/ArticleSectionSlider.vue'
import HomeViewHeader from '@/components/HomeViewHeader.vue'
import ProductCategory from '@/components/ProductCategory.vue'
import SpecialOffer from '@/components/SpecialOffer.vue'
import NewProduct from '@/components/NewProduct.vue'
import BestSeller from '@/components/BestSeller.vue'
import InstaPoster from '@/components/InstaPoster.vue'
import WorkWithUs from '@/components/WorkWithUs.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation,Pagination,EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import SwiperCore, {Autoplay} from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default {
  name: 'HomeView',
   components: {
    Swiper,
    SwiperSlide,
    MenuSection,
    TitrSection,
    FooterSection,
    ArticleSectionSlider,
    HomeViewHeader,
    ProductCategory,
    SpecialOffer,
    NewProduct,
    BestSeller,
    InstaPoster,
    WorkWithUs
  },
  setup() {
    return {
      modules: [Navigation,Pagination,EffectCards],
      
    };
    
  },
  mounted(){
  //  let childPagention = document.querySelector(".swiper-pagination");
  //  let parentPagention = document.querySelector(".new-products");
  //  parentPagention.appendChild(childPagention)
  }
}
</script>
<style>
header{
  height: 590px;
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
.new-products .swiper-slide{
  background: transparent;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
main .swiper-button-prev,header .swiper-button-prev {
 display: none !important;
}
main .swiper-button-next ,header .swiper-button-next {
 display: none !important;
}
.swiper-pagination{
    display: flex;
    justify-content: flex-start;
    padding: 7px 16px;

}
header .swiper-pagination-bullet{
  width: 34px;
  border-radius: 6px;
  /* background-color: #0284c7; */
  background-color: white;
}
main .swiper-pagination-bullet{
  width: 34px;
  border-radius: 6px;
  /* background-color: #0284c7; */
  background-color: #0284c7;
}

main .swiper-wrapper{
      padding: 0 0px 30px 0px;
}

.special-offer .swiper-slide {
  margin-right: 45px;
  margin-left: 0 !important;
}
.special-offer .swiper-wrapper {
    display: flex;
}
.special-offer .swiper-slide{
  width: 200px !important;
  border-radius: 7px;
}
.swiper-wrapper{
  display: auto !important;
}
.special-offer .swiper-button-prev{
  display: block !important;
  
}
.special-offer .swiper-button-next{
    display: block !important;
    background: white;
    font-size: 25px;
    border-radius: 100%;
    width: 45px;
    display: flex !important;
    justify-content: center;
    left: 20px;
}
.special-offer .swiper-button-next::after{
  font-size: 22px;
}
.special-offer .swiper-button-prev{
  display: block !important;
      background: white;
    font-size: 25px;
    border-radius: 100%;
    width: 45px;
    display: flex !important;
    justify-content: center;
    left: 20px;
}
.special-offer .swiper-button-prev::after{
  font-size: 22px;
}
.special-offer .swiper-button-disabled{
 
 display: none !important;
}
.product-card{
    width: calc(calc(100% / 3));
    padding: 10px;

}
.product-slider{
    width: 264px !important;
    border: 1px solid rgb(231,231,231);
    padding: 0 11px;
    border-radius: 6px;
    background: white;
}

.introduction-card-job{
    width: calc(calc(100% / 2) - 8px);
    border: 1px solid rgb(231,231,231);
    border-radius: 4px;
    padding: 0px 8px 16px 7px;
}
.introduction-card-job img{
  height: 199px;
  display: block;
  margin: auto;
}
.special-offer .swiper-slide img,.new-products  .swiper-slide img,.new-products .swiper-slide img{
    width: 100% !important;
    margin-left: auto;
    margin-right: auto;
    height: 131px;
}
.introduction-article-slider .swiper-slide{
  background: white !important;
}

</style>