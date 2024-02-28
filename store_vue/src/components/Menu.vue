<template>
    <div class="flex items-center justify-between menu-section h-20 absolute top-0 left-0 right-0 bg-transparent w-full z-10" style="border-bottom: 1px solid #ffffff1a;box-shadow: 0px 0px 6px 0px #eee;">
        <div class="right-menu mr-5 flex items-center">
            <router-link class="text-2xl mr-5 ml-5 text-white font-Lalezar" to="/">خونوار</router-link>
            <div class="relative lg:block hidden">
             <div class="absolute inset-y-0 left-1 top-2 items-center pl-3 pointer-events-none ">
                <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" class="w-96 outline-none pr-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="جستجو" required>
           </div>
        </div>
        <div class="left-menu flex ml-5 items-center">
            <!-- <button>
                <svg class="w-7 h-7 bg-transparent" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;" xml:space="preserve">
                    <g>
	<g>
		<path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
			c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
			c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>
	</g>
                    </g>
                </svg>
            </button> -->
            <button data-modal-toggle="menu-search-modal" style="background: transparent" class="bg-transparent lg:hidden block"><img src="../assets/search-icon.png " alt="" class="w-7 h-7"></button>
            <button  v-if="!this.authenticated" data-modal-toggle="authentication-modal" style="height: 41px;" class="bg-[#3f97f3] mr-7 text-sm text-white rounded-lg px-5 py-0 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 " type="button">
                <svg class="w-6 h-5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                    </path>
                </svg>
                <div class="hidden sm:inline-block">ورود</div>
            </button>
            <button v-if="this.authenticated"  class=" ml-2 mr-5  rounded-lg text-lg py-2 inline-flex" type="button" data-dropdown-toggle="dropdown">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                </path>
            </svg>
            </button>
            <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul  class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault" id="dropUl">
                   <li v-if="staff=='true'">
                    <a href="https://api.khoonevar.ir/5d1158b85ca4e7e0cb7cac74ed587a682809447b541531b25dd4f7fed10cb856/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-Lalezar text-lg" >پنل مدیریت</a>
                   </li>
                   <li>
                     <router-link to="/profile" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-Lalezar text-lg" >پروفایل</router-link>
                  </li>
                  <li @click="logout">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-Lalezar text-lg text-red-500">خروج</a>
                  </li>
                </ul>
            </div>
             <router-link class="bg-transparent relative top-1" to="/shopping-cart">
                <button v-if="this.authenticated" class="mr-4  bg-transparent"><span style="position: absolute;
    top: -9px;
    background: white;
    padding: 0px 5px;
    border-radius: 100%;
    font-size: 10px;
    left: 0px;" id="basketLength">{{ basketLength }}</span><svg fill="white" class="h-8 w-8 text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.123 491.123" style="enable-background:new 0 0 491.123 491.123;" xml:space="preserve">
                    <g>
                    	<g>
                    		<path d="M470.223,0.561h-89.7c-9.4,0-16.7,6.3-19.8,14.6l-83.4,263.8h-178.3l-50-147h187.7c11.5,0,20.9-9.4,20.9-20.9 s-9.4-20.9-20.9-20.9h-215.9c-18.5,0.9-23.2,18-19.8,26.1l63.6,189.7c3.1,8.3,11.5,13.6,19.8,13.6h207.5c9.4,0,17.7-5.2,19.8-13.6 l83.4-263.8h75.1c11.5,0,20.9-9.4,20.9-20.9S481.623,0.561,470.223,0.561z"/>
                    		<path d="M103.223,357.161c-36.5,0-66.7,30.2-66.7,66.7s30.2,66.7,66.7,66.7s66.7-30.2,66.7-66.7S139.723,357.161,103.223,357.161z  M128.223,424.861c0,14.6-11.5,26.1-25,26.1c-13.6,0-25-11.5-25-26.1s11.5-26.1,25-26.1 C117.823,398.861,129.323,410.261,128.223,424.861z"/>
                    		<path d="M265.823,357.161c-36.5,0-66.7,30.2-66.7,66.7s30.2,66.7,66.7,66.7c37.5,0,66.7-30.2,66.7-66.7 C332.623,387.361,302.323,357.161,265.823,357.161z M290.923,424.861c0,14.6-11.5,26.1-25,26.1c-13.5,0-25-11.5-25-26.1 s11.5-26.1,25-26.1C280.423,398.861,291.923,410.261,290.923,424.861z"/>
                    	</g>
                    </g>
                </svg></button>
             </router-link>
        </div>
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button data-modal-toggle="authentication-modal" type="button" class="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white font-Lalezar">ورود به سایت</h3>
                <form class="space-y-6" @submit.prevent="login">
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-Lalezar text-right">شماره موبایل</label>
                        <input pattern="[0]{1}[9]{1}[0-9]{9}" type="text" name="phone" class="font-Vazir bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required v-model="username">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-Lalezar text-right">رمز عبور</label>
                        <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required v-model="password">
                    </div>
                    <div class="flex justify-between">
                        <a href="https://khoonevar.ir/forgot-pass" class="text-sm text-red-700 dark:text-blue-500 font-Vazir">فراموشی رمز عبور</a>
                    </div>
                    <div class="bg-red-500 w-full p-2 py-4 rounded " v-if="errors.length">
                        <p class="text-white text-right font-Vazir text-sm" v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-Lalezar">ورود</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                       <a href="https://khoonevar.ir/sign-up" class="text-blue-700 dark:text-blue-500 font-Vazir">ساخت حساب</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div> 
    <div id="menu-search-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="menu-search-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-6 text-center">
                        <h1 class="text-xl font-Lalezar text-center mb-4 mt-1">جستجو در سایت</h1>
                        <input type="text"  class="font-Vazir mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جستجو" required >
                        <button data-modal-toggle="menu-search-modal" class="bg-[#0284c7] text-white font-bold py-2 px-6 rounded-lg font-Lalezar">ثبت</button>
                    </div>
                </div>
    
            </div>
    </div>
    <div id="toast-success" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal">با موفقیت وارد شدید</div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    <div id="toast-success2" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal">با موفقیت خارج شدید</div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success2" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </div>    
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'MenuSection',
    data(){
        return{
            username: '',
            password: '',
            authenticated: localStorage.getItem('authenticated'),
            staff: localStorage.getItem('staff'),
            name: localStorage.getItem('name'),
            errors: [],
            basketLength: null
        }
    },
    mounted(){
        this.getBasketLength();
        document.title = 'خونوار'
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'icon';
        link.href = 'https://i.ibb.co/3zhQNSt/logo.jpg';
        document.getElementsByTagName('head')[0].appendChild(link);
    },
    methods:{
        getBasketLength(){
            if(localStorage.getItem("token") != null){
            axios.get("basket_length", {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
            .then(response => {
            // console.log(response.data);
            this.basketLength = response.data["basketLength"]
            // console.log(basketLength);
          })
          .catch(error=>{
          console.log(error)
        })
            }
        },
        login(){
            this.errors = []
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("authenticated")
            localStorage.removeItem("staff")
            localStorage.removeItem("name")

            const formData = {
                username: this.username,
                password: this.password
            }
        

            axios.post("api/v1/token/login/", formData)
                .then(response => { 
                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token

                    localStorage.setItem("token", token)
                    localStorage.setItem("authenticated", true)
                    axios.get(`get_position`, {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
                    .then(response=>{
                    // console.log(response.data)
                    localStorage.setItem("staff", response.data["staff"])
                    localStorage.setItem("name", response.data["name"])
                    })
                    .catch(error=>{
                   console.log(error);
            })
                    document.getElementById("toast-success").style.display = "flex"
                    
                    setTimeout(function(){
                        window.location.reload();
                    }, 1500);
                         this.$emit('close');
                })
                .catch(error=>{
                   this.errors.push('شماره موبایل یا رمز ورود نادرست می باشد')
                    
            })

        },
        logout(){
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("authenticated")
            localStorage.removeItem("staff")
            localStorage.removeItem("name")
            this.$store.commit('removeToken')
            document.getElementById("toast-success2").style.display = "flex"
             setTimeout(function(){
                        window.location.reload();
                    }, 1500);
        }
    },
}
</script>