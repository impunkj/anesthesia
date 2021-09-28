<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Asthma">
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
            <div class="column is-half">
              <b-field label="What causes">
                <b-input maxlength="300" type="textarea" v-model="form.whatCause"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Treatment">
                <b-input maxlength="300" type="textarea" v-model="form.treatment"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">

            <div class="column is-half">
              <b-field label="How long"> </b-field>
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
            </div>

            <div class="column is-half">
              <b-field label="When did the last attack occur"> </b-field>
              <div class="columns">

                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="YY" v-model="form.layy">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="MM" v-model="form.lamm">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="DD" v-model="form.ladd">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

          </div>

          <div class="columns mb-3">
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="How was it treat?">

                  <b-radio  name="howdoyoutreat" native-value="Yes" type="is-info" v-model="form.howDoyouTreat">
                    Admission
                  </b-radio>
                  <b-radio  name="howdoyoutreat" native-value="No" type="is-info" v-model="form.howDoyouTreat">
                    Ventilation in ICU
                  </b-radio>

                </b-field>
              </div>
            </div>

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="URTI LRTI Present">
                  <b-radio  name="urti" native-value="Yes" type="is-info" v-model="form.urti">
                    Yes
                  </b-radio>
                  <b-radio  name="urti" native-value="No" type="is-info" v-model="form.urti">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

          </div>

          <div class="columns mb-3">
            <div class="column is-full cstm-radio-btn">
         <div class=" field-body">
            <b-field label="Advisory">
                <b-checkbox  native-value="admission" type="is-info" v-model="form.advised">
                   Physician Consult
                </b-checkbox>

                 </b-field>
              </div>
            </div>
          </div>


           </div>

          <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>


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
    name: 'Asthma',
    components: {
      CardComponent

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
        var baseURL = this.$store.state.siteURL + 'api/resp_asthmas';
        this.form.patientNo = localStorage.getItem('patientID');
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
            this.$buefy.snackbar.open({
              message: r.data.message,
              queue: false
            });
        }).catch(error => {
            console.log("ERRRR:: ",error.response.data);
          });
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
