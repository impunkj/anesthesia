<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Failure">
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

            <div class="column is-one-half">
              <b-field label="Urea">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-half">
              <b-field label="Creatinine">
                <b-input>
                </b-input>
              </b-field>
              <p> <b> "Start Renal Questionnaire" </b> </p>
            </div>
          </div>

          <b-field>
            <b-checkbox  v-model="checkboxClick" type="is-info">Dialysis</b-checkbox>
          </b-field>

<div v-if="checkboxClick">
          <b-field>
            <b-checkbox v-model="checkboxClick2" type="is-info">Hemo</b-checkbox>
          </b-field>

          <div class="columns" v-if="checkboxClick2">
            <div class="column is-one-half">
              <b-field>
                <b-select placeholder="Frequency" expanded>
                  <option value="flint">Ony Once</option>
                  <option value="silver">Everyday</option>
                  <option value="silver">Times in a week</option>
                </b-select>
              </b-field>
            </div>

            <div class="column is-one-half">
              <b-field label="">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


          <b-field>
            <b-checkbox type="is-info" v-model="checkboxClick4">Peritoneal</b-checkbox>
          </b-field>

<div v-if="checkboxClick4">

          <div class="columns mb-3" >

            <div class="column is-6">
              <b-field>
                <b-select placeholder="Frequency" expanded>
                  <option value="flint">Ony Once</option>
                  <option value="silver">Everyday</option>
                  <option value="silver">Times in a week</option>
                </b-select>
              </b-field>
            </div>

             <div class="column is-6">
              <b-field label="">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>
          </div>

           <b-field class="mb-4">
            <b-checkbox v-model="checkboxClick3" type="is-info">Fistual</b-checkbox>
          </b-field>

          <div class="columns" v-if="checkboxClick3">
            <div class="column is-full">
              <b-field label="Site">
                <b-input>
                </b-input>
              </b-field>
              <p class="mb-4"> <b> "Protect Fistula Site No BP Recording From That Arm" </b> </p>
            </div>
          </div>


</div>
  <b-button type="sbmt-btn ">Submit</b-button>
 </div>




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
        checked:false,
        checkboxClick : false,
        checkboxClick2 : false,
        checkboxClick3 : false,
        checkboxClick4 : false,
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
