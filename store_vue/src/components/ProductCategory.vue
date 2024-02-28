<template>
    <!-- start catergory product -->
      <div>
        <p class="font-Lalezar mt-10 w-11/12 mx-auto text-sky-600">برای مشاهده محصولات مرتبط با هر یک از دسته های زیر روی دسته مربوط کلیک کنید</p>
        <div class=" category-product-container flex my-10 p-15 md:flex-row flex-col md:justify-around justify-center">
          <div v-for="category in categories" v-bind:key="category.id" v-bind:category="category">
            <router-link :to='"products/"+category.name'>
            <div class="relative flex flex-col ">
            <div class="category-product ml-auto mr-auto mt-10">
               <img :src='"https://api.khoonevar.ir" + category.get_picture_url' alt="" class="category-product-image absolute transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-300">
            </div>
             <p class="text-sm font-bold mt-2">{{ category.name }}</p>
          </div>
          </router-link>
          </div>
      </div>
      </div>
      <!-- end catergory product -->
</template>
<script>
import axios from 'axios'
export default {
    name: 'ProductCategory',
    data(){
      return{
        categories : []
      }
    },
    mounted(){
      this.getCategories()
    },
    methods:{
      getCategories(){
        axios.get('index')
        .then(response=>{
          this.categories = response.data["categories"]
          // console.log(response.data)
        })
        .catch(error=>{
        console.log(error.response.data)
      })
      }
    }
}
</script>
<style>
.category-product{
    border-radius: 100%;
    width: 161px;
    height: 161px;
    display: flex;
    justify-content: center;
}

.category-product-image:nth-of-type(1){
    width: 166px;
    height: 166px;
    position: relative;
    top: -10px;
}
.second-image-category-product{
    height: 131px !important;
    top: -8px !important;
    width: 175px !important;
}
.third-image-category-product{
    height: 131px !important;
    top: 5px !important;
    width: 175px !important;
}
.category-product img{
  border-radius: 100%;
}
</style>