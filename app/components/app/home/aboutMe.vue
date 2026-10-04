<template>
  <section id="about" class="relative isolate overflow-hidden py-8 sm:py-20">
    <div class="mx-auto max-w-7xl px-2">
      <div class="mb-8 max-w-3xl">
        <p
          class="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          <span class="h-px w-8 bg-primary" />
          {{ $t("aboutMe.eyebrow") }}
        </p>
      </div>

      <div class="grid items-stretch gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div
          class="rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm backdrop-blur sm:p-9"
        >
          <div class="mb-6 flex flex-wrap gap-2">
            <span
              v-for="role in roles"
              :key="role"
              class="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
            >
              {{ role }}
            </span>
          </div>

          <p class="text-lg font-semibold leading-8 sm:text-xl sm:leading-9">
            {{ $t("aboutMe.intro") }}
          </p>
          <p class="mt-5 leading-8 text-muted-foreground">
            {{ $t("aboutMe.description") }}
          </p>
          <p
            class="mt-5 border-l-2 border-primary pl-4 leading-8 text-muted-foreground"
          >
            {{ $t("aboutMe.approach") }}
          </p>
        </div>

        <aside
          class="relative overflow-hidden rounded-[2rem] bg-neutral-950 p-6 text-white shadow-xl shadow-primary/10 sm:p-8"
          :aria-label="$t('aboutMe.profileLabel')"
        >
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl"
          />
          <div class="relative flex h-full flex-col">
            <div class="flex items-center gap-3">
              <span
                class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary"
              >
                <UIcon name="i-lucide-map-pin" class="h-5 w-5" />
              </span>
              <div>
                <p
                  class="text-xs font-medium uppercase tracking-widest text-white/50"
                >
                  {{ $t("aboutMe.locationLabel") }}
                </p>
                <p class="mt-1 font-semibold">Valinhos, São Paulo, Brasil</p>
              </div>
            </div>

            <div class="my-8 h-px bg-white/10" />

            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p class="text-3xl font-black text-primary">25</p>
                <p class="mt-2 text-sm text-white/65">
                  {{ $t("aboutMe.ageLabel") }}
                </p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p class="text-3xl font-black text-primary">4+</p>
                <p class="mt-2 text-sm text-white/65">
                  {{ $t("aboutMe.experienceLabel") }}
                </p>
              </div>
            </div>

            <p class="mt-auto pt-8 text-sm leading-6 text-white/65">
              {{ $t("aboutMe.locationNote") }}
            </p>
          </div>
        </aside>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <article
          v-for="area in areas"
          :key="area.title"
          class="group rounded-3xl border border-border bg-background p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
        >
          <span
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"
          >
            <UIcon :name="area.icon" class="h-6 w-6" />
          </span>
          <h3 class="text-lg font-bold">{{ $t(area.title) }}</h3>
          <p class="mt-2 text-sm leading-7 text-muted-foreground">
            {{ $t(area.description) }}
          </p>
        </article>
      </div>

      <div
        class="mt-8 flex flex-col gap-5 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div>
          <h3 class="text-xl font-bold sm:text-2xl">
            {{ $t("aboutMe.ctaTitle") }}
          </h3>
          <p class="mt-2 text-muted-foreground">
            {{ $t("aboutMe.ctaDescription") }}
          </p>
        </div>
        <UButton
          :label="$t('aboutMe.ctaButton')"
          to="/contact"
          trailing-icon="i-lucide-arrow-up-right"
          size="lg"
          class="w-fit"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const roles = computed(() => [
  t("aboutMe.roles.frontend"),
  t("aboutMe.roles.projectManager"),
  t("aboutMe.roles.qaAnalyst"),
]);

const areas = [
  {
    icon: "i-lucide-panels-top-left",
    title: "aboutMe.areas.frontendTitle",
    description: "aboutMe.areas.frontendDescription",
  },
  {
    icon: "i-lucide-list-checks",
    title: "aboutMe.areas.projectTitle",
    description: "aboutMe.areas.projectDescription",
  },
  {
    icon: "i-lucide-shield-check",
    title: "aboutMe.areas.qaTitle",
    description: "aboutMe.areas.qaDescription",
  },
];
</script>
