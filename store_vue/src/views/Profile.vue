<template>
    <div>
        <MenuSection style="background-color: #0284c7"/>
        <div id="alert-2" class="mt-20 flex p-4 -mb-24 bg-red-100 rounded-lg dark:bg-red-200 lg:w-6/12 md:w-9/12 w-10/12 mx-auto justify-between" role="alert">
          <div class="flex items-center">
            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              <p class="font-Lalezar text-[16px] mr-2">توجه !!! لطفا پروفایل خود را با دقت پر کنید زیرا سفارشات به مشخصات زیر ارسال می شود</p>
          </div>
          </div>
          <button type="button" class="-mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
 <div id="toast-success5" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4   text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal flex flex-row-reverse items-center">اطلاعت شما با موفقیت ثبت شدند</div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success5" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
        <p class="text-center mt-36 font-Lalezar text-3xl ">پروفایل شما</p>
        <div class=" mt-4 bg-white dark:bg-dark-920 rounded-2xl md:px-4 px-3 sm:py-5 py-2 lg:w-6/12 md:w-9/12 w-10/12 mx-auto">
             <form @submit.prevent="submitForm">
                 <div class="flex md:flex-row flex-col ">
                    <div class="mb-6 md:w-2/4 w-full md:ml-2">
                     <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">نام </label>
                    <input name="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-[#f4f6f8]" required :value="first_name">
              </div>
                    <div class="mb-6 md:w-2/4 w-full md:mr-2">
                       <label for="family" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">نام خانوادگی</label>
                    <input name="family" type="text" id="family" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-[#f4f6f8]" required :value="last_name">
              </div>
              </div>
                <div class="flex md:flex-row flex-col">
                    <div class="mb-6 md:w-2/4 w-full md:ml-2">
                       <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">شماره موبایل</label>
                    <input name="phone" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-[#f4f6f8]" required :value="phone">
                    </div>
                     <div class="mb-6 md:w-2/4 w-full md:mr-2">
                       <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">ادرس منزل</label>
                    <input  name="address" type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none bg-[#f4f6f8]" required :value="address">
                    </div>
                </div>
              <div id="app_map" class="w-full rounded-lg relative z-0 mb-6"></div>
               <div class="mt-5">
                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">لوکیشن منزل</label>
              <input :value="location" id="location" required type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 locations-input border-none bg-[#f4f6f8]">
               </div>
               <button data-modal-toggle="otg-modal" type="submit" class="mt-6 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">ثبت</button>
             </form>
        </div>
    </div>
</template>
<script>
import MenuSection from '@/components/Menu.vue'
import axios from 'axios';
export default {
    name: 'ProfilePage',
    components: {MenuSection},
    data(){
      return{
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        location: '',
      }
    },
    mounted(){
      if(!localStorage.getItem('token')){
            this.$router.push('/')
        }
        else{
          this.getProfileField()
      $(document).ready(function() {
        var app = new Mapp({
    element: '#app_map',
    presets: {
      latlng: {

        lat: 35.73249,
        lng: 51.42268
      },
      zoom: 10
    },
    apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBjODYyY2NiODZmNWQ2ZWYwYjQ2MDRhNTY4N2I1MmIzOWVjZDliZmMyODIzYzkzMzUwZGJhZGU4OTIxZGY1ODU4ZDkxMjhmMWVkOGUzNGFjIn0.eyJhdWQiOiIxOTAwMyIsImp0aSI6IjBjODYyY2NiODZmNWQ2ZWYwYjQ2MDRhNTY4N2I1MmIzOWVjZDliZmMyODIzYzkzMzUwZGJhZGU4OTIxZGY1ODU4ZDkxMjhmMWVkOGUzNGFjIiwiaWF0IjoxNjU5NzgyOTk4LCJuYmYiOjE2NTk3ODI5OTgsImV4cCI6MTY2MjM3NDk5OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.LOGeSd2DQRRDXm4CSlw1Kqiy7WcOmGKalzQ5y8cO_-SjX2hMiJG8LTQ74xxma4oQP0eGpeDRWL0A1P00tL70A_ZMRJvxECzRNpf6_90AmWiusSJGZYEEro8PZSWXjM5xQ_ArGz-EdZawHUj7jcrEudvVthO4mQ2cNfSxAQ2o8DwQ_ggDLIKxVGmHAA2A1v_g1Wg_z0hnZH6_SQJJHPwjQaY4JNC2QHJNCVGxA1DGGWfGW-ysZcV0qhZv0XWv-UOfgeBBX2Hzmler862sFSAQTO1RFVoKC54KNOCTFfXE1yXwhEatFvsy5yfneigvUsQzLDmfkIR-Ueds2eMqZOxWag'
  });
  app.addLayers();
  app.map.on('click', function(e) {
    app.findReverseGeocode({
      // state: {
      //   latlng: {
      //     lat: e.latlng.lat,
      //     lng: e.latlng.lng
      //   },
      //   zoom: 16
      // },
      after: function(data){
        app.addMarker({
          name: 'advanced-marker',
          latlng: {
              lat: e.latlng.lat,
              lng: e.latlng.lng,
          },
          // icon: crosshairIcon,
          popup: {
              title: {
                  i18n: 'آدرس ',
              },
              description: {
                  i18n: data.address,
              },
              class: 'marker-class',
              // open: true
          },
        });
         document.getElementsByClassName('locations-input')[0].value = data.address;
      }
    });
    app.showReverseGeocode({
      state: {
        latlng: {
          lat: e.latlng.lat,
          lng: e.latlng.lng
        },
        zoom: 16
      }
    });
    
    // برای سفارشی سازی نمایش نتیجه به جای متد بالا از متد زیر میتوان استفاده کرد
    // app.findReverseGeocode({
    //   state: {
    //     latlng: {
    //       lat: e.latlng.lat,
    //       lng: e.latlng.lng
    //     },
    //     zoom: 16
    //   },
    //   after: function(data) {
    //     app.addMarker({
    //       name: 'advanced-marker',
    //       latlng: {
    //         lat: e.latlng.lat,
    //         lng: e.latlng.lng
    //       },
    //       icon: app.icons.red,
    //       popup: {
    //         title: {
    //           i18n: 'آدرس '
    //         },
    //         description: {
    //           i18n: data.address
    //         },
    //         class: 'marker-class',
    //         open: true
    //       }
    //     });
    //   }
    // });
  });
});
        }
    },
    methods:{
      getProfileField(){
          axios.get('users', {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
          .then(response => { 
            // console.log(response.data)
            this.first_name = (response.data[0])["first_name"]
            this.last_name = (response.data[0])["last_name"]
            this.last_name = (response.data[0])["last_name"]
            this.phone = (response.data[0])["username"]
            this.address = (response.data[0])["address"]
            this.location = (response.data[0])["location"]
          })

      },
      submitForm(){
        const formData = {
          first_name : document.getElementById('name').value,
          last_name: document.getElementById('family').value,
          username: document.getElementById('phone').value,
          address : document.getElementById('address').value,
          location : document.getElementById('location').value,
        }
        axios.post('edit_profile',formData, {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
        .then(response=>{
          // console.log(response.data)
           document.getElementById("toast-success5").style.display = "flex"
        })
        .catch(error=>{
          console.log(error.response.data)
        })
      }
    }
}
</script>
<style>
#app_map {
    height: 400px;
    margin: 0 auto 0px auto;
    display: block;
    overflow: hidden;
    position: relative;
    margin-top: 27px;
}
</style>