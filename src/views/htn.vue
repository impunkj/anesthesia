<template>
  <div>

    <section class="section is-main-section">
      <card-component title="HTN (Hypertension)">
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
          <div class="columns"  >

            <div class="column is-8">
              <b-field label="How long"> </b-field>
              <div class="columns">
                <div class="column is-4">
                  <b-field label="">
                    <b-input  maxlength="2" v-model="form.hlyy" placeholder="YY">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-4 ">
                  <b-field label="">
                    <b-input maxlength="2" v-model="form.hlmm" placeholder="MM">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-4 ">
                  <b-field label="">
                    <b-input placeholder="DD" v-model="form.hldd">

                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <b-field label="Stress/Angio"> </b-field>
              <div class="columns">
                <div class="column is-full  cstm-radio-btn">
                  <div class="block">
                    <b-field label="">
                      <b-radio v-model="form.stress" name="strees" native-value="1" type="is-info">
                        Yes
                      </b-radio>
                      <b-radio v-model="form.stress" name="strees" native-value="2" type="is-info">
                        No
                      </b-radio>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <b-field label="Treatment">
                <b-input maxlength="300" type="textarea" v-model="form.treatment"></b-input>
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
  import RadioPicker from '@/components/RadioPicker'
  import FilePicker from '@/components/FilePicker'
  import HeroBar from '@/components/HeroBar'
  export default {
    name: 'Forms',
    components: {
      HeroBar,
      FilePicker,
      RadioPicker,
      CardComponent,
    },
    data() {
      return {
        radio: 'default',
        isLoading: false,
                checked: false,
        form: { },
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
    submit(){
      const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var baseURL = this.$store.state.siteURL + 'api/cvs_htns';
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
