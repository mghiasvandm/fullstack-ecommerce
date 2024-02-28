<template>
    <div class="article-slider flex justify-center items-center flex-col lg:flex-row lg:w-[95%] mx-auto">
        <div class="md:w-2/6 w-11/12">
          <div class="introduction-article-slider w-full mx-auto md:mx-none relative 2xl:right-12 right-0 -mt-10">
            <!-- <TitrSection title="مقالات ما"/> -->
            <p class="text-justify mr-5 text-gray-400 w-10/12 mx-auto">در اینجا مقالات ی درباره پروتئین، ماهی و ... می بینید. امیدوارم از خواندن آنها لذت ببرید</p>
            <div class="flex mt-10 relative lg:right-5 items-end justify-center mb-16 lg:mb-0">
                <svg class="dark:text-gray-930 text-gray-920 ml-16 transform sm:mt-0 lg:mt-6 sm:rotate-0 rotate-215" width="81" height="25" viewBox="0 0 81 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.1967 14.3986C25.5868 13.9847 22.0069 13.342 18.4784 12.4745C16.792 12.0466 12.2026 11.5965 11.3659 10.0623C14.4789 9.24078 17.802 9.66713 20.9105 8.43793C22.2549 7.90469 24.0976 7.15477 24.3908 5.52325C24.8311 3.10397 22.5994 3.77298 21.0294 3.94254C17.6692 4.3178 14.1955 4.26364 10.8129 4.37265C8.21636 4.45288 2.1991 3.36004 0.75924 6.3001C-0.680619 9.24016 3.70799 12.3632 5.54259 14.087C8.50795 16.9111 11.4369 19.7705 14.422 22.5651C15.2426 23.339 16.7726 25.1362 18.1266 24.8437C19.9916 24.4238 19.3821 22.6707 18.7377 21.448C18.3268 20.6539 12.3485 13.2275 12.3318 13.2334C12.9125 13.059 16.0756 14.503 16.5971 14.6724C18.7851 15.3399 21.0082 15.8863 23.2564 16.3091C29.1409 17.505 35.2798 18.8366 41.3307 18.5846C44.1562 18.4613 46.2644 17.4415 48.7901 16.4024C51.1811 15.4181 53.2468 16.8916 55.7475 17.5098C60.9531 18.7403 66.3814 18.6725 71.5546 17.3125C75.0607 16.4128 83.0583 13.2526 79.9898 8.14036C79.1913 6.81046 77.6537 5.8984 77.713 7.71002C77.7492 8.94395 78.6421 9.14417 78.0975 10.5525C77.6207 11.4769 76.8129 12.1875 75.8353 12.5428C71.3525 14.7964 64.9792 15.3272 60.1138 14.7865C58.2671 14.554 54.5964 13.8444 53.1131 12.6278C51.7956 11.5519 52.7224 10.088 52.4922 8.17502C51.8776 3.22806 46.3507 -1.37941 41.1423 0.48748C33.6157 3.20407 42.2988 11.4021 45.8298 13.4113C42.1694 16.6785 33.3853 14.926 29.1967 14.3986ZM44.3831 4.04077C48.1118 4.66985 49.1864 7.04037 48.6529 10.4538C47.4697 9.70609 38.6072 3.3136 44.3831 4.04077C45.0235 4.15333 43.8802 3.97745 44.3831 4.04077Z" fill="currentColor"></path>
                </svg>
                <p>ورق بزنید</p>
               
            </div>
            
        </div>
         <router-link to="/articles"><button class="bg-sky-600 p-2 font-Lalezar rounded shadow text-white lg:mt-10 mt-0 mb-10">مشاهده تمامی مقالات</button></router-link>
        </div>
        <!-- <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper w-4/6">
            <swiper-slide>
                <img src="https://wallpaperaccess.com/full/1218219.jpg" class="rounded-md h-10 w-4/5">
                <p style="color:black;font-size:19px;width: 91%;" class="font-medium mt-3">تهیه پرورش ماهی در پرورشگاه</p>
                <p style="color:black;font-size:17px;width: 91%" class="font-light mt-3 text-justify leading-10	">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </swiper-slide>
             <swiper-slide>
                <img src="https://wallpaperaccess.com/full/1218219.jpg" class="rounded-md h-10 w-4/5">
                <p style="color:black;font-size:19px;width: 91%;" class="font-medium mt-3">تهیه پرورش ماهی در پرورشگاه</p>
                <p style="color:black;font-size:17px;width: 91%" class="font-light mt-3 text-justify leading-10	">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </swiper-slide>
             <swiper-slide>
                <img src="https://wallpaperaccess.com/full/1218219.jpg" class="rounded-md h-10 w-4/5">
                <p style="color:black;font-size:19px;width: 91%;" class="font-medium mt-3">تهیه پرورش ماهی در پرورشگاه</p>
                <p style="color:black;font-size:17px;width: 91%" class="font-light mt-3 text-justify leading-10	">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </swiper-slide>
             <swiper-slide>
                <img src="https://wallpaperaccess.com/full/660691.jpg" class="rounded-md h-10 w-4/5">
                <p style="color:black;font-size:19px;width: 91%;" class="font-medium mt-3">تهیه پرورش ماهی در پرورشگاه</p>
                <p style="color:black;font-size:17px;width: 91%" class="font-light mt-3 text-justify leading-10	">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </swiper-slide>
        </swiper> -->
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide class="h-[510px]"  v-for="article in articles" v-bind:key="article.id" v-bind:article="article">
              <input type="hidden" style="display: none" :value="article.title" id="articleTitle">
                <img :src='"https://api.khoonevar.ir"+article.get_picture_url' class="rounded-md h-10 w-4/5" >
                <p style="color:black;font-size:19px;width: 91%;" class="font-medium mt-3">{{ article.title }}</p>
                <p style="overflow: hidden;color:black;font-size:17px;overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;" class="font-light mt-3 text-justify leading-10	" >{{ article.summary }}</p>
                <div class="flex justify-between items-baseline w-full">
                        <div class="flex items-baseline relative top-2">
                            <svg class="w-5 h-5 fill-gray-600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve">
                                <g>
	<g>
		<path d="M329.2,327.2c-4.5,0-8.1,3.4-8.6,7.9c-3.9,38.6-36.5,68.7-76.2,68.7c-39.6,0-72.2-30.1-76.2-68.7
			c-0.5-4.4-4.1-7.9-8.6-7.9h-104c-21.8,0-39.5,17.7-39.5,39.5v82.8c0,21.8,17.7,39.5,39.5,39.5h377.8c21.8,0,39.5-17.7,39.5-39.5
			v-82.7c0-21.8-17.7-39.5-39.5-39.5H329.2V327.2z"/>
		<path d="M303.5,198.6l-30.9,30.9V28.1C272.6,12.6,260,0,244.5,0l0,0c-15.5,0-28.1,12.6-28.1,28.1v201.4l-30.9-30.9
			c-9.5-9.5-24.7-11.9-35.9-4.4c-15.3,10.2-16.8,31.1-4.5,43.4l82.8,82.8c9.2,9.2,24.1,9.2,33.3,0l82.8-82.8
			c12.3-12.3,10.8-33.2-4.5-43.4C328.2,186.6,313,189,303.5,198.6z"/>
	</g>
                                </g>
                            </svg>
                            <p class="mr-2 text-sm font-Lalezar text-sky-600">{{ article.views }}</p>
                        </div>
                        <a @click="countArticleDownloads(article.id)" :href='"https://api.khoonevar.ir"+article.get_file_url' class="absolute bottom-4 left-4 flex  justify-between bg-sky-600 items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg font-Vazir ">
                      <p>دانلود مقاله</p>
                      <svg aria-hidden="true" class="ml-0.5 mr-1 w-4 h-4 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </div>
            </swiper-slide> 
          
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import axios from 'axios'
// import required modules
import { EffectCards } from "swiper";
import TitrSection from '@/components/TitrSection.vue';
export default {
    name: 'ArticleSectionSlider',
    components: {
    Swiper,
    SwiperSlide,
    TitrSection
    },
    setup() {
    return {
      modules: [EffectCards],
      
    };
    
  },
  data(){
      return{
        articles: [],
      }
    },
    mounted(){
    this.getArticles()
    },
    methods:{
      getArticles(){
        axios.get('index')
        .then(response=>{
        this.articles = response.data["articles"]
        // console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
      },
      countArticleDownloads(id){
        // console.log(id);
      axios.post('count_article_downloads', {articleId: id})
      .then(response=>{
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
.article-slider .swiper {
  width: 500px;
}
@media(max-width: 600px){
  .article-slider .swiper {
    width: 76%;
  }
}

.article-slider .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 7px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  flex-direction: column;
  border: 1px solid rgb(231,231,231);
  padding: 35px 10px;
}
.article-slider .swiper-slide img{
    height: 200px !important;
    width: 90%;
}
/* .article-slider .swiper {
  width: 240px;
  height: 320px;
}

.article-slider .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.article-slider .swiper-slide {
  background-color: rgb(206, 17, 17);
} */


</style>