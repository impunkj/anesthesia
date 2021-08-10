<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Anaesthetic History">
        <form @submit.prevent="submit">



          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Past Anaesthetic History">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Physical Exam">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Airway">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="MP">
                    <b-select placeholder="Select Value" expanded>
                      <option value="flint">1</option>
                      <option value="silver">2</option>
                      <option value="silver">3</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Mouth Opening">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="Mentohyoid Distance">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column cstm-radio-btn">
              <div class="block">
                <b-field label="">
                  <b-checkbox v-model="checkboxGroup" native-value="neck" type="is-info">
                    Neck
                  </b-checkbox>
                  <b-checkbox v-model="checkboxGroup" native-value="teeth" type="is-info">
                    Teeth
                  </b-checkbox>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Lungs">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Heart">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="CNS">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-half cstm-radio-btn2">

              <div class="block">
                <b-field label="">
                  <b-checkbox v-model="checkboxGroup" native-value="pupils" type="is-info">
                    Pupils
                  </b-checkbox>

                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="E">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="V">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="M">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <b-field label="Other">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Venous access site">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Spine exam for regional">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Anaesthesia Plan">
                  <b-checkbox v-model="checkboxGroup" native-value="mac" type="is-info">
                    MAC
                  </b-checkbox>
                  <b-checkbox v-model="checkboxGroup" native-value="reginoal" type="is-info">
                    REGIONAL
                  </b-checkbox>
                  <b-checkbox v-model="checkboxGroup" native-value="gaeet" type="is-info">
                    GA-ETT
                  </b-checkbox>
                  <b-checkbox v-model="checkboxGroup" native-value="lma" type="is-info">
                    LMA
                  </b-checkbox>
                </b-field>
              </div>
            </div>

            <div class="column is-half">
              <b-field label="Proposed Post-op Pain relief ">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Peri-op plan explained to patient">
                  <b-checkbox v-model="checkboxGroup" native-value="periOpYes" type="is-info">
                    Yes
                  </b-checkbox>
                  <b-checkbox v-model="checkboxGroup" native-value="periOpNo" type="is-info">
                    No
                  </b-checkbox>
                </b-field>
              </div>
            </div>

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Will take blood">
                  <b-checkbox v-model="checkboxGroup" native-value="bloodYes" type="is-info">
                    Yes
                  </b-checkbox>
                  <b-checkbox v-model="checkboxGroup" native-value="bloodNo" type="is-info">
                    No
                  </b-checkbox>
                </b-field>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column  cstm-radio-btn-one-col">
              <div class="block">
                <b-field label="">
                  <b-checkbox v-model="checkboxGroup" native-value="pregent" type="is-info">
                    Pregnant
                  </b-checkbox>

                </b-field>
              </div>
            </div>
          </div>

           <div class="columns">
            <div class="column">
               <b-field label="Current medications">
                <b-input maxlength="300" type="textarea"></b-input>
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
        checkboxGroup: ['Flint'],
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
