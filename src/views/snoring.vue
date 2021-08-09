<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Snoring">
        <form @submit.prevent="submit">

          <div class="columns mb-0">
            <div class="column is-one-third">
              <b-field label="Stop BANG Score">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="Sleep Study">
                  <b-radio v-model="radio" name="study" native-value="studyYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="study" native-value="studyNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="CPAP">
                  <b-radio v-model="radio" name="cpap" native-value="cpapYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="cpap" native-value="cpapNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="Do you wake up">
                  <b-radio v-model="radio" name="wake" native-value="wakeYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="wake" native-value="wakeNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-two-thirds  cstm-radio-btn">
              <div class="block">
                <b-field label="Do you fall asleep in the daytime">
                  <b-radio v-model="radio" name="asleep" native-value="asleepYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="asleep" native-value="asleepNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>

          <b-button type="sbmt-btn mt-2">Submit</b-button>


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
