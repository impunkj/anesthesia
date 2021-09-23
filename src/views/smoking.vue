<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Smoking">
        <form @submit.prevent="submit">

          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="How Many">
                <b-input maxlength="300" type="textarea" v-model="form.howmany"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="When did you stop it">
                <b-input maxlength="300" type="textarea" v-model="form.whenStop"></b-input>
              </b-field>
            </div>
          </div>



          <b-field label="How Long">
          </b-field>
          <div class="columns">

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY" v-model="form.hlyy">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM" v-model="form.hlmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD" v-model="form.hldd">
                </b-input>
              </b-field>
            </div>

          </div>

          <b-button type="sbmt-btn">Submit</b-button>


        </form>
      </card-component>

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
