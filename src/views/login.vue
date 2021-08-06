<template>
  <div>

    <section class="section is-main-section">
      <div class="column is-8 is-centered is-offset-2">
        <div class="columns login-form py-5">
          <div class="column is-6 text-ceter py-5">
            <img src="../assets/login.png" alt="">
          </div>
          <div class="column is-6 px-5 py-5">
            <div class="">
              <form action="">
                <header class="mb-5 pb-3">
                  <p class="modal-card-title login-title">Login</p>
                </header>
                <section class="">
                  <b-field label="Email" :label-position="labelPosition">
                    <b-input type="email" value="" maxlength="30">
                    </b-input>
                  </b-field>

                  <b-field label="Password" :label-position="labelPosition">
                    <b-input  type="password"  password-reveal
                      >
                    </b-input>
                  </b-field>

                  <b-checkbox  size="is-small" type="is-info">Remember me</b-checkbox>
                  <div class="mt-4">
                   <button class="button sbmt-btn" >Login</button>
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
        isLoading: false,
        form: {
          name: null,
          email: null,
          phone: null,
          department: null,
          subject: null,
          question: null
        },
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
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
      submit() {},
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
