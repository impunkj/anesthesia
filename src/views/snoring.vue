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
                <b-input v-model="form.stopBangScore">
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
                <b-field label="OSA will be">
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
          </div>

          <b-button type="sbmt-btn mt-2"  native-type="submit">Submit</b-button>


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
            var baseURL = this.$store.state.siteURL + 'api/resp_snorings';
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
