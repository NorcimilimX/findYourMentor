<template>
  <section>
    <base-card>
      <h2>You have some knowledge to share?<br><strong>Register as a mentor now!</strong></h2>
      <mentor-form></mentor-form>
    </base-card>
  </section>
</template>

<script>
import MentorForm from "../../components/mentors/MentorForm.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
    MentorForm
  }
}
</script>