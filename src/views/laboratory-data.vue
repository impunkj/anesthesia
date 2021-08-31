<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Laboratory Data" icon="filter">
        <form @submit.prevent="submit">

          <div class="columns">
            <div class="column is-full">
              <b-field label="GFR(Calc)">
                <b-input v-model="form.GFR">
                </b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-full">
              <b-field label="Other">
                <b-input maxlength="300" v-model="form.GFR" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-fifth">
              <b-field label="Total Bil">
                <b-input v-model="form.totalBil">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Alk Phos" v-model="form.alkPhos">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Dir. Bil">
                <b-input v-model="form.dirBil">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="LDH">
                <b-input v-model="form.LDH">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="HIV">
                  <b-radio v-model="form.HIV" name="name" native-value="hivplusve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HIV" name="name" native-value="hivminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-fifth">
              <b-field label="Platelets">
                <b-input v-model="form.Platelets">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Na">
                <b-input v-model="form.Na">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Ca" v-model="form.Ca">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Mg">
                <b-input v-model="form.Mg">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="HBS Ag">
                  <b-radio v-model="form.HBSAg" name="hbs" native-value="hbsagplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HBSAg" name="hbs" native-value="hbsagminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <div class="columns">
            <div class="column is-one-fifth">
              <b-field label="Hb">
                <b-input v-model="form.Hb">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Glucose">
                <b-input v-model="form.Glucose">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Protein" v-model="form.Protein">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="X-Ray">
                <b-input v-model="form.xRay">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="HCV">
                  <b-radio v-model="form.HCV" name="hcv" native-value="hcvplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HCV" name="hcv" native-value="hcvminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-fifth">
              <b-field label="PC">
                <b-input v-model="form.PC">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Urea">
                <b-input v-model="form.Urea">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Alb">
                <b-input v-model="form.Alb">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="ECG">
                <b-input v-model="form.ECG">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="Stress/Angio">
                  <b-radio v-model="form.stressAngio" name="stress" native-value="stressplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.stressAngio" name="stress" native-value="stressminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
               <div class="column is-one-fifth">
              <b-field label="INR">
                <b-input v-model="form.INR">
                </b-input>
              </b-field>
            </div>
            <div class="column is-one-fifth">
              <b-field label="PTT">
                <b-input v-model="form.PTT">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="PT">
                <b-input v-model="form.PT">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="K">
                <b-input v-model="form.K">
                </b-input>
              </b-field>
            </div>



            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="RTPCR">
                  <b-radio v-model="form.rtpcr" name="rtpcr" native-value="rtpcrPlus" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.rtpcr" name="rtpcr" native-value="rtpcrminus" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>



          <!--  -->
          <div class="columns">


            <div class="column is-one-fifth">
              <b-field label="Amylase">
                <b-input v-model="form.Amylase">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="WBC">
                <b-input v-model="form.WBC">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Creatine">
                <b-input v-model="form.Creatine">
                </b-input>
              </b-field>
            </div>
          </div>



          <!--  <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Hb">
                        <b-input v-model="form.Hb">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Glucose">
                        <b-input v-model="form.Glucose">
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Protein" v-model="form.Protein">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="X-Ray">
                        <b-input v-model="form.xRay">
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half cstm-radio-btn">

            </div>
          </div> -->



          <!--  <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="PC">
                        <b-input v-model="form.PC">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Urea">
                        <b-input v-model="form.Urea">
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Alb">
                        <b-input v-model="form.Alb">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="ECG">
                        <b-input v-model="form.ECG">
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
                  <b-radio v-model="form.HBSAg" name="name" native-value="hbsagplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HBSAg" name="name" native-value="hbsagminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div> -->


          <!-- <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="WBC">
                        <b-input v-model="form.WBC">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Creatine">
                        <b-input v-model="form.Creatine">
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Total Bil">
                        <b-input v-model="form.totalBil">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="2D Echo">
                        <b-input v-model="form.DEcho" >
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
                  <b-radio v-model="form.HCV" name="name" native-value="hcvplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HCV" name="name" native-value="hcvminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div> -->


          <!--  <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Platelets">
                        <b-input v-model="form.Platelets">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Na">
                        <b-input v-model="form.Na">
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="column is half">
                  <div class="columns">
                    <div class="column is half">
                      <b-field label="Ca" v-model="form.Ca">
                        <b-input>
                        </b-input>
                      </b-field>
                    </div>
                    <div class="column is half">
                      <b-field label="Mg">
                        <b-input v-model="form.Mg">
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
                  <b-radio v-model="form.stressAngio" name="name" native-value="stressplussve" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.stressAngio" name="name" native-value="stressminusve" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div> -->


          <!-- <div class="columns">
            <div class="column is-one-quarter ">
              <b-field label="PT">
                <b-input v-model="form.PT">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="K">
                <b-input v-model="form.K">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="LDH">
                <b-input v-model="form.LDH">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Other">
                <b-input  v-model="form.other1" >
                </b-input>
              </b-field>
            </div>
          </div> -->

          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="2D Echo">
                <b-input maxlength="300" v-model="form.DEcho" type="textarea"></b-input>
              </b-field>
            </div>
          </div>



          <!--  <div class="columns">
            <div class="column is-one-quarter ">
              <b-field label="PTT">
                <b-input v-model="form.PTT">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Ca" v-model="form.Ca">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Alk Phos" v-model="form.alkPhos">
                <b-input>
                </b-input>
              </b-field>
            </div>

             <div class="column is-one-quarter ">
              <b-field label="Other"  v-model="form.other2" >
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div> -->



          <!--  <div class="columns">
            <div class="column is-one-quarter ">
              <b-field label="INR">
                <b-input v-model="form.INR">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Mg">
                <b-input v-model="form.Mg">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-quarter ">
              <b-field label="Amylase">
                <b-input v-model="form.Amylase">
                </b-input>
              </b-field>
            </div>

             <div class="column is-one-quarter ">
              <b-field label="Other">
                <b-input  v-model="form.other3" >
                </b-input>
              </b-field>
            </div>
          </div> -->
          <b-button type="sbmt-btn" @click="submit">Submit</b-button>

        </form>
      </card-component>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
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
        form: {},
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
      submit() {
        var baseURL = this.$store.state.siteURL + 'api/laboratorydatas';
        this.form.patientNo = localStorage.getItem('patientID');
        axios.post(baseURL, this.form).then((r) => {
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },
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
