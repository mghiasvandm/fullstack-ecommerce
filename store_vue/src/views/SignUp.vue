<template>
    <div class="flex min-h-screen w-full items-center  justify-center flex-col sm:px-0 px-3  pb-16 pt-20">
        <MenuSection style="background-color: #0284c7"/>
        <div class="mt-20 bg-white dark:bg-dark-930 dark:shadow-whiteShadow  py-4 sm:px-13 px-5 rounded-2xl shadow-sm  sm:w-[467px] w-11/12">
            <h1 class="font-Lalezar text-2xl">ثبت نام در سایت</h1>
            <p class="text-sm text-gray-500 mt-3 mb-5">با پر کردن این فرم در سایت ما ثبت نام کنید !</p>
            <form @submit.prevent="signUpForm">
              <div class="mb-6">
                 <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">نام</label>
                 <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="first_name">
              </div>
              <div class="mb-6">
                 <label for="family" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">نام خانوادگی</label>
                 <input type="text" id="family" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="last_name">
              </div>
              <div class="mb-6">
                 <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">شماره موبایل</label>
                 <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="phone">
              </div>
            <div class="mb-6">
                 <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">رمز عبور</label>
                 <input type="password" id="password1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="password">
              </div>
              <div class="mb-6">
                 <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">تکرار رمز عبور</label>
                 <input type="password" id="password2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="confirmPassword">
              </div>
              <div class="rounded-lg shadow bg-sky-600 mb-6">
                <p v-for="error in errors" v-bind:key="error" class="text-white font-Lalezar mt-0 mb-1 p-2 text-lg">{{error}}</p>
              </div>
              <button @click="showOtpModal" id="sendOtp" type="submit" class="text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">ارسال رمز عبور یکبار مصرف</button>
              
            </form>
        </div>
        <div id="otg-modal" tabindex="-1" aria-hidden="true" class="mt-20 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center">
             <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 left-2.5 text-gray-400 bg-trans hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" @click="showOtpModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
                <p class="mb-4 font-Lalezar text-lg">کد با موفقیت ارسال شد لطفا کد را وارد کنید</p>
                <form class="space-y-6" @submit.prevent="otpForm">
                    <div>   
                        <label for="password" class="font-Vazir text-right block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">رمز یکبار مصرف شما</label>
                        <input  pattern="[0-9]{5}" name="password" id="otp-pass" class="font-Vazir bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required v-model="otp">
                    </div>
                    <div class="rounded-lg shadow bg-sky-600 mb-6">
                <p v-for="otpError in otpErrors" v-bind:key="otpError" class="text-white font-Lalezar mt-0 mb-1 p-2 text-lg">{{otpError}}</p>
              </div>
                    <button class="mx-auto text-sm font-Lalezar text-white p-3 rounded-md flex items-center mb-2 bg-sky-600">ثبت کد</button> 
                </form>
                 <p class="text-sm text-red-600 font-Lalezar w-[95%] mx-auto mt-2">در صورتی که بعد از دو دقیقه رمز یکبار مصرف را دریافت نکردید مجددا روی دکمه ارسال رمز کلیک کنید</p>
            </div>
        </div>
             </div>
        </div> 
        <div id="toast-success8" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4   text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal flex flex-row-reverse items-center">ثبت نام با موفقیت انجام شد. لطفا وارد حساب کاربری خود بشوید</div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success8" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
   
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import MenuSection from '@/components/Menu.vue'
export default {
    name: 'SignUp',
    components: {MenuSection},
    data(){
        return{
            first_name: '',
            last_name: '',
            phone: '',
            password: '',
            confirmPassword: '',
            otp: '',
            errors: [],
            otpErrors: []
        }
    },
    mounted(){
        if(localStorage.getItem('token')){
            this.$router.push('/')
        }
        else{
            if(localStorage.getItem('disabled') == 'true'){
            this.disableButton()
        }
        }
    },
    methods:{
        disableButton(){
             localStorage.setItem('disabled', true)
             document.getElementById("sendOtp").disabled = true;
             setTimeout(function(){document.getElementById("sendOtp").disabled = false;},120000);
             setTimeout(function(){localStorage.setItem('disabled', false);},120001);
        },
        showOtpModal(){
            this.errors = []
                if (this.first_name === '') {
                    this.errors.push('لطفا نام خود را وارد کنید')
                }
                if (this.last_name === '') {
                    this.errors.push('لطفا نام خانوادگی خود را وارد کنید')
                }
                if (this.phone === '') {
                    this.errors.push('لطفا شماره موبایل خود را وارد کنید')
                }
                if (this.password === '') {
                    this.errors.push('لطفا رمز عبور  خود را وارد کنید')
                }
                if (this.password.length < 6 ) {
                    this.errors.push('رمز شما باید حداقل دارای 6 رقم باشد')
                }
                if (this.confirmPassword === '') {
                    this.errors.push('لطفا رمز عبور خود را تایید کنید')
                }
                if(this.phone != ''){
                    if(/^([0]{1}[9]{1}[0-9]{9})$/.test(this.phone) == false)
                         {
                             this.errors.push("شماره موبایل نا متعبر است")
                         }
                }
                
                if(this.password !== this.confirmPassword){
                    this.errors.push("رمز ها با هم مطابقت ندارند")
                }
                if(!this.errors.length){
                     if(document.getElementById("otg-modal").className == "mt-20 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center"){
                    document.getElementById("otg-modal").className = "mt-20 block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center"
                    document.getElementsByClassName("black-background")[0].style.display = "block"
                    this.disableButton()
                }
                    else{
                     document.getElementById("otg-modal").className = "mt-20 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center"
                     document.getElementsByClassName("black-background")[0].style.display = "none"
                }
                }
            
        },
        signUpForm(){
           
            localStorage.setItem('phone', this.phone)
            const formData = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    phone: this.phone,
                    password: this.password
            }
            axios.post('fake', formData)
            .then(response => {
                if(response.status == 200) { 
                }
            })
            .catch(error=>{
            })
            }
        },
        otpForm(){
            this.otpErrors = []
            const formData = {
                phone: localStorage.getItem('phone'),
                otp: this.otp
            }
            axios
                .post("otp", formData)
                .then(response => {
                    document.getElementById("toast-success8").style.display = "flex"
                })
            .catch(error=>{
                this.otpErrors.push("رمز یکبار مصرف خود را صحیح وارد نمایید")
            })
        }
        
}
</script>
<style>
</style>