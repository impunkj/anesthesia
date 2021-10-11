<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Surgery">
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
            <div class="column pb-0">
              <b-field class="checkOut">
            <b-checkbox type="is-info" v-model="form.brain"  native-value="1">Brain</b-checkbox>
          </b-field>
            </div>
          </div>

         <div class="columns" v-if="form.brain">
               <div class="column">
                <b-field label="What surgery?">
                  <b-input maxlength="300" type="textarea" v-model="form.brainwSurgery"></b-input>
                </b-field>
              </div>

               <div class="column ">
                <b-field label="Residual effect">
                  <b-input maxlength="300" type="textarea" v-model="form.brainREffect"></b-input>
                </b-field>
              </div>
          </div>

           <div class="columns">
            <div class="column pb-0">
              <b-field>
                <b-checkbox v-model="form.spinal" native-value="1" type="is-info">Spinal Cord</b-checkbox>
              </b-field>
            </div>
          </div>

          <div class="columns" v-if="form.spinal">
               <div class="column">
                <b-field label="What surgery?">
                  <b-input maxlength="300" type="textarea" v-model="form.spinalwSurgery"></b-input>
                </b-field>
              </div>

               <div class="column ">
                <b-field label="Residual effect">
                  <b-input maxlength="300" type="textarea" v-model="form.spinalREffect"></b-input>
                </b-field>
              </div>
          </div>

 <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>
           </div>

        </form>
      </card-component>

    </section>
  </div>
</template>

<script>
import axios from "axios";
import mapValues from 'lodash/mapValues'
import CardComponent from '@/components/CardComponent'
  export default {
    name: 'Forms',
    components: {
      CardComponent
    },
    data() {
      return {
        checked: false,
         checkboxClick : false,
         checkboxClick2 : false,
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
       mounted(){
         this.getSurgeryData();
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    submit(){
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        if(this.form.id){
           this.updateSurgeryData();
        }else {
          this.createSurgeryData();
        }
        loadingComponent.close();
      },
      createSurgeryData(){
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
           this.$buefy.snackbar.open({
            message: 'Please saved a patient Information first.',
            queue: false
          });
          return;
        }
        var baseURL = this.$store.state.siteURL + 'api/cns_surgeries';
        this.form.patientNo = patientID;
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
          this.form = r.data.data;
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },
      updateSurgeryData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/cns_surgeries/' + ID;
        this.form.patientNo = localStorage.getItem('patientID');
        axios.put(baseURL, this.form).then((r) => {
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
      },
      getSurgeryData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/cns_surgeries/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            if(r.data.success){
              this.checked = 'yes';
            }
          });
          loadingComponent.close();
      }, /// GetpatientInfo
    }


</script>
