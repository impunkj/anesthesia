<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Stones">
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
             <div class="column cstm-radio-btn is-half">
                <b-field label="Surgery needed"> </b-field>
              <div class="block">
                <b-field label="">
                  <b-radio v-model="form.SurgeryNeeded"  name="surgeryNeeded" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.SurgeryNeeded"  name="surgeryNeeded" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

             <div class="column cstm-radio-btn is-half">
                <b-field label="Status"> </b-field>
              <div class="block">
                <b-field label="">
                  <b-radio  v-model="form.status" name="passed" native-value="present" type="is-info">
                    Present
                  </b-radio>
                  <b-radio  v-model="form.status" name="passed" native-value="passed" type="is-info">
                    Passed
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>
          <div class="columns mb-3">
            <div class="column is-full">
              <b-field label="What surgery">
                <b-input maxlength="300" type="textarea" v-model="form.whatSurgery"></b-input>
              </b-field>
            </div>
          </div><!--  columns -->
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
      CardComponent,
    },
    data() {
      return {
        checked: false,
        radio: 'default',
        isLoading: false,
        form: {
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
         this.getStonesData();
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {
      submit(){
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        if(this.form.id){
           this.updateStonesData();
        }else {
          this.createStonesData();
        }
        loadingComponent.close();
      },
      createStonesData(){
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
        var baseURL = this.$store.state.siteURL + 'api/renal_stones';
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
      updateStonesData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/renal_stones/' + ID;
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
      getStonesData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/renal_stones/' + patientID;
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
  }

</script>
