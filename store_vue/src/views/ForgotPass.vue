<template>
    <div class="flex justify-center flex-col items-center pt-20">
      <MenuSection style="background-color: #0284c7"/>
        <div class="bg-white lg:w-5/12 md:w-7/12 w-11/12 p-4 mt-10 py-8 rounded shadow border-2 border-[#efefef] border-solid mb-20">
            <h1 class="font-Lalezar text-2xl text-center ">رمز تان را فراموش کرده اید؟</h1>
            <p class="font-Vazir text-sm text-center mt-4">با پر کردن این فرم رمز جدید را برای خود تنظیم کنید</p>
            <form class="mt-8" @submit.prevent="forgotPass">
                <div class="mb-4">
                  <label for="username" class="block mb-2 text-sm font-medium  dark:text-gray-300 font-Lalezar text-right text-lg">شماره تلفن</label>
                  <input type="tel" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  v-model="username">
                </div>
                <div class="mb-4">
                  <label for="password1" class="block mb-2 text-sm font-medium  dark:text-gray-300 font-Lalezar text-right text-lg">رمز عبور</label>
                  <input type="password" id="password1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  v-model="password"> 
                </div>
                <div class="mb-8">
                  <label for="password2" class="block mb-2 text-sm font-medium  dark:text-gray-300 font-Lalezar text-right text-lg">تکرار رمز عبور</label>
                  <input type="password" id="password2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   v-model="confirmPassword">
                </div>
                <div class="rounded-lg shadow bg-sky-600 mb-6">
                        <p v-for="error in errors" v-bind:key="error" class="text-white font-Lalezar mt-0 mb-1 p-2 text-lg">{{error}}</p>
                    </div>
                <div class="mb-1">
                    <button type="submit" class="text-white bg-[#007aff]  font-medium rounded-lg px-5 py-2.5 text-center font-Lalezar text-lg">ثبت</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import MenuSection from '@/components/Menu.vue'
export default {
    name: 'ForgotPass',
    components: {MenuSection},
    data(){
        return{
            username: '',
            password: '',
            confirmPassword: '',
            errors: []
        }
    },
    mounted(){
        if(localStorage.getItem('token')){
            this.$router.push('/')
        }
    },
    methods:{
      forgotPass(){
        this.errors = []
                if (this.username === '') {
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
                if(this.username != ''){
                    if(/^([0]{1}[9]{1}[0-9]{9})$/.test(this.username) == false)
                         {
                             this.errors.push("شماره موبایل نا متعبر است")
                         }
                }
                
                if(this.password !== this.confirmPassword){
                    this.errors.push("رمز ها با هم مطابقت ندارند")
                }
        const formData = {
                username: this.username,
                password: this.password
            }
          axios.post("forget_password", formData).then(response => { 
          })
          .catch(error=>{
              if(this.username != ""){
                this.errors.push("کاربری با این شماره موبایل یافت نشد")
              }
            })
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("authenticated")
            localStorage.removeItem("staff")
            localStorage.removeItem("name")
            this.$store.commit('removeToken')
      }
    }
}
</script>