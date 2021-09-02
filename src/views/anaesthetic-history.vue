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
                  <span @click="isNeckModal = true">
                    <b-checkbox v-model="checkboxGroup" native-value="neck" type="is-info">
                      Neck
                    </b-checkbox>
                  </span>
                  <span @click="isTeethModal = true">
                    <b-checkbox v-model="checkboxGroup" native-value="teeth" type="is-info">
                      Teeth
                    </b-checkbox>
                  </span>
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

              <div class="block" @click="isPupilsModal = true">
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
                <p> <b>  "Explain Risks "</b> </p>
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




      <!-- Neck Modal -->
      <b-modal v-model="isNeckModal" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Neck </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antiplatelet">
                    <b-radio v-model="radio" name="neck" native-value="neckNormal" type="is-info">
                      Normal
                    </b-radio>
                    <b-radio v-model="radio" name="neck" native-value="neckAbnormal" type="is-info">
                      Abnormal
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>


            <div class="columns">
              <div class="column">
                <b-field label="Expanded">
                  <b-select placeholder="Select One" expanded>
                    <option value="flint">Fixed</option>
                    <option value="silver">Extension Problems</option>
                    <option value="silver">Flexion Problems</option>
                  </b-select>
                </b-field>
              </div>
            </div>

            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>
      <!-- Neck modal end -->


      <!-- Teeth Modal -->
      <b-modal v-model="isTeethModal" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Teeth </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="">
                    <b-checkbox v-model="checkboxGroup" native-value="teethLoose" type="is-info">
                      Loose
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="teethCaps" type="is-info">
                      Caps
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="teethCrowns" type="is-info">
                      Crowns
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="teethDenture" type="is-info">
                      Denture
                    </b-checkbox>
                  </b-field>
                  <p> <b> "Dental Protection Needed" </b> </p>
                </div>

              </div>
            </div>


            <div class="columns">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="">
                    <b-radio v-model="radio" name="neck" native-value="neckNormal" type="is-info">
                      Fixed
                    </b-radio>
                    <b-radio v-model="radio" name="neck" native-value="neckAbnormal" type="is-info">
                      Removeable
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>

            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>
      <!-- Teeth modal end -->


      <!-- Pupil Modal -->
      <b-modal v-model="isPupilsModal" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Pupil </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="">
                    <b-radio v-model="radio" name="neck" native-value="pupilEqual" type="is-info">
                      Equal
                    </b-radio>
                    <b-radio v-model="radio" name="neck" native-value="pupilUnqqual" type="is-info">
                      Unequal
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>


            <div class="columns">
              <div class="column is-half">
                <b-field label="Right">
                <b-input>
                </b-input>
              </b-field>
              </div>

               <div class="column is-half">
                <b-field label="Left">
                <b-input>
                </b-input>
              </b-field>
              </div>
            </div>


            <div class="columns">
              <div class="column">

              </div>

            </div>

            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>
      <!-- Pupil modal end -->

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
        isTeethModal: false,
        isNeckModal: false,
        isPupilsModal: false,
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
