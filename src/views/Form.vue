<template>
  <v-row align="center">
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="last_name"
        :rules="last_nameRules"
        label="last_Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="poste"
        :rules="posteRules"
        label="poste"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>

    </v-form>
  </v-row>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be more than 3 characters',
      ],
      last_name: '',
      last_nameRules: [
        v => !!v || 'Last name is required',
        v => (v && v.length >= 3) || 'Last Name must be more than 3 characters',
      ],
      poste: '',
      posteRules: [
        v => !!v || 'poste is required',
        v => v.length >= 10 || 'poste must be valid',
      ],
      
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>