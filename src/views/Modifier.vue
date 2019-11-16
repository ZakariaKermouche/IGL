<template>
    <v-form
      ref="form"
    >
      <v-text-field
        :disabled="!edit"
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        :disabled="!edit"
        v-model="last_name"
        :rules="last_nameRules"
        label="last_Name"
        required
      ></v-text-field>
      <v-text-field
        :disabled="!edit"
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
      <v-btn
        color="success"
        class="mr-4"
        @click="editor"
      >
      Edit
      </v-btn>

    </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: false,
      edit: false,
      name: 'kamel',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be more than 3 characters',
      ],
      last_name: 'frada',
      last_nameRules: [
        v => !!v || 'Last name is required',
        v => (v && v.length >= 3) || 'Last Name must be more than 3 characters',
      ],
      poste: 'personnel de l esi',
      posteRules: [
        v => !!v || 'poste is required',
        v => v.length >= 10 || 'poste must be valid',
      ],
      
    }),

    methods: {
      validate () {
        this.valid = false;
        this.edit = false;
      },
      editor () {
        this.edit =true;
        this.valid = true;
        },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>