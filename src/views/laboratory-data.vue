<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Laboratory Data" icon="filter">
        <form @submit.prevent="submit">

          <div class="columns">
            <div class="column is-full">
              <b-field label="GFR(Calc)">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>

          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="Other">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Hgb">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Glucose">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Protein">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="X-Ray">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="HIV">
                  <b-radio v-model="radio" name="name" native-value="hivplusve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="hivminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="PVC">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Urea">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Alb">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="ECG">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="HBS Ag">
                  <b-radio v-model="radio" name="name" native-value="hbsagplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="hbsagminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="WBC">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Creat">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Total Bill">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="2D Echo">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="HCV">
                  <b-radio v-model="radio" name="name" native-value="hcvplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="hcvminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Plate">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Na">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Dir. Bill">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Other">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Stress/Angio">
                  <b-radio v-model="radio" name="name" native-value="stressplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="stressminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-quarter ">
              <b-field label="PT">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="k">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="LDH">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Other">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>

          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="Allergies">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>



<div class="columns">
            <div class="column is-one-quarter ">
              <b-field label="PTT">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Ca">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Alk Phos">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Other">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>



          <div class="columns">
            <div class="column is-one-quarter ">
              <b-field label="INR">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Mg">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Amylase">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Other">
                <b-input>
                </b-input>
              </b-field>
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
