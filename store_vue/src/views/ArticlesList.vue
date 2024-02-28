<template>
    <div>
        <MenuSection style="background-color: #0284c7"/>
        <TitrSection title="مقالات ما" class="mt-24"/>
        <div class="mx-auto p-3 px-6 mb-10 flex justify-center flex-wrap w-[96%]">
            <div v-for="article in articles" v-bind:key="article.id" v-bind:article="article" style="transition: .3s;" class="hover:shadow-2xl ml-4 mr-4 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative h-[460px]   mb-6 sm:w-[350px] w-[400px] " >
                 <a class="h-5/12">
                     <img class="rounded-t-lg object-none w-full h-[52%]"   :src='"https://api.khoonevar.ir"+article.get_picture_url' alt="">
                 </a>
                 <div class="p-5">
                     <a>
                         <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white font-Lalezar text-center">{{ article.title}}</h5>
                     </a>
                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm text-justify leading-8" style=" overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;">{{ article.summary }}</p>
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
                 </div>
            </div>
          
            <div style="clear: both"></div>
        </div> 
        <FooterSection />
    </div>
</template>
<script>
import FooterSection from '@/components/Footer.vue'
import MenuSection from '@/components/Menu.vue'
import TitrSection from '@/components/TitrSection.vue'
import axios from 'axios'
export default {
    name: 'ArticleSectionPage',
    components: {MenuSection, TitrSection, FooterSection},
    data(){
        return{
            articles: []
        }
    },
    mounted(){
    this.getArticles()
    },
    methods:{
      getArticles(){
        axios.get('articles')
        .then(response=>{
        this.articles = response.data
        // console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
      },
      countArticleDownloads(id){
      axios.post('count_article_downloads', {articleId: id})
      .then(response=>{
    //   console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
      }
    }
}
</script>