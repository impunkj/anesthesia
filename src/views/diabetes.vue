<template>
  <section class="section is-main-section">
    <card-component title="Diabetes">

      <div class="columns">
        <div class="column is-full cstm-radio-btn">
          <div class="block">
            <b-field label="">
              <b-radio v-model="checked" name="checkVal" native-value="yes" type="is-info">
                Yes
              </b-radio>
              <b-radio v-model="checked" name="checkVal" native-value="no" type="is-info">
                No
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>

      <div v-if="checked === 'yes'">

        <div class="columns">
          <div class="column is-full  cstm-radio-btn">
            <div class="block">
              <b-field label="">
                <b-radio v-model="radio" name="mild" native-value="mildone" type="is-info">
                  Type 1
                </b-radio>
                <b-radio v-model="radio" name="mild" native-value="mildtwo" type="is-info">
                  Type 2
                </b-radio>
              </b-field>
            </div>
          </div>
        </div>

        <div class="columns mb-3">
          <div class="column is-full  cstm-radio-btn">
            <div class="block">
              <b-field label="Sugar check at home">
                <b-radio v-model="checked2" name="sugerCheck" native-value="sugerCheckone" type="is-info">
                  Yes
                </b-radio>
                <b-radio v-model="checked2" name="sugerCheck" native-value="sugerChecktwo" type="is-info">
                  No
                </b-radio>
              </b-field>
            </div>
          </div>
        </div>

        <div v-if="checked2 === 'sugerCheckone'">
          <div class="columns">
            <div class="column is-12">
              <b-field label="How much ?">
                <b-input  v-model="form.sugarCheckHome">
                </b-input>
              </b-field>
            </div>

            <!-- <div class="column is-4">
              <b-field label="Rx?">
                <b-select placeholder="Select Value" expanded>
                  <option value="Insulin">Insulin</option>
                  <option value="OHA">OHA</option>
                  <option value="Both">Both</option>
                </b-select>
              </b-field>
            </div>

             <div class="column is-4 cstm-radio-btn">
              <div class="block">
                <b-field label="Sequelae?">
                  <b-checkbox  name="urti" native-value="urtiYes" type="is-info">
                    Vascular
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info">
                    Eyes
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info">
                    Infections
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info">
                    kidney
                  </b-checkbox>
                </b-field>
              </div>
            </div> -->
          </div>




        <div class="columns mb-3">
          <div class="column is-full">
            <b-field label="What treatment" class="d-inline-block"> </b-field>
            <b-field>
              <b-input maxlength="300" type="textarea" v-model="form.whatTreatment"></b-input>
            </b-field>
          </div>
        </div>


        <div class="columns">

             <div class="column is-6">
              <b-field label="Rx?">
                <b-select placeholder="Select Value" expanded v-model="form.rxtreat">
                  <option value="Insulin">Insulin</option>
                  <option value="OHA">OHA</option>
                  <option value="Both">Both</option>
                </b-select>
              </b-field>
            </div>

           <div class="column is-6 cstm-radio-btn">
              <div class="block">
                <b-field label="Complications" v-model="form.complications">
                  <b-checkbox  name="urti" native-value="urtiYes" type="is-info" >
                    Vascular
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info" >
                    Eyes
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info" >
                    kidney
                  </b-checkbox>
                </b-field>
              </div>
            </div>
        </div>

         <!--  <div class="columns">
             <div class="column is-full cstm-radio-btn">
              <div class="block">
                <b-field label="Sequelae?">
                  <b-checkbox  name="urti" native-value="urtiYes" type="is-info">
                    Vascular
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info">
                    Eyes
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info">
                    Infections
                  </b-checkbox>
                  <b-checkbox  name="urti" native-value="urtiNo" type="is-info">
                    kidney
                  </b-checkbox>
                </b-field>
              </div>
            </div>
          </div> -->

           <div class="columns  mb-3">
            <div class="column is-full cstm-radio-btn">
              <div class="block">
                   <b-field label="">
                <b-checkbox  native-value="admission" type="is-info" v-model="form.dietcontrol">
                  Diet control
                </b-checkbox>

                 </b-field>
              </div>
            </div>

          </div>


        </div>




      </div>


      <b-button class="" type="sbmt-btn">Submit</b-button>

    </card-component>
  </section>
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
        checked2: false,
        isImageModalActive: false,
        isCardModalActive: false,
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
