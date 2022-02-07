<template>
  <div>

    <section class="section is-main-section  hero is-fullheight is-error-section login-page">
      <div class="column is-8 is-centered is-offset-2">
        <div class="columns login-form py-5">
          <div class="column is-6 text-ceter py-5">
            <img src="../assets/login.png" alt="">
          </div>
          <div class="column is-6 px-5 py-5">
            <div class="">
                  <form @submit.prevent="submit">
                <header class="mb-5 pb-3">
                  <p class="modal-card-title login-title">Login</p>
                </header>
                <section class="">
                  <b-field label="Email" :label-position="labelPosition">
                    <b-input type="email"  v-model="form.email"  maxlength="30"  required>
                    </b-input>
                  </b-field>

                  <b-field label="Password" :label-position="labelPosition">
                    <b-input  type="password"  v-model="form.password"  required  password-reveal
                      >
                    </b-input>
                  </b-field>

                  <b-checkbox  size="is-small"  type="is-info">Remember me</b-checkbox>
                  <div class="mt-4">
                      <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>
                   </div>
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
  import mapValues from 'lodash/mapValues'
  import TitleBar from '@/components/TitleBar'
  import CardComponent from '@/components/CardComponent'
  import CheckboxPicker from '@/components/CheckboxPicker'
  import RadioPicker from '@/components/RadioPicker'
  import FilePicker from '@/components/FilePicker'
  import HeroBar from '@/components/HeroBar'
  export default {
    name: 'Forms',
    components: {
      HeroBar,
      FilePicker,
      RadioPicker,
      CheckboxPicker,
      CardComponent,
      TitleBar
    },
    data() {
      return {
        labelPosition: 'on-border',
        radio: 'default',
        form:{

        },
        departments: ['Business Development', 'Marketing', 'Sales']
      }
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {
      submit() {
          ///this.$store.dispatch('login', this.form)
          this.$store.dispatch('login', this.form)
      },
      reset() {
        this.form = mapValues(this.form, (item) => {
          if (item && typeof item === 'object') {
            return []
          }
          return null
        })

        this.$buefy.snackbar.open({
          message: 'Reset successfully',
          queue: false
        })
      }
    }
  }

</script>