<template>
  <div>

    <section class="section is-main-section">
      <card-component title="MI">
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
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YYYY" v-model="form.whyy">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM" v-model="form.whmm">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD" v-model="form.whdd">
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>


            <div class="column is-one-third medicalrx">
              <b-field label="Medical ">
                <b-input v-model="form.medical">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Stented">
                  <b-radio  name="stented" native-value="stentedYes" type="is-info" v-model="form.stented">
                    Yes
                  </b-radio>
                  <b-radio  name="stented" native-value="stentedNo" type="is-info" v-model="form.stented">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="Treatment" class="d-inline-block">  </b-field> <!-- <img class="align-middle" src="../assets/rx.png" alt=""> -->
              <b-field >
                <b-input maxlength="300" type="textarea" v-model="form.treatMent"></b-input>
              </b-field>
            </div>
          </div>



          <div class="columns">
           <div class="column is-one-third">
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YYYY" v-model="form.twhyy">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM" v-model="form.twhmm">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD" v-model="form.twhdd">
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>

           <!--  <div class="column is-one-third">
              <b-field label="What medication ">
                <b-input>
                </b-input>
              </b-field>
            </div> -->

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block" >
                <b-field label="Stopped Antiplatelet" >
                  <b-radio  v-model="isCardModalActive2" name="antiplatelet" native-value="antiplateletYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  name="antiplatelet" native-value="antiplateletNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns ">
            <div class="column is-full " @click="isCardModalActive = true">
              <b-field label="What treatment">
                <b-input maxlength="300" type="textarea" v-model="form.whatTreatment"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Symptoms Improved">
                  <b-radio  name="symptomsImp" native-value="symptomsImprovedYes" type="is-info" v-model="form.symptomsImproved">
                    Yes
                  </b-radio>
                  <b-radio  name="symptomsImp" native-value="symptomsImprovedNo" type="is-info" v-model="form.symptomsImproved">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="CABG">
                  <b-radio v-model="isCardModalActive3" name="cabg" native-value="cabgYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  name="cabg" native-value="cabgNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

             <div class="column is-one-third">
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YYYY"  >
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM" >
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD" >
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>
          </div>


          <div class="columns">
           <!--  <div class="column is-one-third">
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YY">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD">
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div> -->

            <div class="column is-one-third">
              <b-field label="What medication ">
                <b-input v-model="form.medication">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Symptoms improved">
                  <b-radio  name="symptoms" native-value="symptomsYes" type="is-info" >
                    Yes
                  </b-radio>
                  <b-radio  name="symptoms" native-value="symptomsNo" type="is-info" >
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Both Stented and CABG">
                  <b-radio name="stendedCabg" native-value="stendedCabgYes" type="is-info" v-model="form.BStentedCABG">
                    Yes
                  </b-radio>
                  <b-radio name="stendedCabg" native-value="stendedCabgNo" type="is-info" v-model="form.BStentedCABG">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-full">
              <b-field label="Type of Graft">
                <b-input maxlength="300" type="textarea" v-model="form.typeofGraft"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <!-- <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Both Stented and CABG">
                  <b-radio name="stendedCabg" native-value="stendedCabgYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio name="stendedCabg" native-value="stendedCabgNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div> -->

          <!--   <div class="column is-one-third ">
              <b-field label="Repeat CAG">
                <b-input>
                </b-input>
              </b-field>
            </div> -->

            <!-- <div class="column is-one-third ">
              <b-field label="How many times">
                <b-input>
                </b-input>
              </b-field>
            </div> -->

          </div>

          <div class="columns mb-3">
             <div class="column is-full ">
              <b-field label="Repeat CAG">
                <b-input v-model="form.repeatCag">
                </b-input>
              </b-field>
            </div>
          </div>

</div>
          <b-button type="sbmt-btn" class=" ">Submit</b-button>

        </form>
      </card-component>



      <b-modal v-model="isCardModalActive" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Treatment </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antiplatelet">
                    <b-radio v-model="radio" name="antiplatelet" native-value="antiplateletYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="antiplatelet" native-value="antiplateletNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>

              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antianginals">
                    <b-radio v-model="radio" name="antianginals" native-value="antianginalsYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="antianginals" native-value="antianginalsNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>


            <div class="columns">
              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Statins">
                    <b-radio v-model="radio" name="statins" native-value="statinsYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="statins" native-value="statinsNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>

              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Anticoagulant">
                    <b-radio v-model="radio" name="anticoagulant" native-value="anticoagulantYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="anticoagulant" native-value="anticoagulantNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="columns mb-0">
              <div class="column is-full">
                <b-field label="Other">
                  <b-input maxlength="300" type="textarea"></b-input>
                </b-field>
              </div>
            </div>


            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>




     <!-- Stpped modal start-->
     <b-modal  v-model="isCardModalActive2" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Stopped Antiplatelet </h3>
          <div class="card-content">


            <b-field label="When" class=""> </b-field>
          <div class="columns">
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

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="HH">
                </b-input>
              </b-field>
            </div>
          </div>

            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>
     <!-- stopped modal end -->


     <!-- cABG modal start-->
     <b-modal  v-model="isCardModalActive3" :width="640">
        <div class="card">
          <h3 class="popup-heading"> CABG </h3>
          <div class="card-content">


            <b-field label="When" class=""> </b-field>
          <div class="columns">
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

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="HH">
                </b-input>
              </b-field>
            </div>
          </div>

            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>
     <!-- cABG modal end -->






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
        isImageModalActive: false,
        isCardModalActive: false,
        isCardModalActive2: false,
        isCardModalActive3: false,
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
