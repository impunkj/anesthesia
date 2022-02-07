<template>
  <div>
    <section class="section is-main-section">
      <card-component title="Snoring">
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

          <div class="columns mb-0">
            <div class="column is-one-third">
              <b-field label="Stop BANG Score">
                <b-input  @keypress.native="isNumber($event)"  v-model="form.stopBangScore"  >
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="Sleep Study">
                  <b-radio v-model="form.sleepStudy" name="study" native-value="yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.sleepStudy" name="study" native-value="no" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="CPAP">
                  <b-radio v-model="form.cpap" name="cpap" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.cpap" name="cpap" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>
          <div class="columns mb-0">
            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="OSA">
                  <b-radio v-model="form.OSAW" name="wake" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.OSAW" name="wake" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-two-thirds  cstm-radio-btn">
              <div class="block">
                <b-field label="Do you fall asleep in the daytime">
                  <b-radio v-model="form.duFSleep" name="asleep" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.duFSleep" name="asleep" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>
           <b-button type="sbmt-btn mt-2"  native-type="submit">Submit</b-button>
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
    name: 'Snoring',
    components: {
      CardComponent,
    },
    data() {
      return {
        checked: false,
        radio: 'default',
        isLoading: false,
        form: {}
      }
    },
     mounted(){
         this.getSnoringData();
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
           this.updateSnoringData();
        }else {
          this.createSnoringData();
        }
        loadingComponent.close();
      },
      createSnoringData(){
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
        var baseURL = this.$store.state.siteURL + 'api/resp_snorings';
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
      updateSnoringData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/resp_snorings/' + ID;
        this.form.patientNo = localStorage.getItem('patientID');
        axios.put(baseURL, this.form).then((r) => {
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },
    isNumber(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))  && charCode !== 46  && charCode !== 47){
          evt.preventDefault();
      }
      return true;
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
      getSnoringData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/resp_snorings/' + patientID;
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
