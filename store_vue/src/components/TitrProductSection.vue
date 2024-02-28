<template>
   <div class="flex items-center flex-row titr-section">
     <div class="p-1 bg-sky-600 rounded-full ml-3">

      </div>
     <h1 class="text-2xl font-bold text-right my-10 mr-5 text-sky-600 " style="margin-right: 0%;">{{title}}</h1>
       
    </div>
</template>
<script>
export default {
    name: 'TitrProductSection',
    props: {
       title: { type: String, default: null },
     }
}
</script>