<template>
  <div>
    <section class="section is-main-section">
      <card-component title="Stroke">
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
                  <div class="column is-half">
                    <b-field label="When"> </b-field>
                    <div class="columns">
                      <div class="column is-one-third">
                        <b-field label="">
                          <b-input placeholder="YY" maxlength="2" v-model="form.whyy">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="column is-one-third">
                        <b-field label="">
                          <b-input placeholder="MM"  maxlength="2" v-model="form.whmm">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="column is-one-third">
                        <b-field label="">
                          <b-input placeholder="DD" maxlength="2"  v-model="form.whdd">
                          </b-input>
                        </b-field>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half cstm-radio-btn">
                    <div class="block">
                        <b-field label="Present status">
                        <b-radio  v-model="form.pStatus" name="urti" native-value="residual" type="is-info" >
                          Residual
                        </b-radio>
                        <b-radio  v-model="form.pStatus" name="urti" native-value="recovered" type="is-info">
                          Recovered
                        </b-radio>
                        </b-field>
                    </div>
                  </div>
                </div>
                <div class="columns mb-3">
                  <div class="column is-full">
                    <b-field label="What treatment">
                      <b-input maxlength="300" type="textarea"  v-model="form.treatment"></b-input>
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
      CardComponent,
    },
    data() {
      return {
        checked: false,
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
         this.getStrokeData();
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
           this.updateStrokeData();
        }else {
          this.createStrokeData();
        }
        loadingComponent.close();
      },
      createStrokeData(){
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
        var baseURL = this.$store.state.siteURL + 'api/cns_strokes';
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
      updateStrokeData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/cns_strokes/' + ID;
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
      getStrokeData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/cns_strokes/' + patientID;
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
