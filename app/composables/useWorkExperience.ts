import type {
  IWorkExperience,
  responseWorkExperience,
} from "~/types/work-experience";

export const useWorkExperience = () => {
  /** Properties */
  const workExperience = ref<IWorkExperience[]>([]);
  const message = ref<string>("");
  const loading = ref<boolean>(false);

  /**
   * Function to fetch work experience
   * @returns void
   */
  async function getWorkExperience(params?: Record<string, any>) {
    message.value = "";
    loading.value = true;
    try {
      const response: responseWorkExperience = await $fetch(
        "/api/public/work-experience",
        {
          method: "GET",
        },
      );

      if (response.success) {
        workExperience.value = response.data;
      }

      loading.value = false;
    } catch (error: any) {
      message.value =
        error.response._data?.message || "Error fetching work experience";
      loading.value = false;
    }
  }

  return {
    workExperience,
    message,
    loading,
    getWorkExperience,
  };
};
