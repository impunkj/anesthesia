<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Smoking">
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
<div class="wrapcompo"  v-if="checked === 'yes'">
          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="How Many">
                <b-input maxlength="300" type="textarea" v-model="form.howmany"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="When did you stop it">
                <b-input maxlength="300" type="textarea" v-model="form.whenStop"></b-input>
              </b-field>
            </div>
          </div>
          <b-field label="How Long">
          </b-field>
          <div class="columns">

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY" v-model="form.hlyy">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM" v-model="form.hlmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD" v-model="form.hldd">
                </b-input>
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
    name: 'Smoking',
    components: {
      CardComponent
    },
    data() {
      return {
        radio: 'default',
        isLoading: false,
        checked: false,
        form: {
        },
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        },
      }
    },
     mounted(){
         this.getSmokingData();
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
           this.updateSmokingData();
        }else {
          this.createSmokingData();
        }
        loadingComponent.close();
      },
      createSmokingData(){
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
        var baseURL = this.$store.state.siteURL + 'api/resp_smokings';
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
      updateSmokingData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/resp_smokings/' + ID;
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
      getSmokingData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/resp_smokings/' + patientID;
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