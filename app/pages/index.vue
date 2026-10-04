<template>
  <div class="flex flex-col gap-12">
    <Hero />
    <AboutMe />
    <TechMastery />
    <SoftSkills />
  </div>
</template>

<script setup lang="ts">
import Hero from "~/components/app/home/hero.vue";
import AboutMe from "~/components/app/home/aboutMe.vue";
import SoftSkills from "~/components/app/home/softSkills.vue";
import TechMastery from "~/components/app/home/technicalMastery.vue";
</script>
