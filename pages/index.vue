<template>
  <div class="flex">

    <section class="flex max-w-7xl mx-auto p-5 justify-center h-screen items-center">

      <div>
        <h1 class="flex text-4xl md:text-7xl font-sfbold justify-center">
          {{ $t('title') }}
        </h1>
        <h2 class="flex text-xl md:text-2xl justify-center m-2">
          {{ $t('subtitle') }}
        </h2>
        <div class="flex justify-center">
          <libraryButtonNuxt value="About" to='/about' class="m-2"/>
        </div>
      </div>

    </section>
  </div>
</template>

