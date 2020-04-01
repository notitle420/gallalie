<template>
  <v-app>
    <div>
      <v-container>
        <v-layout class='my-auto' justify-center>
          <v-card text outlined width='400px' height='400px' class='mt-12'>
            <v-form
              ref='form'
              @submit.prevent>
              <v-text-field
                class='px-12'
                type='email'
                label='Email'
                :rules='emailRules'
                v-model='email'
                required
                outlined
              ></v-text-field>
              <v-text-field
                class='px-12'
                type='password'
                label='Password'
                :rules='passwordRules'
                required
                outlined
                v-model='password'
              ></v-text-field>
            </v-form>
            <br><br>
            <v-layout justify-center>
              <v-btn outlined x-large @click='submit'>Register</v-btn>
            </v-layout>
          </v-card>
          <v-spacer></v-spacer>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
<script>
import { firebaseauth } from '@/firebase/firebaseAuth.js'
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
    submit() {
      firebaseauth
        //firebaseAuth.jsでfirebase.auth()まで書いてあるのでここから
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          //成功したらemailとpasswordを空に
          data.email = '';
          data.password = '';
          //成功したらホームにリダイレクト
          this.$router.push('/');
        })
        .catch(() => {});
    }
  }
};
</script>