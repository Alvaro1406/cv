<template>
  <section
    class="relative isolate overflow-hidden px-2 py-6 lg:min-h-[85vh] lg:py-20"
  >
    <div
      class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
    >
      <div class="flex flex-col gap-8">
        <div class="space-y-5">
          <span
            class="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <span class="h-2 w-2 animate-pulse rounded-full bg-primary" />
            {{ $t("heroSection.availability") }}
          </span>

          <div>
            <p class="text-lg font-medium text-muted-foreground">
              {{ $t("heroSection.iam") }}
            </p>

            <h1
              class="text-3xl font-black leading-none tracking-tight sm:text-6xl lg:text-8xl flex gap-2"
            >
              <span class="text-primary">Alvaro</span>
              <span class="block">Beruvides</span>
            </h1>

            <h2
              class="mt-2 max-w-2xl text-xl font-bold leading-tight sm:text-3xl lg:text-4xl"
            >
              {{ $t("heroSection.title") }}
            </h2>
          </div>
        </div>

        <div v-if="isTablet()" class="relative mx-auto w-full max-w-md">
          <div
            class="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-2xl shadow-primary/20"
          >
            <img
              src="~/assets/images/alvaro.webp"
              alt="Alvaro Beruvides"
              class="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />

            <div
              class="absolute bottom-7 left-7 right-7 rounded-xl border border-white/20 bg-black/50 p-4 text-white backdrop-blur-md"
            >
              <p class="mt-1 font-semibold">Front-End Development & QA</p>
            </div>
          </div>
        </div>

        <div class="max-w-2xl space-y-5 xs:pt-8 sm:pt-0">
          <p
            class="border-l-2 border-primary pl-5 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            {{ $t("heroSection.phrase") }}
          </p>

          <p class="text-base leading-7 text-muted-foreground sm:text-lg">
            {{ $t("heroSection.subtitle") }}
          </p>
        </div>

        <div class="flex flex-row items-center gap-4">
          <buttonCmp :label="$t('heroSection.buttonText')" variant="solid" />
        </div>
      </div>

      <div v-if="!isTablet()" class="relative mx-auto w-full max-w-md">
        <div
          class="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-2xl shadow-primary/20"
        >
          <img
            src="~/assets/images/alvaro.webp"
            alt="Alvaro Beruvides"
            class="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />

          <div
            class="absolute bottom-7 left-7 right-7 rounded-xl border border-white/20 bg-black/50 p-4 text-white backdrop-blur-md"
          >
            <p class="mt-1 font-semibold">Front-End Development & QA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { isTablet } from "~/composables/useScreenSize";
import buttonCmp from "~/components/components/buttonCmp.vue";
</script>
