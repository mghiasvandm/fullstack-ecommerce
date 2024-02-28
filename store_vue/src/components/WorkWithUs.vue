<template>
    <div>
      <TitrSection title="همکاری با ما"  style="margin-bottom: -115px;"/>
      <div class="p-10 mb-16 flex lg:flex-row-reverse justify-between items-center flex-col lg:mt-0 mt-20">
        <div class="flex flex-col lg:w-5/12">
          <div class="flex justify-center mb-4">
              <div class="introduction-card-job md:w-full w-11/12 xl:w-6/12" >
              <img src="../assets/investor.png">
              <p>سرمایه گذار</p>
            </div>
          </div>
           <div class="flex md:flex-row flex-col md:ml-2 items-center w-full">
              <div class="introduction-card-job w-11/12 lg:mt-0  ">
                <img src="../assets/product-sell.png" class="w-full">
                <p>فروش محصولات خود</p>
              </div>
              <div class="introduction-card-job md:mr-2 w-11/12 md:mt-0 mt-4 ">
                <img class="w-full" src="../assets/delivery.png">
                <p>پیک موتوری</p>
              </div>
          </div>
        </div>
        <form class="flex flex-col lg:items-start lg:-mr-2 lg:w-5/12 w-11/12 mt-14 items-center" @submit.prevent="submitForm">
          <div class="flex w-full sm:flex-row flex-col">
            <input style="outline: none" type="text" class="sm:ml-3 sm:mt-0 mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-hidden" id="name" placeholder="نام" required v-model="name">
            <input pattern="[0]{1}[9]{1}[0-9]{9}" style="outline: none" type="text" class="sm:mr-3 sm:mt-0 mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-hidden" id="phone" placeholder="شماره تلفن" required v-model="phone">
          </div>
          <div class="flex w-full mt-4">
            <textarea required style="outline: none" rows="14" class="mb-7 resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="متن پیام" v-model="description" id="description"></textarea>
          </div>
          <div class="mx-auto mb-1"><vue-recaptcha ref="recaptcha" @verify="onVerify" sitekey="6LfxJ9EhAAAAAHQCbyxaRaI0vTnzMVi6HAgOiRKU"></vue-recaptcha></div>
          <div class="flex w-full mt-4">
              <div style="margin:auto">
                <button class="bg-sky-600 text-white font-bold py-2 px-6 rounded-lg" >ثبت</button>
              </div>
          </div>
        </form>
      </div>
      <div id="toast-success3" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal">درخواست شما با موفقیت ثبت شد</div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success3" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import TitrSection from '@/components/TitrSection.vue'
import { VueRecaptcha } from 'vue-recaptcha';
export default {
    name: 'WorkWithUs',
    components: {TitrSection, VueRecaptcha},
    data(){
      return{
        name:'',
        phone: '',
        robot: false,
        description: '',
      }
    },
    methods:{
      submitForm(){
      if (this.robot) {
        var formData = {
          name:this.name,
          phone:this.phone,
          description:this.description,
        }
        axios.post('cooperation', formData)
        .then((res) => {
          //  console.log(res)
           document.getElementById("toast-success3").style.display = "flex"
           document.getElementById("name").value = ""
           document.getElementById("phone").value = ""
           document.getElementById("description").value = ""
          })
       .catch((error) => {
           console.log(error)
       })
      
      }
      },
      onVerify: function (response) {
      if (response) this.robot = true;
    },
    }
}
</script>