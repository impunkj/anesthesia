<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Angina">
        <form @submit.prevent="submit">

<div class="columns">
   <div class="column is-full cstm-radio-btn"  >
              <div class="block">
                <b-field label="">
                  <b-radio v-model="checked" name="checkVal" native-value="yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  v-model="checked"   name="checkVal" native-value="no" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
      </div>
</div>

 <div  v-if="checked === 'yes'">

          <div class="columns">
            <div class="column is-one-third">
              <ul class="cstm-ul-li">
                <li>Check Heart Failure </li>
                <li>Pro BNP NT</li>
              </ul>
            </div>

            <div class="column is-one-third">
              <ul class="cstm-ul-li">
                <li>BNP</li>
                <li>S-4 JVP</li>
              </ul>
            </div>

            <div class="column is-one-third">
              <ul class="cstm-ul-li">
                <li>Cardiological Referral</li>
              </ul>
            </div>
          </div>

          <div class="columns">
             <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Status">
                  <b-radio  name="status" native-value="stable" type="is-info">
                    Stable
                  </b-radio>
                  <b-radio  name="status" native-value="unstable" type="is-info">
                    Unstable
                  </b-radio>
                </b-field>
              </div>
            </div>

              <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Taking treatment">
                  <b-radio  name="treatment" native-value="treatmentYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  name="treatment" native-value="treatmentNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>

          <div class="columns">
             <div class="column is-half">
              <b-field label="What causes Angina?">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

              <div class="column is-half">
              <b-field label="How it stops?">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


        <b-field label="Duration of treatment?"></b-field>
          <div class="columns mb-3">

            <div class="column is-one-third">
               <b-field  >
                        <b-input placeholder="YY">
                        </b-input>
                      </b-field>
            </div>

            <div class="column is-one-third">
              <b-field  >
                        <b-input placeholder="MM">
                        </b-input>
                      </b-field>
            </div>

            <div class="column is-one-third">
             <b-field  >
                        <b-input placeholder="DD">
                        </b-input>
                      </b-field>
            </div>
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
        checked: false,
        //  checkboxGroup: "",
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
