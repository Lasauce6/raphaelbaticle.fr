<script setup>
import {onMounted} from 'vue'
import {initFlowbite} from "flowbite";

onMounted(() => {
    initFlowbite();
});
</script>

<template>
    <header class="fixed w-full top-0 z-10">
        <nav class="mx-auto flex p-5 justify-between mx-5">
            <div class="order-1 inline-flex">
                <NuxtLink to="/" class="mr-3">
                    <img src="/logo.png" alt="" class="w-10 h-10">
                </NuxtLink>
            </div>
        </nav>

    </header>
</template>

<script>


</script>