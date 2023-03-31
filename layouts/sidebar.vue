<script setup lang="ts"></script>

<template>
  <NuxtLayout name="body">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:pl-20">
        <!-- sidebar teleport -->
        <div id="sidebar-teleport"></div>
      </div>

      <div class="lg:order-first lg:row-span-2">
        <!--  -->
        <slot></slot>
      </div>

      <div class="lg:pl-20">
        <div class="space-y-10 lg:pl-16 xl:pl-24">
          <slot name="sidebar"></slot>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
