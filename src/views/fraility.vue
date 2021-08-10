<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Fraility">
        <form @submit.prevent="submit">
          <div class="columns">
            <div class="column is-one-half">
              <b-field label="Supplement steroid">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-one-half">
              <b-field label="Steroid intake in last 6 months">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column">
              <b-field label="Fraility score">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns frailty-sec">
            <div class="column is-2">
              <p> <b> Frailty </b> </p>
            </div>
            <div class="column is-5">
              <p> <b> Item </b> </p>
            </div>
            <div class="column is-5">
              <p> <b> <span> 0 point, </span> <span> 1 point, </span> <span>2 point </span> </b> </p>
            </div>
          </div>

          <div class="columns">
            <div class="column is-2">
              <p> Cognition </p>
            </div>
            <div class="column is-5">
              <p> Please imagine that this pre-drawn circle is a clock. I would like you to place the numbers in the
                correct positions then place the hands to indicate a time of ‘ten after eleven’ </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="error" native-value="errorNo" type="is-info">
                    No errors
                  </b-radio>
                  <b-radio v-model="radio" name="error" native-value="errorSpacing" type="is-info">
                    Minor spacing error
                  </b-radio>
                  <b-radio v-model="radio" name="error" native-value="errorOther" type="is-info">
                    Other errors
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-2">
              <p> General health status </p>
            </div>
            <div class="column is-5">
              <p> In the past year, how many times have you been admitted to a hospital?</p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="generalhealth" native-value="generalhealth0" type="is-info">
                    0
                  </b-radio>
                  <b-radio v-model="radio" name="generalhealth" native-value="generalhealth1" type="is-info">
                    1-2
                  </b-radio>
                  <b-radio v-model="radio" name="generalhealth" native-value="generalhealth2" type="is-info">
                    >2
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-2">
              <p> </p>
            </div>
            <div class="column is-5">
              <p> In general, how would you describe your health? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="general" native-value="generalgood" type="is-info">
                    ‘Excellent’, ‘Very good’, ‘Good’
                  </b-radio>
                  <b-radio v-model="radio" name="general" native-value="generalfair" type="is-info">
                    ‘Fair’
                  </b-radio>
                  <b-radio v-model="radio" name="general" native-value="generalpoor" type="is-info">
                    ‘Poor’
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-2">
              <p> Functional independence </p>
            </div>
            <div class="column is-5">
              <p> With how many of the following activities do you require help? (meal preparation, shopping,
                transportation, telephone, housekeeping, laundry, managing money, taking medications) </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="independence" native-value="independence0" type="is-info">
                    0-1
                  </b-radio>
                  <b-radio v-model="radio" name="independence" native-value="independence1" type="is-info">
                    2-4
                  </b-radio>
                  <b-radio v-model="radio" name="independence" native-value="independence2" type="is-info">
                    5-8
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-2">
              <p> Social support </p>
            </div>
            <div class="column is-5">
              <p> When you need help, can you count on someone who is willing and able to meet your needs? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="support" native-value="supportAlways" type="is-info">
                    Always
                  </b-radio>
                  <b-radio v-model="radio" name="support" native-value="supportSometimes" type="is-info">
                    Sometimes
                  </b-radio>
                  <b-radio v-model="radio" name="support" native-value="supportNever" type="is-info">
                    Never
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-2">
              <p> Medication use </p>
            </div>
            <div class="column is-5">
              <p> Do you use five or more different prescription medications on a regular basis? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="medication" native-value="medicationYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="medication" native-value="medicationNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-2">
              <p> </p>
            </div>
            <div class="column is-5">
              <p> At times, do you forget to take your prescription medications? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="prescription" native-value="prescriptionYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="prescription" native-value="prescriptionNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-2">
              <p> Nutrition </p>
            </div>
            <div class="column is-5">
              <p> Have you recently lost weight such that your clothing has become looser? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="nutrition" native-value="nutritionYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="nutrition" native-value="nutritionNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-2">
              <p> Mood </p>
            </div>
            <div class="column is-5">
              <p> Do you often feel sad or depressed? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="mood" native-value="moodYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="mood" native-value="moodNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-2">
              <p> Continence </p>
            </div>
            <div class="column is-5">
              <p> Do you have a problem with losing control of urine when you don’t want to? </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="continence" native-value="continenceYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="continence" native-value="continenceNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-2">
              <p> Functional performance </p>
            </div>
            <div class="column is-5">
              <p> I would like you to sit in this chair with your back and arms resting. Then, when I say ‘GO’, please
                stand up and walk at a safe and comfortable pace to the mark on the floor (approximately 3m away),
                return to the chair and sit down’ </p>
            </div>
            <div class="column is-5 cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-radio v-model="radio" name="functional" native-value="functional10" type="is-info">
                    0–10 s
                  </b-radio>
                  <b-radio v-model="radio" name="functional" native-value="functional11" type="is-info">
                    11–20 s
                  </b-radio>
                  <b-radio v-model="radio" name="functional" native-value="functional20" type="is-info">
                    One of :>20 s,or patient unwilling ,or requires assistance
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-2">
              <p> Totals </p>
            </div>
            <div class="column is-5">
              <p> Final score is the sum of column totals </p>
            </div>
            <div class="column is-5">
              <b-field label="TOTAL (/17)">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


           <div class="columns">
            <div class="column">
              <p> <b> Scoring </b> </p>
              <ul class="cstm-ul-li mt-4">
                  <li> 0 - 5 = Not Frail  </li>
                  <li> 6 - 7 = Vulnerable </li>
                  <li> 8 - 9 = Mild Frailty </li>
                  <li> 10-11 = Moderate Frailty </li>
                  <li> 12-17 = Severe Frailty </li>
               </ul>
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
