<template>
  <v-app>
    <div>
      <v-container>
        <v-layout class="my-auto" justify-center>
          <v-card text outlined width="400px" height="400px" class="mt-12">
            <v-form>
              <v-text-field
                class="px-12"
                type="email"
                label="Email"
                :rules="emailRules"
                required
                outlined
              ></v-text-field>
              <v-text-field
                class="px-12"
                type="password"
                label="Password"
                :rules="passwordRules"
                required
                outlined
              ></v-text-field>
            </v-form>
            <br><br>
            <v-layout justify-center>
              <v-btn outlined x-large>Login</v-btn>
            </v-layout>
          </v-card>
          <v-spacer></v-spacer>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters',
      ]
  }),
  methods: {
  }
};
</script>