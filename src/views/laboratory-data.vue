<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Laboratory Data" icon="filter" >
        <form @submit.prevent="submit">


          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="Total Bil">
                <b-input v-model="form.totalBill">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Dir. Bil">
                <b-input v-model="form.dirBill">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Alk Phos" >
                <b-input v-model="form.alkPhos">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="SGOT" >
                <b-input  v-model="form.sgot"> </b-input>
                </b-field>
            </div>
            <div class="column is-one-fifth">
              <b-field label="SGPT">
                <b-input v-model="form.sgpt"> </b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="LDH">
                <b-input v-model="form.Ldh">
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
              <b-field label="Creatine">
                <b-input v-model="form.Creatine">
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
              <b-field label="K">
                <b-input v-model="form.K">
                </b-input>
              </b-field>
            </div>


          </div>



          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="Ca" >
                <b-input  v-model="form.Ca">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Mg">
                <b-input v-model="form.Mg">
                </b-input>
              </b-field>
            </div>



            <div class="column is-one-fifth">
              <b-field label="Hb">
                <b-input v-model="form.Hb">
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
              <b-field label="Platelets">
                <b-input v-model="form.Platelets">
                </b-input>
              </b-field>
            </div>

          </div>


          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="PCV">
                <b-input v-model="form.Pcv">
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
              <b-field label="Protein" >
                <b-input v-model="form.Protein">
                </b-input>
              </b-field>
            </div>


  <div class="column is-one-fifth">
              <b-field label="APTT">
                <b-input v-model="form.APTT">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="PT">
                <b-input v-model="form.PT">
                </b-input>
              </b-field>
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
              <b-field label="RBS">
                <b-input v-model="form.Rbs">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="PPBS">
                <b-input v-model="form.Ppbs">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="HbA1c">
                <b-input v-model="form.Hba">
                </b-input>
              </b-field>
            </div>
              <div class="column is-one-fifth">
              <b-field label="ECG">
                <b-input v-model="form.ECG">
                </b-input>
              </b-field>
            </div>

          </div>



          <!--  -->

  <div class="columns">
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

   <div class="columns">




            <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.Other1">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.Other2">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.Other3">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.Other4">
                </b-input>
              </b-field>
            </div>
          </div>


       <div class="columns">
            <div class="column is-6">
              <b-field label="Cardiac echo ">
                <b-input maxlength="300" v-model="form.Ecg" type="textarea"></b-input>
              </b-field>
            </div>

             <div class="column is-6">
              <b-field label="Chest X-Ray">
                <b-input maxlength="300" v-model="form.ChestXray" type="textarea"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">

          </div>

 <div class="columns">
            <div class="column is-full">
              <b-field label="Other">
                <b-input maxlength="300" v-model="form.Other" type="textarea"></b-input>
              </b-field>
            </div>
          </div>
          <b-button type="sbmt-btn"   native-type="submit">Submit</b-button>
          <b-button class="ml-10" type="primary" @click="reset()">Reset</b-button>
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
  import HeroBar from '@/components/HeroBar';


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
      // console.log(JSON.parse(localStorage.getItem("patientName")));
      return {
        radio: 'default',
        isLoading: false,
        form: {},
        patientName :  localStorage.getItem("patientName"),
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        },
        departments: ['Business Development', 'Marketing', 'Sales']
      }
    },
    mounted(){
      var patientName = localStorage.getItem("patientName");
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {

      submit() {
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var baseURL = this.$store.state.siteURL + 'api/laboratorydatas';
        this.form.patientNo = localStorage.getItem('patientID');
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
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
