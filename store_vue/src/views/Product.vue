<template>
    <div>
        <MenuSection style="background-color: #0284c7"/>
        <div id="alert-4" class="mt-20 flex p-4 -mb-24 bg-red-100 rounded-lg dark:bg-red-200 w-full mx-auto justify-between" role="alert">
          <div class="flex items-center">
            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              <p class="font-Lalezar text-[16px] mr-2">لطفا برای ثبت سفارش و ثبت نظر وارد حساب کاربری خود شوید</p>
          </div>
          </div>
          <button type="button" class="-mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-4" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="border-2 border-[#efefef] border-solid w-11/12 product-page  rounded-lg shadow-lg  relative top-32  py-8  mx-auto bg-white pl-8">
            <div class="w-full md:my-20  flex items-center lg:flex-row flex-col" data-modal-toggle="selectNumberProduct">
                <div class="lg:w-6/12 w-11/12 mx-auto lg:mb-0 mb-6 lg:left-0  -left-4 relativef">
                    <swiper :effect="'flip'" :grabCursor="true" :navigation="true" :modules="modules" class="mySwiper lg:w-80 w-full h-80 mx-auto">
                        <swiper-slide><img class="object-none" :src='"https://api.khoonevar.ir"+product.get_picture1_url' /></swiper-slide>
                        <swiper-slide><img class="object-none" :src='"https://api.khoonevar.ir"+product.get_picture2_url'/></swiper-slide>
                            </swiper>
                </div>
                <div class="lg:w-6/12 w-11/12 mx-auto flex-col items-start">
                    <div class="flex justify-between items-center border-b-2 border-[#efefef] border-solid pb-5">
                        <h1 class="text-xl text-gray-600  text-right">{{ product.name }}</h1>
                        <div class="flex items-center"  v-if="product.star != 0 && product.star != null">
                             <svg class="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">
                                <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                              </svg>
                              <p class="text-sm text-gray-400 relative right-2 top-1">{{ product.star }}</p>
                            </div>
                            <div v-if="product.star == null || product.star == 0">
                                <img src="../assets/no-star.png" alt="" class="w-1 h-1" style="width:27px !important; height:27px !important">
                        </div>
                    </div>
                    <div class="flex mt-5 items-center">
                        <svg class="ml-4 w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-sky-600" d="M11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill="#212121"/>
                            <path class="fill-sky-600" d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="#212121"/>
                        </svg>
                        <p class="ml-3">دسته : </p>
                        <p class="text-sky-600">{{ product.tag }}</p>
                    </div>
                    <div class="flex mt-5 items-center justify-between border-b-2 border-[#efefef] border-dashed pb-5">
                        <div class="flex items-center">
                            <svg class="ml-4 w-6 h-6 fill-sky-600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.848 25.848" style="enable-background:new 0 0 25.848 25.848;" xml:space="preserve">
                                <g>
                                	<path class="fill-sky-600" d="M25.839,4.958c0,3.927-1.712,6.78-1.784,6.899c-0.145,0.237-0.396,0.367-0.655,0.367 c-0.136,0-0.273-0.036-0.397-0.111c-0.362-0.22-0.478-0.691-0.259-1.053c0.016-0.026,1.561-2.623,1.561-6.102 c0-1.984-1.29-3.424-3.068-3.424c-1.692,0-3.068,1.376-3.068,3.069c0,0.721,0.349,2.553,0.483,3.198 c0.087,0.415-0.18,0.821-0.595,0.908c-0.415,0.085-0.821-0.18-0.907-0.594c-0.053-0.253-0.517-2.502-0.517-3.512 C16.633,2.065,18.698,0,21.237,0C23.86,0,25.839,2.131,25.839,4.958z M21.367,6.165c0.305,2.549,0.747,7.516,0.239,8.022 L10.46,25.334c-0.685,0.686-1.798,0.686-2.484-0.001l-7.453-7.452c-0.686-0.685-0.686-1.798,0-2.484L11.67,4.251 c0.177-0.177,2.105-0.185,4.273-0.072C15.931,4.322,15.9,4.457,15.9,4.603c0,0.556,0.123,1.418,0.252,2.176 c-0.227,0.337-0.36,0.742-0.36,1.179c0,1.164,0.944,2.108,2.108,2.108s2.108-0.944,2.108-2.108c0-0.717-0.359-1.349-0.906-1.729 C18.99,5.562,18.9,4.918,18.9,4.603c0-0.068,0.014-0.131,0.02-0.198c0.267,0.028,0.53,0.057,0.779,0.088 C21.172,4.674,21.187,4.671,21.367,6.165z M15.426,14.507c-0.173-0.481-0.461-1.058-1.086-1.722l0.846-0.847l-0.942-0.941 l-0.913,0.914c-1.222-0.837-2.482-0.769-3.337,0.086c-0.932,0.932-0.712,2.115-0.028,3.49c0.47,0.952,0.556,1.5,0.191,1.865 c-0.375,0.375-0.98,0.212-1.529-0.336c-0.624-0.624-0.99-1.395-1.172-2.02l-1.414,0.838c0.164,0.566,0.606,1.373,1.23,2.037 L6.35,18.794l0.941,0.942l0.991-0.99c1.307,0.922,2.625,0.798,3.48-0.057c0.875-0.877,0.952-1.857,0.202-3.414 c-0.52-1.116-0.645-1.664-0.337-1.971c0.27-0.27,0.75-0.347,1.375,0.278c0.693,0.693,0.923,1.366,1.048,1.722L15.426,14.507z"/>
                                </g>
                            </svg>
                            <p>قیمت</p>
                        </div>
                        <div>
                            <div class="flex">
                                <p>هر واحد </p>
                                <p class="ml-2 mr-2" id="price-unit">{{ product.price2 }}</p> 
                                <p>تومان</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex mt-5 items-start justify-between pb-5 flex-col ">
                       <div class="flex items-center w-full justify-center">
                        <select @change="getProductStockAndQuantityAndPrices" v-if="product['weight_dependency'] == false" style="background: #fff url(https://www.karajgasht24.ir/wp-content/plugins/chartex_plugin/includes/styleDefault/arrow-select.png) no-repeat left 0.75rem center / 10px auto;" id="ammount" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-10">
                            <option selected id="selected">انتخاب وزن</option>
                            <option v-for="productAmmount in productAmmounts" v-bind:key="productAmmount" v-bind:productAmmount="productAmmount">{{ productAmmount }}</option>
                        </select>
                        <div class="w-40 shadow-lg h-10 border-2 border-[#efefef] border-solid flex items-center justify-around flex-row-reverse">
                            <button @click="minesCounterProduct" class="outline-none">
                                <svg class="w-4 h-4 fill-sky-600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.703 55.704" style="enable-background:new 0 0 55.703 55.704;" xml:space="preserve">
                                    <g>
                                    	<g>
                                    		<path d="M27.851,0C12.495,0,0,12.495,0,27.852s12.495,27.851,27.851,27.851c15.357,0,27.852-12.494,27.852-27.851
                                    			S43.209,0,27.851,0z M27.851,51.213c-12.882,0-23.362-10.48-23.362-23.362c0-12.882,10.481-23.362,23.362-23.362
                                    			c12.883,0,23.364,10.48,23.364,23.362C51.215,40.733,40.734,51.213,27.851,51.213z"/>
                                    		<path d="M38.325,25.607H17.379c-1.239,0-2.244,1.005-2.244,2.244c0,1.239,1.005,2.245,2.244,2.245h20.946
                                    			c1.239,0,2.244-1.006,2.244-2.245C40.569,26.612,39.564,25.607,38.325,25.607z"/>
                                    	</g>
                                    </g>
                                </svg>
                            </button>
                            <p id="counter-product-input">1</p>
                            <button class="outline-none">
                                <svg @click="addCounterProduct" class="w-4 h-4 fill-sky-600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                                    <g>
                                    	<path d="M281.672,48.328C250.508,17.163,209.073,0,164.999,0C120.927,0,79.492,17.163,48.328,48.328 c-64.333,64.334-64.333,169.011,0,233.345C79.492,312.837,120.927,330,165,330c44.073,0,85.508-17.163,116.672-48.328 C346.005,217.339,346.005,112.661,281.672,48.328z M260.46,260.46C234.961,285.957,201.06,300,165,300 c-36.06,0-69.961-14.043-95.46-39.54c-52.636-52.637-52.636-138.282,0-190.919C95.039,44.042,128.94,30,164.999,30 c36.06,0,69.961,14.042,95.46,39.54C313.095,122.177,313.095,207.823,260.46,260.46z"/>
                                    	<path d="M254.999,150H180V75c0-8.284-6.716-15-15-15s-15,6.716-15,15v75H75c-8.284,0-15,6.716-15,15s6.716,15,15,15h75v75 c0,8.284,6.716,15,15,15s15-6.716,15-15v-75h74.999c8.284,0,15-6.716,15-15S263.284,150,254.999,150z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                       </div>
                       <p id="stockParent" class="text-right mt-1 flex text-sm font-Lalezar">تنها<p class="text-sky-600 text-md mr-1 ml-1" id="stock"></p>عدد در انبار  باقی مانده است  </p>
                    </div>
                    <div class="flex md:mt-5  justify-between pb-5 md:flex-row flex-col-reverse mt-5">
                        <div class="flex items-center justify-between relative z-10">
                            <button id="addToBasket" class="bg-sky-600 text-white  py-2 px-4 rounded outline-none md:mt-0 mt-5" @click="addToCart">
                                افزودن به سبد خرید
                            </button>
                        </div>
                        <div class="flex flex-col items-end ">
                                <div class="flex items-center mb-4">
                                    <p v-if="product['weight_dependency'] == false" class="text-sm text-gray-400 line-through  ml-4" id="price">{{ productPrice }}</p>
                                    <p v-if="product['weight_dependency'] == true" class="text-sm text-gray-400 line-through  ml-4" id="price">{{ previousPrice }}</p>
                                    <p v-if="product['weight_dependency'] == true" style="display: none" class="text-sm text-gray-400 line-through  ml-4" id="purePrice">{{ product.price1 }}</p>
                                    <div class="text-left bg-sky-600 text-sm flex justi fy-center items-center" style="padding: 3px 10px;border-radius: 19px;"><p class="text-white text-sm">{{ product.discount_percent }}%</p></div>
                                </div>
                                <div class="flex">
                                    <p class="text-lg ml-4"> مجموع قیمت ها : </p>
                                    <div class="flex">
                                        <p v-if="product['weight_dependency'] == false" class="text-2xl" id="discountedPrice">{{ productDiscountedPrice }}</p>
                                        <p id="discountedPrice" v-if="product['weight_dependency'] == true" class="text-2xl">{{ previousDiscountedPrice }}</p>
                                        <p style="display: none" id="pureDiscountedPrice" v-if="product['weight_dependency'] == true" class="text-2xl">{{ product.price2 }}</p>
                                        <svg class="mr-2" width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.52917 11.5828C3.03731 11.5828 3.48194 11.502 3.86304 11.3403C4.2557 11.1786 4.58484 10.9592 4.85046 10.682C5.11608 10.4048 5.31818 10.0815 5.45677 9.71193C5.59535 9.35392 5.67619 8.97281 5.69929 8.5686H3.96698C3.378 8.5686 2.89295 8.50509 2.51184 8.37805C2.13074 8.25101 1.83047 8.06623 1.61105 7.82371C1.39162 7.58119 1.23571 7.29247 1.14332 6.95756C1.06248 6.6111 1.02206 6.22422 1.02206 5.79691C1.02206 5.35806 1.08558 4.94231 1.21261 4.54965C1.33965 4.157 1.52443 3.81053 1.76695 3.51027C2.00948 3.21 2.30974 2.97325 2.66775 2.80002C3.03731 2.61524 3.45884 2.52285 3.93234 2.52285C4.31344 2.52285 4.67723 2.58637 5.02369 2.71341C5.37015 2.84044 5.67619 3.04254 5.94181 3.31971C6.20743 3.58533 6.41531 3.93757 6.56544 4.37642C6.72712 4.80372 6.80797 5.32342 6.80797 5.9355V7.37331H8.47098C8.60956 7.37331 8.70195 7.42528 8.74815 7.52922C8.80589 7.62161 8.83476 7.76597 8.83476 7.9623C8.83476 8.17017 8.80589 8.32608 8.74815 8.43002C8.70195 8.52241 8.60956 8.5686 8.47098 8.5686H6.77332C6.75022 9.13449 6.63474 9.67151 6.42686 10.1796C6.23053 10.6878 5.95336 11.1324 5.59535 11.5135C5.23734 11.8946 4.81004 12.1949 4.31344 12.4143C3.81685 12.6453 3.25674 12.7608 2.63311 12.7608H0.796861L0.692923 11.5828H2.52917ZM2.09609 5.72762C2.09609 6.01634 2.12496 6.26464 2.18271 6.47251C2.252 6.68039 2.36171 6.85362 2.51184 6.9922C2.67353 7.11924 2.88718 7.2174 3.1528 7.2867C3.41842 7.34444 3.75333 7.37331 4.15754 7.37331H5.71661V6.07408C5.71661 5.21948 5.54916 4.6074 5.21424 4.23784C4.87933 3.86828 4.41738 3.6835 3.8284 3.6835C3.27406 3.6835 2.84676 3.86828 2.54649 4.23784C2.24622 4.6074 2.09609 5.10399 2.09609 5.72762ZM11.3338 7.37331C11.4839 7.37331 11.582 7.42528 11.6282 7.52922C11.686 7.62161 11.7149 7.76597 11.7149 7.9623C11.7149 8.17017 11.686 8.32608 11.6282 8.43002C11.582 8.52241 11.4839 8.5686 11.3338 8.5686H8.47545C8.32531 8.5686 8.22715 8.52241 8.18095 8.43002C8.12321 8.33763 8.09434 8.19327 8.09434 7.99694C8.09434 7.78907 8.12321 7.63316 8.18095 7.52922C8.22715 7.42528 8.32531 7.37331 8.47545 7.37331H11.3338ZM14.1927 7.37331C14.3429 7.37331 14.441 7.42528 14.4872 7.52922C14.545 7.62161 14.5738 7.76597 14.5738 7.9623C14.5738 8.17017 14.545 8.32608 14.4872 8.43002C14.441 8.52241 14.3429 8.5686 14.1927 8.5686H11.3344C11.1843 8.5686 11.0861 8.52241 11.0399 8.43002C10.9822 8.33763 10.9533 8.19327 10.9533 7.99694C10.9533 7.78907 10.9822 7.63316 11.0399 7.52922C11.0861 7.42528 11.1843 7.37331 11.3344 7.37331H14.1927ZM17.0517 7.37331C17.2019 7.37331 17.3 7.42528 17.3462 7.52922C17.404 7.62161 17.4328 7.76597 17.4328 7.9623C17.4328 8.17017 17.404 8.32608 17.3462 8.43002C17.3 8.52241 17.2019 8.5686 17.0517 8.5686H14.1934C14.0433 8.5686 13.9451 8.52241 13.8989 8.43002C13.8412 8.33763 13.8123 8.19327 13.8123 7.99694C13.8123 7.78907 13.8412 7.63316 13.8989 7.52922C13.9451 7.42528 14.0433 7.37331 14.1934 7.37331H17.0517ZM19.9107 7.37331C20.0608 7.37331 20.159 7.42528 20.2052 7.52922C20.2629 7.62161 20.2918 7.76597 20.2918 7.9623C20.2918 8.17017 20.2629 8.32608 20.2052 8.43002C20.159 8.52241 20.0608 8.5686 19.9107 8.5686H17.0524C16.9023 8.5686 16.8041 8.52241 16.7579 8.43002C16.7002 8.33763 16.6713 8.19327 16.6713 7.99694C16.6713 7.78907 16.7002 7.63316 16.7579 7.52922C16.8041 7.42528 16.9023 7.37331 17.0524 7.37331H19.9107ZM21.4705 7.37331C21.9209 7.37331 22.2789 7.25205 22.5445 7.00953C22.8217 6.767 22.9602 6.43209 22.9602 6.00479V3.61421H24.0862V6.00479C24.0862 6.82475 23.8553 7.45993 23.3933 7.91033C22.9429 8.34918 22.3251 8.5686 21.5397 8.5686H19.9114C19.7612 8.5686 19.6631 8.52241 19.6169 8.43002C19.5591 8.33763 19.5303 8.19327 19.5303 7.99694C19.5303 7.78907 19.5591 7.63316 19.6169 7.52922C19.6631 7.42528 19.7612 7.37331 19.9114 7.37331H21.4705ZM24.2595 1.39685H22.8736V0.166916H24.2595V1.39685ZM22.0594 1.39685H20.6736V0.166916H22.0594V1.39685ZM10.2553 22.2221C10.2553 22.8458 10.1571 23.429 9.96076 23.9718C9.76444 24.5261 9.48149 25.0054 9.11193 25.4096C8.74237 25.8253 8.29197 26.1545 7.76073 26.397C7.24104 26.6395 6.65206 26.7608 5.99378 26.7608H4.97172C3.67826 26.7608 2.67353 26.3624 1.95751 25.5655C1.24149 24.7686 0.883476 23.6773 0.883476 22.2914V19.2599H1.99215V22.2568C1.99215 22.7534 2.0499 23.2038 2.16538 23.608C2.29242 24.0122 2.48297 24.3587 2.73704 24.6474C3.00267 24.9476 3.3318 25.1786 3.72446 25.3403C4.11712 25.502 4.59061 25.5828 5.14495 25.5828H5.90717C6.44996 25.5828 6.92345 25.4904 7.32766 25.3056C7.73186 25.1324 8.06678 24.8957 8.3324 24.5954C8.60956 24.2951 8.81167 23.9429 8.9387 23.5387C9.07729 23.1345 9.14658 22.713 9.14658 22.2741V17.6142H10.2553V22.2221ZM6.0804 17.2331H4.62526V15.9685H6.0804V17.2331ZM14.7322 22.5686C14.4319 22.5686 14.1432 22.5282 13.866 22.4473C13.5889 22.355 13.3406 22.2048 13.1211 21.9969C12.9133 21.7891 12.7458 21.5177 12.6188 21.1828C12.4917 20.8363 12.4282 20.409 12.4282 19.9009V11.8283H13.5542V19.693C13.5542 20.178 13.6582 20.5822 13.866 20.9056C14.0855 21.2174 14.4377 21.3733 14.9227 21.3733H15.2172C15.4713 21.3733 15.5983 21.5696 15.5983 21.9623C15.5983 22.3665 15.4713 22.5686 15.2172 22.5686H14.7322ZM15.5025 21.3733C15.9529 21.3733 16.2936 21.2636 16.5246 21.0442C16.7556 20.8247 16.871 20.5303 16.871 20.1607V19.5024C16.871 18.4977 17.1251 17.7124 17.6333 17.1465C18.1529 16.5806 18.869 16.2977 19.7813 16.2977C20.2548 16.2977 20.6706 16.3727 21.0286 16.5229C21.3866 16.673 21.6811 16.8866 21.9121 17.1638C22.1546 17.441 22.3336 17.7701 22.4491 18.1512C22.5646 18.5323 22.6223 18.9539 22.6223 19.4158C22.6223 20.409 22.3625 21.1828 21.8428 21.7371C21.3231 22.2914 20.6128 22.5686 19.712 22.5686C19.2501 22.5686 18.8055 22.482 18.3781 22.3088C17.9508 22.124 17.6159 21.8006 17.3734 21.3387C17.2695 21.6043 17.1424 21.8179 16.9923 21.9796C16.8422 22.1413 16.6863 22.2683 16.5246 22.3607C16.3629 22.4416 16.1897 22.4993 16.0049 22.534C15.8317 22.5571 15.6642 22.5686 15.5025 22.5686H15.2254C15.0752 22.5686 14.9771 22.5224 14.9309 22.43C14.8731 22.3376 14.8442 22.1933 14.8442 21.9969C14.8442 21.7891 14.8731 21.6332 14.9309 21.5292C14.9771 21.4253 15.0752 21.3733 15.2254 21.3733H15.5025ZM21.5136 19.5197C21.5136 18.9192 21.3808 18.4342 21.1152 18.0646C20.8496 17.6835 20.3934 17.4929 19.7467 17.4929C18.5456 17.4929 17.9451 18.1916 17.9451 19.589C17.9451 20.178 18.1068 20.6226 18.4301 20.9229C18.765 21.2232 19.1923 21.3733 19.712 21.3733C20.301 21.3733 20.7456 21.2116 21.0459 20.8883C21.3577 20.5649 21.5136 20.1087 21.5136 19.5197Z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="flex flex-col lg:w-full w-11/12">
            <div class="relative lg:w-11/12 w-full lg:right-[6%] right-[5%] mt-3">
                 <div class="w-full border-2 border-[#efefef] border-solid product-page  rounded-lg shadow-lg top-32 mt-40 py-8 px-8 bg-white">
                <div class="w-full">
                    <div class="flex items-center justify-between">
                        <TitrProductSection title='توضیحات' />
                    </div>
                    <p class="text-justify leading-10">{{product.description}}</p>
                </div>
                 </div>
            </div>
             <div class="relative lg:w-11/12 w-full lg:right-[6%] right-[5%]">
            <div class="right-[4%] w-full border-2 border-[#efefef] border-solid product-page  rounded-lg shadow-lg top-32 mt-10 py-8 px-8 bg-white">
                <div class="w-full">
                    <div class="flex items-center justify-between">
                        <!-- <h1 class="text-2xl text-sky-600 ">نظرات</h1> -->
                        <TitrProductSection title='نظرات' />
                        <button @click="showAddCommentSection" id="sendComment" class="bg-sky-600 inline border justify-center sm:mt-0 mt-4 sm:w-fit-content text-sm  text-white px-3 h-12 rounded items-center transition duration-200 hover:shadow-sm">
                         افزودن دیدگاه
                        </button>
                    </div>
                    <div class="add-comment-section hidden">
                        <form @submit.prevent="submitComment">
                        <textarea id="body-comment" rows="10" class="resize-none outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="پیام شما" v-model="comment" required></textarea>
                        <div class="flex flex-col ">
                            <div class="flex items-center mt-1">
                                <p class="text-xl font-Lalezar ml-3">امتیاز شما به این محصول : </p>
                                <star-rating required />
                                
                            </div>
                        </div>
                        <div class="mx-auto flex justify-center "><vue-recaptcha class="mt-4" ref="recaptcha" @verify="onVerify" sitekey="6LfxJ9EhAAAAAHQCbyxaRaI0vTnzMVi6HAgOiRKU"></vue-recaptcha></div>
                        <div class=" mx-auto p-2 rounded px-4 font-Lalezar mt-4 text-red-600 w-auto" v-for="error in cError" v-bind:key="error.id">{{error}}</div>
                        <button class="mb-5 bg-sky-600 inline border justify-center mt-7 text-sm  text-white px-3 h-11 rounded items-cente">
                         ثبت نظر
                        </button>
                        </form>
                    </div>
                    <div class="comment-container w-full mb-20" v-for="comment in comments" v-bind:key="comment.id" v-bind:comment="comment">
                        <div class="comment-card p-2 rounded-lg w-full bg-[#fbfcfc] border-2 border-solid border-[#eceeef] relative">
                            <div class="comment-header flex items-center justify-between border-b-2 border-slide border[#eceeef] pb-2">
                                <div class="flex items-right justify-start flex-col ">
                                    <div class="flex items-center">
                                        <svg class="border-2 border-solid border-[#ccc] p-2 rounded-full" width="40" height="40" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-sky-600" d="M0 17.4167C0 21.191 1.77971 22 10.0833 22C18.387 22 20.1667 21.191 20.1667 17.4167C20.1667 13.6423 18.387 12.8333 10.0833 12.8333C1.77971 12.8333 0 13.6423 0 17.4167Z"></path>
                                            <path class="fill-sky-600" d="M4.58333 5.5C4.58333 8.53757 7.04577 11 10.0833 11C13.1209 11 15.5833 8.53757 15.5833 5.5C15.5833 2.46243 13.1209 0 10.0833 0C7.04577 0 4.58333 2.46243 4.58333 5.5Z"></path>
                                        </svg>
                                        <div class="flex flex-col items-start justify-start">
                                            <p class="mr-4">{{ comment.created_by.name }}</p>
                                            <span class="text-gray-400 dark:text-gray-200 text-xs mt-0.5 text-center relative top-1 right-4">{{ comment.created_at }}</span>
                                        </div>
                                    </div>
                                   
                                    
                                </div>
                                <div class="flex sm:items-center sm:justify-start justify-end sm:mb-0 mb-2 ml-1 flex-col-reverse justify-center">
                                    <div class="flex items-center">

                                        <button @click="likeComment(comment.id)" class="flex items-center text-sm text-red-450 dark:hover:bg-dark-930 dark:text-red-650 font-medium bg-red-700 dark:bg-opacity-20 bg-opacity-10 h-6 px-2 rounded hover:bg-opacity-100 hover:text-white transition duration-200" wire:click="like">
                                        <svg class="ml-1" width="15" height="13" fill="none" viewBox="0 0 15 13" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="currentColor" d="M4.75 0.624878C5.80649 0.624878 6.77021 1.15065 7.5 1.74964C8.22979 1.15065 9.19351 0.624878 10.25 0.624878C12.5282 0.624878 14.375 2.31858 14.375 4.40774C14.375 8.62007 9.57964 11.0733 7.99879 11.7676C7.68036 11.9075 7.31964 11.9075 7.00121 11.7676C5.42036 11.0733 0.625 8.61997 0.625 4.40764C0.625 2.31848 2.47183 0.624878 4.75 0.624878Z" stroke-width="0.771644"></path>
                                        </svg><span :id='"like"+comment.id'>{{ comment.likes }}</span>
                                    </button> 
                                    <button v-if="name == comment.created_by.name" @click="deleteComment(comment.id)"><svg  class="w-5 h-5 cursor-pointer mr-0.5 fill-red-600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 465.311 465.311" style="enable-background:new 0 0 465.311 465.311;" xml:space="preserve">
                                <g>
                                	<path d="M372.811,51.002h-59.908V36.566C312.902,16.404,296.499,0,276.335,0h-87.356c-20.163,0-36.567,16.404-36.567,36.566v14.436 H92.5c-20.726,0-37.587,16.861-37.587,37.587v38.91c0,8.284,6.716,15,15,15h7.728v307.812c0,8.284,6.716,15,15,15H372.67 c8.284,0,15-6.716,15-15V142.499h7.728c8.284,0,15-6.716,15-15v-38.91C410.397,67.863,393.536,51.002,372.811,51.002z  M182.412,36.566c0-3.621,2.946-6.566,6.567-6.566h87.356c3.621,0,6.567,2.946,6.567,6.566v14.436h-100.49V36.566z M84.914,88.589 c0-4.184,3.403-7.587,7.587-7.587h280.31c4.184,0,7.587,3.403,7.587,7.587v23.91H84.914V88.589z M357.67,435.311H107.641V142.499 H357.67V435.311z"/>
                                	<path d="M137.41,413.485c5.523,0,10-4.477,10-10V166.497c0-5.523-4.477-10-10-10s-10,4.477-10,10v236.988 C127.41,409.008,131.887,413.485,137.41,413.485z"/>
                                	<path d="M200.907,413.485c5.523,0,10-4.477,10-10V166.497c0-5.523-4.477-10-10-10s-10,4.477-10,10v236.988 C190.907,409.008,195.384,413.485,200.907,413.485z"/>
                                	<path d="M264.404,413.485c5.523,0,10-4.477,10-10V166.497c0-5.523-4.477-10-10-10s-10,4.477-10,10v236.988 C254.404,409.008,258.881,413.485,264.404,413.485z"/>
                                	<path d="M327.901,413.485c5.523,0,10-4.477,10-10V166.497c0-5.523-4.477-10-10-10s-10,4.477-10,10v236.988 C317.901,409.008,322.378,413.485,327.901,413.485z"/>
                                </g>

                                        </svg></button>
                                    </div>
                                    
                                    <div class="flex items-center mb-3">
                                        <svg class="w-5 h-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">
                                           <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                                         </svg>
                                         <p class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{{ comment.star }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-main relative">
                                
                                <p class="text-justify mt-0 leading-10 font-normal w-[93%] mr-1  mt-1 ">
                                    {{ comment.comment }}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
             </div>
            </div>
            <div class="flex flex-col mt-[10.3rem] ">
                <div class=" rounded p-2 w-full relative left-8 lg:block hidden ">
                    <a :href="'/product/'+specialProduct.category.name+'/'+specialProduct.id" v-for="specialProduct in fewSpecialProducts" v-bind:key="specialProduct.id" v-bind:specialProduct="specialProduct">
                      <div style="transition: .3s;" class="hover:shadow-2xl ml-4 mr-4 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative h-[420px]   mb-6 sm:w-[290px] w-[400px] " >
                             <a class="h-5/12">
                     <img class="rounded-t-lg object-none h-[70%] w-full" :src='"https://api.khoonevar.ir"+specialProduct.get_picture1_url' alt="">
                        </a>
                        <div class="p-5">
                     <a>
                         <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white font-Lalezar text-justify ">{{ specialProduct.name }}</h5>
                     </a>
                     
                        <div class="flex items-center absolute right-5 bottom-5">
                            <div class="flex items-center"  v-if="specialProduct.star != 0 && specialProduct.star != null">
                             <svg class="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">
                                <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                              </svg>
                              <p class="text-sm text-gray-400 relative right-2 top-1">{{ specialProduct.star }}</p>
                            </div>
                            <div v-if="specialProduct.star == null || specialProduct.star == 0">
                                <img src="../assets/no-star.png" alt="" class="w-1 h-1" style="width:27px !important; height:27px !important">
                            </div>
                        </div>
                        <div class="flex items-center absolute left-5 bottom-5">
                            <h1 class="text-left mt-4 text-[#0284c7]">{{ specialProduct.price2 }}
                        </h1>
                        <svg class="mr-2" width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.52917 11.5828C3.03731 11.5828 3.48194 11.502 3.86304 11.3403C4.2557 11.1786 4.58484 10.9592 4.85046 10.682C5.11608 10.4048 5.31818 10.0815 5.45677 9.71193C5.59535 9.35392 5.67619 8.97281 5.69929 8.5686H3.96698C3.378 8.5686 2.89295 8.50509 2.51184 8.37805C2.13074 8.25101 1.83047 8.06623 1.61105 7.82371C1.39162 7.58119 1.23571 7.29247 1.14332 6.95756C1.06248 6.6111 1.02206 6.22422 1.02206 5.79691C1.02206 5.35806 1.08558 4.94231 1.21261 4.54965C1.33965 4.157 1.52443 3.81053 1.76695 3.51027C2.00948 3.21 2.30974 2.97325 2.66775 2.80002C3.03731 2.61524 3.45884 2.52285 3.93234 2.52285C4.31344 2.52285 4.67723 2.58637 5.02369 2.71341C5.37015 2.84044 5.67619 3.04254 5.94181 3.31971C6.20743 3.58533 6.41531 3.93757 6.56544 4.37642C6.72712 4.80372 6.80797 5.32342 6.80797 5.9355V7.37331H8.47098C8.60956 7.37331 8.70195 7.42528 8.74815 7.52922C8.80589 7.62161 8.83476 7.76597 8.83476 7.9623C8.83476 8.17017 8.80589 8.32608 8.74815 8.43002C8.70195 8.52241 8.60956 8.5686 8.47098 8.5686H6.77332C6.75022 9.13449 6.63474 9.67151 6.42686 10.1796C6.23053 10.6878 5.95336 11.1324 5.59535 11.5135C5.23734 11.8946 4.81004 12.1949 4.31344 12.4143C3.81685 12.6453 3.25674 12.7608 2.63311 12.7608H0.796861L0.692923 11.5828H2.52917ZM2.09609 5.72762C2.09609 6.01634 2.12496 6.26464 2.18271 6.47251C2.252 6.68039 2.36171 6.85362 2.51184 6.9922C2.67353 7.11924 2.88718 7.2174 3.1528 7.2867C3.41842 7.34444 3.75333 7.37331 4.15754 7.37331H5.71661V6.07408C5.71661 5.21948 5.54916 4.6074 5.21424 4.23784C4.87933 3.86828 4.41738 3.6835 3.8284 3.6835C3.27406 3.6835 2.84676 3.86828 2.54649 4.23784C2.24622 4.6074 2.09609 5.10399 2.09609 5.72762ZM11.3338 7.37331C11.4839 7.37331 11.582 7.42528 11.6282 7.52922C11.686 7.62161 11.7149 7.76597 11.7149 7.9623C11.7149 8.17017 11.686 8.32608 11.6282 8.43002C11.582 8.52241 11.4839 8.5686 11.3338 8.5686H8.47545C8.32531 8.5686 8.22715 8.52241 8.18095 8.43002C8.12321 8.33763 8.09434 8.19327 8.09434 7.99694C8.09434 7.78907 8.12321 7.63316 8.18095 7.52922C8.22715 7.42528 8.32531 7.37331 8.47545 7.37331H11.3338ZM14.1927 7.37331C14.3429 7.37331 14.441 7.42528 14.4872 7.52922C14.545 7.62161 14.5738 7.76597 14.5738 7.9623C14.5738 8.17017 14.545 8.32608 14.4872 8.43002C14.441 8.52241 14.3429 8.5686 14.1927 8.5686H11.3344C11.1843 8.5686 11.0861 8.52241 11.0399 8.43002C10.9822 8.33763 10.9533 8.19327 10.9533 7.99694C10.9533 7.78907 10.9822 7.63316 11.0399 7.52922C11.0861 7.42528 11.1843 7.37331 11.3344 7.37331H14.1927ZM17.0517 7.37331C17.2019 7.37331 17.3 7.42528 17.3462 7.52922C17.404 7.62161 17.4328 7.76597 17.4328 7.9623C17.4328 8.17017 17.404 8.32608 17.3462 8.43002C17.3 8.52241 17.2019 8.5686 17.0517 8.5686H14.1934C14.0433 8.5686 13.9451 8.52241 13.8989 8.43002C13.8412 8.33763 13.8123 8.19327 13.8123 7.99694C13.8123 7.78907 13.8412 7.63316 13.8989 7.52922C13.9451 7.42528 14.0433 7.37331 14.1934 7.37331H17.0517ZM19.9107 7.37331C20.0608 7.37331 20.159 7.42528 20.2052 7.52922C20.2629 7.62161 20.2918 7.76597 20.2918 7.9623C20.2918 8.17017 20.2629 8.32608 20.2052 8.43002C20.159 8.52241 20.0608 8.5686 19.9107 8.5686H17.0524C16.9023 8.5686 16.8041 8.52241 16.7579 8.43002C16.7002 8.33763 16.6713 8.19327 16.6713 7.99694C16.6713 7.78907 16.7002 7.63316 16.7579 7.52922C16.8041 7.42528 16.9023 7.37331 17.0524 7.37331H19.9107ZM21.4705 7.37331C21.9209 7.37331 22.2789 7.25205 22.5445 7.00953C22.8217 6.767 22.9602 6.43209 22.9602 6.00479V3.61421H24.0862V6.00479C24.0862 6.82475 23.8553 7.45993 23.3933 7.91033C22.9429 8.34918 22.3251 8.5686 21.5397 8.5686H19.9114C19.7612 8.5686 19.6631 8.52241 19.6169 8.43002C19.5591 8.33763 19.5303 8.19327 19.5303 7.99694C19.5303 7.78907 19.5591 7.63316 19.6169 7.52922C19.6631 7.42528 19.7612 7.37331 19.9114 7.37331H21.4705ZM24.2595 1.39685H22.8736V0.166916H24.2595V1.39685ZM22.0594 1.39685H20.6736V0.166916H22.0594V1.39685ZM10.2553 22.2221C10.2553 22.8458 10.1571 23.429 9.96076 23.9718C9.76444 24.5261 9.48149 25.0054 9.11193 25.4096C8.74237 25.8253 8.29197 26.1545 7.76073 26.397C7.24104 26.6395 6.65206 26.7608 5.99378 26.7608H4.97172C3.67826 26.7608 2.67353 26.3624 1.95751 25.5655C1.24149 24.7686 0.883476 23.6773 0.883476 22.2914V19.2599H1.99215V22.2568C1.99215 22.7534 2.0499 23.2038 2.16538 23.608C2.29242 24.0122 2.48297 24.3587 2.73704 24.6474C3.00267 24.9476 3.3318 25.1786 3.72446 25.3403C4.11712 25.502 4.59061 25.5828 5.14495 25.5828H5.90717C6.44996 25.5828 6.92345 25.4904 7.32766 25.3056C7.73186 25.1324 8.06678 24.8957 8.3324 24.5954C8.60956 24.2951 8.81167 23.9429 8.9387 23.5387C9.07729 23.1345 9.14658 22.713 9.14658 22.2741V17.6142H10.2553V22.2221ZM6.0804 17.2331H4.62526V15.9685H6.0804V17.2331ZM14.7322 22.5686C14.4319 22.5686 14.1432 22.5282 13.866 22.4473C13.5889 22.355 13.3406 22.2048 13.1211 21.9969C12.9133 21.7891 12.7458 21.5177 12.6188 21.1828C12.4917 20.8363 12.4282 20.409 12.4282 19.9009V11.8283H13.5542V19.693C13.5542 20.178 13.6582 20.5822 13.866 20.9056C14.0855 21.2174 14.4377 21.3733 14.9227 21.3733H15.2172C15.4713 21.3733 15.5983 21.5696 15.5983 21.9623C15.5983 22.3665 15.4713 22.5686 15.2172 22.5686H14.7322ZM15.5025 21.3733C15.9529 21.3733 16.2936 21.2636 16.5246 21.0442C16.7556 20.8247 16.871 20.5303 16.871 20.1607V19.5024C16.871 18.4977 17.1251 17.7124 17.6333 17.1465C18.1529 16.5806 18.869 16.2977 19.7813 16.2977C20.2548 16.2977 20.6706 16.3727 21.0286 16.5229C21.3866 16.673 21.6811 16.8866 21.9121 17.1638C22.1546 17.441 22.3336 17.7701 22.4491 18.1512C22.5646 18.5323 22.6223 18.9539 22.6223 19.4158C22.6223 20.409 22.3625 21.1828 21.8428 21.7371C21.3231 22.2914 20.6128 22.5686 19.712 22.5686C19.2501 22.5686 18.8055 22.482 18.3781 22.3088C17.9508 22.124 17.6159 21.8006 17.3734 21.3387C17.2695 21.6043 17.1424 21.8179 16.9923 21.9796C16.8422 22.1413 16.6863 22.2683 16.5246 22.3607C16.3629 22.4416 16.1897 22.4993 16.0049 22.534C15.8317 22.5571 15.6642 22.5686 15.5025 22.5686H15.2254C15.0752 22.5686 14.9771 22.5224 14.9309 22.43C14.8731 22.3376 14.8442 22.1933 14.8442 21.9969C14.8442 21.7891 14.8731 21.6332 14.9309 21.5292C14.9771 21.4253 15.0752 21.3733 15.2254 21.3733H15.5025ZM21.5136 19.5197C21.5136 18.9192 21.3808 18.4342 21.1152 18.0646C20.8496 17.6835 20.3934 17.4929 19.7467 17.4929C18.5456 17.4929 17.9451 18.1916 17.9451 19.589C17.9451 20.178 18.1068 20.6226 18.4301 20.9229C18.765 21.2232 19.1923 21.3733 19.712 21.3733C20.301 21.3733 20.7456 21.2116 21.0459 20.8883C21.3577 20.5649 21.5136 20.1087 21.5136 19.5197Z" fill="currentColor"></path></svg>
                        </div>
                        </div>
                      
                    </div>
                     </a>
                </div>
            </div>
        </div>
        <div id="toast-success4" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4   text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal flex flex-row-reverse items-center">محصول به سبد خرید شما اضافه شدند<p id="taost-p-number" class="ml-1 mr-1 text-sky-600"></p></div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success4" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    <div id="toast-success6" class="hidden fixed bottom-5 right-5 flex items-center p-4 mb-4   text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between z-50" role="alert">
    <div class="flex items-center">
        <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 mr-2 font-Lalezar text-md font-normal flex flex-row-reverse items-center">نظر شما با موفقیت ثبت شد</div>
    </div>
    <button type="button" class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success6" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { VueRecaptcha } from 'vue-recaptcha';
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TitrProductSection from '../components/TitrProductSection.vue'
import MenuSection from '@/components/Menu.vue'
import { EffectFlip, Pagination, Navigation } from "swiper";
import StarRating from 'vue-star-rating'
export default {
    name: 'ProductPage',
    components: {TitrProductSection,MenuSection, Swiper,SwiperSlide,StarRating, VueRecaptcha},
  
    setup() {
    return {
      modules: [EffectFlip, Pagination, Navigation],
    };
  },
  data(){
    return{
        product : NaN,
        comments: [],
        comment: '',
        fewSpecialProducts: [],
        productAmmounts : [],
        productStock: null,
        productPrice: null,
        productDiscountedPrice: null,
        robot: false,
        name : localStorage.getItem('name'),
        previousPrice: null,
        previousDiscountedPrice: null,
        weight_dependency: null,
        cError: []
    }
  },
  mounted(){
    if(!localStorage.getItem('token')){
        document.getElementById('sendComment').disabled = true
        document.getElementById('alert-4').style.display = 'flex'
}
    else{
        document.getElementById('sendComment').disabled = false
        document.getElementById('alert-4').style.display = 'none'
    }
        this.getProduct(),
        this.getComments(),
        this.getFewSpecialProducts(),
        this.getProductAmmounts()
    },
    methods: {
        addToCart(){
            if(localStorage.getItem('token')){
                if(this.product.weight_dependency == false){
            const data = {
                ammount: document.getElementById('ammount').value,
                quantity: document.getElementById('counter-product-input').innerHTML,
            }
        var id = this.$route.params.id
        axios.post(`add_to_cart/${id}`, data, {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
        .then(response=>{
        //   console.log(response.data)
          document.getElementById('basketLength').innerHTML = response.data["basketLength"]
          document.getElementById("toast-success4").style.display = "flex"
          document.getElementById("taost-p-number").innerHTML = document.getElementById("counter-product-input").innerHTML
        })
        .catch(error=>{
        console.log(error)
      })
            }
        else{
            const data = {
                quantity: document.getElementById('counter-product-input').innerHTML,
            }
        var id = this.$route.params.id
        axios.post(`add_to_cart/${id}`, data, {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
        .then(response=>{
        //   console.log(response.data)
          document.getElementById('basketLength').innerHTML = response.data["basketLength"]
          document.getElementById("toast-success4").style.display = "flex"
          document.getElementById("taost-p-number").innerHTML = document.getElementById("counter-product-input").innerHTML
        })
        .catch(error=>{
        console.log(error)
      })
        }
            }
        },
        getProductAmmounts(){
        axios.get(`product_ammounts/${this.$route.params.id}`)
        .then(response=>{
            this.productAmmounts = response.data["productAmmounts"]
            // console.log(response.data)
        })    
        .catch(error=>{
        console.log(error)
        })
        },
        getFewSpecialProducts(){
        axios.get(`few_special_products`)
        .then(response=>{
          this.fewSpecialProducts = response.data["fewSpecialProducts"]
        //   console.log(response.data)
        })
        .catch(error=>{
        console.log(error)
      })
        },
        submitComment(){
            this.cError = []
            if(parseInt(document.getElementsByClassName("vue-star-rating-rating-text")[0].innerHTML) == 0)
            {
                this.cError.push("لطفا امتیاز خود را ثبت کنید")
            }
            else{
                if(localStorage.getItem('token')){
                if (this.robot) {
        const category = this.$route.params.category
        const id = this.$route.params.id
            const formData = {
                token : localStorage.getItem('token'),
                comment : this.comment,
                star : document.getElementsByClassName("vue-star-rating-rating-text")[0].innerHTML
            }
            axios.post(`product_comments/${category}/${id}`, formData)
            .then(response=>{
                // console.log(response.data)
                document.getElementById("toast-success6").style.display = "flex"
                document.getElementById("body-comment").value = ""
                window.location.reload();
        })
        .catch(error=>{
        console.log(error)
      })
      }
            }

        }},
        likeComment(id){
        axios.post('count_comment_likes', {commentId: id})
      .then(response=>{
    //   console.log(response.data)
      window.location.reload();
      })
      .catch(error=>{
        console.log(error)
      })
            },
        getComments(){
        const category = this.$route.params.category
        const id = this.$route.params.id
        axios.get(`product_comments/${category}/${id}`)
        .then(response=>{
          this.comments = response.data["comments"]
        //   console.log(response.data)
        //   console.log(this.comments)
        })
        .catch(error=>{
        console.log(error)
      })
      },
        getProduct(){
        document.getElementById('stockParent').style.display = 'none'
        const category = this.$route.params.category
        const id = this.$route.params.id
        if(localStorage.getItem('token')){
            axios.get(`product/${category}/${id}`, {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
        .then(response=>{
          this.product = response.data["product"]
          this.weight_dependency = this.product.weight_dependency
          if(this.product.weight_dependency == false){
          document.getElementById('addToBasket').disabled = true
          }
          else{
            document.getElementById('stock').innerHTML = response.data["productStock"]
          this.previousPrice = response.data["previousPrice"]
          this.previousDiscountedPrice = response.data["previousDiscountedPrice"]
          document.getElementById('counter-product-input').innerHTML = response.data["quantity"]
         document.getElementById('stockParent').style.display = 'flex'
            if(localStorage.getItem('token')){
            document.getElementById('addToBasket').disabled = false
            }
            else{
          document.getElementById('addToBasket').disabled = true
            }
          }
        })   
        .catch(error=>{
        console.log(error)
      })
        }
        else{
            axios.get(`product/${category}/${id}`)
        .then(response=>{
          this.product = response.data["product"]
          this.weight_dependency = this.product.weight_dependency
          if(this.product.weight_dependency == false){
          document.getElementById('addToBasket').disabled = true
          }
          else{
            document.getElementById('stock').innerHTML = response.data["productStock"]
          this.previousPrice = response.data["previousPrice"]
          this.previousDiscountedPrice = response.data["previousDiscountedPrice"]
          document.getElementById('counter-product-input').innerHTML = response.data["quantity"]
         document.getElementById('stockParent').style.display = 'flex'
            if(localStorage.getItem('token')){
            document.getElementById('addToBasket').disabled = false
            }
            else{
          document.getElementById('addToBasket').disabled = true
            }
          }
        })   
        .catch(error=>{
        console.log(error)
      })
        }
      },
       minesCounterProduct(){
        var productCount = parseInt(document.getElementById('counter-product-input').innerHTML)
        if(this.weight_dependency == false){
        if(productCount > 1 ){
        var newValueCount = productCount -= 1
        document.getElementById('counter-product-input').innerHTML = newValueCount
        var priceUnit1 = localStorage.getItem('price')
        var priceUnit2 = localStorage.getItem('discountedPrice')
        var counterProductInput = parseInt(document.getElementById('counter-product-input').innerHTML)
        document.getElementById('price').innerHTML = priceUnit1 * counterProductInput
        document.getElementById('discountedPrice').innerHTML = priceUnit2 * counterProductInput
        }
       }
       else{
        if(productCount > 1 ){
        var newValueCount = productCount -= 1
        document.getElementById('counter-product-input').innerHTML = newValueCount
        var priceUnit1 = parseInt(document.getElementById('purePrice').innerHTML)
        var priceUnit2 = parseInt(document.getElementById('pureDiscountedPrice').innerHTML)
        var counterProductInput = parseInt(document.getElementById('counter-product-input').innerHTML)
        document.getElementById('price').innerHTML = priceUnit1 * counterProductInput
        document.getElementById('discountedPrice').innerHTML = priceUnit2 * counterProductInput
       }
       }
       },
       addCounterProduct(){
        var productCount = parseInt(document.getElementById('counter-product-input').innerHTML)
        if(this.weight_dependency == false){
        if(productCount < this.productStock ){
        var newValueCount = productCount += 1
        document.getElementById('counter-product-input').innerHTML = newValueCount
        var priceUnit1 = localStorage.getItem('price')
        var priceUnit2 = localStorage.getItem('discountedPrice')
        var counterProductInput = parseInt(document.getElementById('counter-product-input').innerHTML)
        document.getElementById('price').innerHTML = priceUnit1 * counterProductInput
        document.getElementById('discountedPrice').innerHTML = priceUnit2 * counterProductInput
        }
       }
       else{
        if(productCount < parseInt(document.getElementById('stock').innerHTML)){
        // console.log(this.product.stock);
        var newValueCount = productCount += 1
        document.getElementById('counter-product-input').innerHTML = newValueCount
        var priceUnit1 = parseInt(document.getElementById('purePrice').innerHTML)
        var priceUnit2 = parseInt(document.getElementById('pureDiscountedPrice').innerHTML)
        var counterProductInput = parseInt(document.getElementById('counter-product-input').innerHTML)
        document.getElementById('price').innerHTML = priceUnit1 * counterProductInput
        document.getElementById('discountedPrice').innerHTML = priceUnit2 * counterProductInput
        }
       }
       },
       
       openselectNumberProductModal(){
            var modal = document.getElementById('selectNumberProduct');
            var blackBackground = document.getElementsByClassName("black-background")[0];
            if(modal.className == "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center hidden"){
                modal.className = "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center flex"
                blackBackground.style.display = "block"
            }
            else{
                modal.className = "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center hidden"
                blackBackground.style.display = "none"
            }
       },
       showAddCommentSection(){
        var component = document.getElementsByClassName('add-comment-section')[0]
        component.style.display = 'block'
       },
        getProductStockAndQuantityAndPrices(){
            var ammount = document.getElementById('ammount').value
            if(localStorage.getItem('token')){
            axios.get(`product_stock_and_quantity_and_prices/${this.$route.params.id}/${ammount}` ,{headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
            .then(response=>{
            // console.log(response.data)
            document.getElementById('counter-product-input').innerHTML = response.data["productQuantity"]
            this.productStock = response.data["productStock"]
            this.productPrice = response.data["productPrice"]
            this.productDiscountedPrice = response.data["productDiscountedPrice"]
            document.getElementById('stock').innerHTML = this.productStock
            document.getElementById('stockParent').style.display = 'flex'
          document.getElementById('addToBasket').disabled = false
          document.getElementById('selected').style.display = 'none'
            localStorage.setItem('price', response.data['pureProductPrice'])
            localStorage.setItem('discountedPrice', response.data['pureProductDiscountedPrice'])
        })    
        .catch(error=>{
        console.log(error)
      })
            }
            else{
            axios.get(`product_stock_and_quantity_and_prices/${this.$route.params.id}/${ammount}`)
            .then(response=>{
            // console.log(response.data)
            document.getElementById('counter-product-input').innerHTML = response.data["productQuantity"]
            this.productStock = response.data["productStock"]
            this.productPrice = response.data["productPrice"]
            this.productDiscountedPrice = response.data["productDiscountedPrice"]
            document.getElementById('stock').innerHTML = this.productStock
            document.getElementById('stockParent').style.display = 'flex'
            document.getElementById('addToBasket').disabled = true
            localStorage.setItem('price', response.data['pureProductPrice'])
            localStorage.setItem('discountedPrice', response.data['pureProductDiscountedPrice'])
        })    
        .catch(error=>{
        console.log(error)
      })
            }
            },
      onVerify: function (response) {
      if (response) this.robot = true;
    },

    deleteComment(commentId){
        const category = this.$route.params.category
        const id = this.$route.params.id
        axios.post(`delete_comment/${category}/${id}`, {commentId: commentId})
        .then(response=>{
            // console.log(response.data);
        })
        .catch(error=>{
        console.log(error)
      })
        window.location.reload();
    },

        },
        
    }

</script>
 <style>
 .left-menu button:nth-of-type(1){
    /* background: white; */
    /* color: black; */
 }
 /* .product-page .swiper-button-prev,.product-page .swiper-button-next{
    display: block !important;
 } */
 /* .product-page .swiper-button-prev{
    right: -52px !important;
 }
 .product-page .swiper-button-next{
    left: -52px !important;
 } */
 #cke_editor1{
    width: 100%;
    margin-top: 31px;
    margin-left: auto;
    margin-right: auto;
}
body:nth-last-of-type() p{
    direction: rtl !important;
}
.centered{
    border-radius: 3px;
    margin: 14px auto;
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    margin-bottom: 60px;
}
#editor{
    height: 320px;
    background: #f9fafb;
}
#editor p{
    color: #000 !important;
    direction: rtl;
    text-align: right !important;
}
.ck-toolbar{
    direction: rtl !important;
}
body:nth-last-of-type() p{
    direction: rtl !important;
}
.product-page .swiper-button-next{
    left: -30px;
}
.product-page .swiper-button-prev{
    right: -30px;
}
.swiper-flip{
    position: relative;
    left: -16px;
}

.vue-star-rating-pointer svg{
    width: 25px;
}
.vue-star-rating-rating-text{
    display: none
}
.sr-only{
    display: none
}
 </style>