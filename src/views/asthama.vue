<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Asthama">
        <form @submit.prevent="submit">

          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="What causes">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">

            <div class="column is-half">
              <b-field label="How long"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="YYYY">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="MM">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="DD">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <b-field label="When did the last attack occur"> </b-field>
              <div class="columns">

                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="YYYY">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="MM">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="DD">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

          </div>

          <div class="columns">
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                   <b-field label="How do you treat it?">
                <b-checkbox v-model="checkboxGroup" native-value="admission" type="is-info">
                  Admission
                </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="ventilation" type="is-info">
                  Ventilation in ICU
                </b-checkbox>
                 </b-field>
              </div>
            </div>

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="URTI LRTI Present">
                  <b-radio v-model="radio" name="urti" native-value="urtiYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="urti" native-value="urtiNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

          </div>

          <b-button type="sbmt-btn">Primary</b-button>


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
