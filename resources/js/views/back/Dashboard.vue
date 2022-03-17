<template>
<div class="flex">
  <Sidebar/>
  <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
      <div class="bg-white shadow-lg fixed xl:right-6  xl:top-4 top-20 xl:w-[80%] w-full z-0  h-full p-4">
            <h1 class="text-3xl text-primary-blue font-bold">Dashboard</h1>
      </div>
  </div>
</div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue"
export default {
    components: {
        Sidebar
    },
    setup() {

    },
}
</script>