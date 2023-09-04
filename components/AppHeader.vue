<script setup>
import {onMounted} from 'vue'
import {initFlowbite} from "flowbite";

const localePath = useLocalePath();
onMounted(() => {
    initFlowbite();
});

let isMobileMenuOpen = ref(false);

function toogleMobileMenu() {
    console.log(isMobileMenuOpen);
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

</script>

<template>
    <header class="fixed w-full top-0 z-10 backdrop-blur-md">
        <nav class="max-w-7xl mx-auto flex p-5 justify-between">
            <div class="order-last">
                <Switch class="hidden lg:flex"/>
                <button data-collapse-toggle="mobile-menu"
                        type="button"
                        class="p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        @click="toogleMobileMenu">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                    </svg>
                    <svg class="hidden w-6 h-6" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

            <div class="order-1 inline-flex">
                <NuxtLink to="/" class="mr-3">
                    <img src="/logo.png" alt="" class="w-10 h-10">
                </NuxtLink>
            </div>

            <div class="items-center lg:flex lg:mx-auto order-2">
                <div :class="{ 'mobile-menu-active backdrop-blur-md': isMobileMenuOpen }"
                     class="hidden justify-between text-center items-center lg:flex" id="mobile-menu">
                    <button data-collapse-close="mobile-menu"
                            type="button"
                            class="absolute top-5 right-5 p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu"
                            @click="toogleMobileMenu">
                        <span class="sr-only">Open main menu</span>
                        <svg fill="#FFFFFF" width="20" height="20" version="1.1" id="lni_lni-close"
                             xmlns="http://www.w3.org/2000/svg" x="0px"
                             y="0px" viewBox="0 0 64 64" xml:space="preserve">
                      <path d="M35.2,32L59.6,7.6c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L32,28.8L7.6,4.4c-0.9-0.9-2.3-0.9-3.2,0
                        c-0.9,0.9-0.9,2.3,0,3.2L28.8,32L4.4,56.4c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7L32,35.2l24.4,24.4
                        c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L35.2,32z"/>
                      </svg>
                    </button>
                    <ul class="flex flex-col mt-11 lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <button data-collapse-close="mobile-menu" aria-controls="mobile-menu" @click="toogleMobileMenu">
                            <NuxtLink :to="localePath('/')"
                                      class="block py-2 p-4 align-middle rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                      :class="{'text-4xl m-6 font-bold' : isMobileMenuOpen}">
                                {{ $t('home') }}
                            </NuxtLink>
                            </button>
                        </li>
                        <li>
                            <button data-collapse-close="mobile-menu" aria-controls="mobile-menu" @click="toogleMobileMenu">
                            <NuxtLink :to="localePath('/about')"
                                      class="block py-2 p-4  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                      :class="{'text-4xl m-6 font-bold' : isMobileMenuOpen}">
                                {{ $t('about') }}
                            </NuxtLink>
                            </button>
                        </li>
                        <li>
                            <button data-collapse-close="mobile-menu" aria-controls="mobile-menu" @click="toogleMobileMenu">
                            <NuxtLink :to="localePath('/blog')"
                                      class="block py-2 p-4  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                      :class="{'text-4xl m-6 font-bold' : isMobileMenuOpen}" >
                                {{ $t('blog') }}
                            </NuxtLink>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    </header>
</template>

<script>


</script>

<style>
@media (max-width: 1024px) {
    .mobile-menu-active {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
}
</style>
