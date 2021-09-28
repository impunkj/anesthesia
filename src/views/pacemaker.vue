<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Pacemaker">
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
              <b-field label="Why">
                <b-input maxlength="300" type="textarea" v-model="form.why"></b-input>
              </b-field>
            </div>
            <div class="column is-half">
              <b-field label="Pacemaker make / Type?">
                <b-input maxlength="300" type="textarea" v-model="form.pacemakerType"></b-input>
              </b-field>
            </div>
          </div>
          <b-field label="When" class=""> </b-field>
            <div class="columns">
            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY"   maxlength="2" v-model="form.whyy">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM"   maxlength="2" v-model="form.whmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD"  maxlength="2" v-model="form.whdd">
                </b-input>
              </b-field>
            </div>
          </div>


          <b-field class="checkOut">
            <b-checkbox type="is-info" v-model="form.ckpaperwork" native-value="ckpaperwork"  name="ckpaperwork">Check paperwork / Card / Chest xRay</b-checkbox>
          </b-field>

          <div  v-if="checkboxClick" class="mt-2 mb-5">
            <b>"Needs Cardiology Evaluation"</b>
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
        checkboxClick : false,
        radio: 'default',
        checked: false,
        checkboxGroup: ['Flint'],
        isLoading: false,
        form: {},
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        }
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
        var baseURL = this.$store.state.siteURL + 'api/cvs_pacemakers';
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
