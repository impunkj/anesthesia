<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Anaesthetic History">
        <form @submit.prevent="submit">
          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Airway">
                    <b-input v-model="form.airway">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="MP">
                    <b-select  v-model="form.mp" placeholder="Select Value" expanded>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Mouth Opening">
                    <b-input v-model="form.mouthOpening">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="Mentohyoid Distance">
                    <b-input v-model="form.mentohyoidDistance" >
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column cstm-radio-btn">
              <div class="block">

                <b-field label="">
                  <span @click="isNeckModal = true">
                    <b-checkbox v-model="neckCheck" native-value="neck" type="is-info">
                      Neck
                    </b-checkbox>
                  </span>
                  <span @click="isTeethModal = true">
                    <b-checkbox v-model="teetCheck" native-value="teeth" type="is-info">
                      Teeth
                    </b-checkbox>
                  </span>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Lungs">
                <b-input maxlength="300"  v-model="form.lungs" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Heart">
                <b-input maxlength="300" v-model="form.heart" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="CNS">
                <b-input  v-model="form.cns"  maxlength="200" >
                </b-input>
              </b-field>
            </div>

            <div class="column is-half cstm-radio-btn2">

              <div class="block" @click="isPupilsModal = true">
                <b-field label="">
                  <b-checkbox v-model="pupilsChecked" native-value="pupils" type="is-info">
                    Pupils
                  </b-checkbox>

                </b-field>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-half">
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="E">
                    <b-input v-model="form.e"  maxlength="10">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="V">
                    <b-input v-model="form.v"  maxlength="10">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="M">
                    <b-input v-model="form.m"  maxlength="10">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-half">
              <b-field label="Other">
                <b-input v-model="form.other"   maxlength="10">
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Venous access site">
                <b-input v-model="form.venous"  maxlength="55">
                </b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Spine exam for regional">
                <b-input  v-model="form.spineExam"  maxlength="55" >
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Anaesthesia Plan">
                  <b-checkbox v-model="anaesthesiaPlan" native-value="mac" type="is-info">
                    MAC
                  </b-checkbox>
                  <b-checkbox v-model="anaesthesiaPlan" native-value="reginoal" type="is-info">
                    REGIONAL
                  </b-checkbox>
                  <b-checkbox v-model="anaesthesiaPlan" native-value="gaeet" type="is-info">
                    GA-ETT
                  </b-checkbox>
                  <b-checkbox v-model="anaesthesiaPlan" native-value="lma" type="is-info">
                    LMA
                  </b-checkbox>
                </b-field>
              </div>
            </div>

            <div class="column is-half">
              <b-field label="Proposed Post-op Pain relief ">
                <b-input  v-model="form.proposedPost"   maxlength="55">
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Peri-op plan explained to patient">
                  <b-radio v-model="form.PeriPop" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.PeriPop" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Will take blood">
                  <b-radio v-model="form.willtakeBlood" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.willtakeBlood" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column  cstm-radio-btn-one-col">
              <div class="block">
                <b-field label="">
                  <b-checkbox v-model="pregnant"  type="is-info">
                    Pregnant
                  </b-checkbox>

                </b-field>
                <p> <b>  "Explain Risks "</b> </p>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <b-field label="Current medications">
                <b-input maxlength="300"  v-model="form.currentmedications" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>

        </form>
      </card-component>
      <!-- Neck Modal -->
      <b-modal v-model="isNeckModal" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Neck </h3>
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <b-field label="Expanded">
                  <b-select  v-model="form.neck" placeholder="Select One" expanded>
                    <option value="fixed">Fixed</option>
                    <option value="extensionproblem">Extension Problems</option>
                    <option value="flexionproblem">Flexion Problems</option>
                  </b-select>
                </b-field>
              </div>
            </div>

            <b-button type="sbmt-btn"  @click="isNeckModal = false" >Submit</b-button>

          </div>
        </div>
      </b-modal>
      <!-- Neck modal end -->


      <!-- Teeth Modal -->
      <b-modal v-model="isTeethModal" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Teeth </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="">
                    <b-checkbox v-model="teethtype"  name="teeth" native-value="teethLoose" type="is-info">
                      Loose
                    </b-checkbox>
                    <b-checkbox v-model="teethtype"  name="teeth" native-value="teethCaps" type="is-info">
                      Caps
                    </b-checkbox>
                    <b-checkbox v-model="teethtype" name="teeth"  native-value="teethCrowns" type="is-info">
                      Crowns
                    </b-checkbox>
                    <b-checkbox v-model="teethtype"  name="teeth" native-value="teethDenture" type="is-info">
                      Denture
                    </b-checkbox>
                  </b-field>
                  <p> <b> "Dental Protection Needed" </b> </p>
                </div>

              </div>
            </div>


            <div class="columns" v-if="checkboxClick">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="">
                    <b-radio v-model="teethtype" name="form.teethType" native-value="Fixed" type="is-info">
                      Fixed
                    </b-radio>
                    <b-radio v-model="teethtype" name="form.teethType" native-value="Removeable" type="is-info">
                      Removeable
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>

            <b-button type="sbmt-btn"  @click="isTeethModal = false"   >Submit</b-button>

          </div>
        </div>
      </b-modal>
      <!-- Teeth modal end -->


      <!-- Pupil Modal -->
      <b-modal v-model="isPupilsModal" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Pupil </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column  cstm-radio-btn">
                <div class="block">
                  <b-field label="">
                    <b-radio v-model="puppil.puppiequal" name="neck" native-value="pupilEqual" type="is-info">
                      Equal
                    </b-radio>
                    <b-radio v-model="puppil.puppiequal" name="neck" native-value="pupilUnqqual" type="is-info">
                      Unequal
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>


            <div class="columns">
              <div class="column is-half">
                <b-field label="Right">
                <b-input v-model="puppil.right">
                </b-input>
              </b-field>
              </div>

               <div class="column is-half">
                <b-field label="Left">
                <b-input  v-model="puppil.left" >
                </b-input>
              </b-field>
              </div>
            </div>


            <div class="columns">
              <div class="column">

              </div>

            </div>

            <b-button type="sbmt-btn"  @click="submitpuppil()" native-type="submit">Submit</b-button>

          </div>
        </div>
      </b-modal>
      <!-- Pupil modal end -->

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
        isTeethModal: false,
        teethtype:[],
        pupilsChecked:false,
        puppil: {
        },
        anaesthesiaPlan:[],
        teetCheck:false,
        neckCheck:false,
        pregnant:false,
        isNeckModal: false,
        isPupilsModal: false,
        radio: 'default',
        checkboxGroup: ['Flint'],
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
         this.getphyscialInfo();
         ///this.getallMedications();
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
           this.updatePhysical();
        }else {
          this.createPhysical();
        }
        loadingComponent.close();
      },
      submitpuppil(){
            this.isPupilsModal = false;
      },
      createPhysical(){
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        this.form.teeth = JSON.stringify(this.teethtype);
        if(this.pregnant){
          this.form.pregnant = 1;
        }
        this.form.anaesthesiaPlan = JSON.stringify(this.anaesthesiaPlan);
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
           this.$buefy.snackbar.open({
            message: 'Please saved a patient Information first.',
            queue: false
          });
          return;
        }
        var baseURL = this.$store.state.siteURL + 'api/physical_exams';
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
      updatePhysical(){
        var ID = this.form.id;
        this.form.teeth = JSON.stringify(this.teethtype);
        this.form.anaesthesiaPlan = JSON.stringify(this.anaesthesiaPlan);
        this.form.pupils = JSON.stringify(this.puppil);
        if(this.pregnant){
          this.form.pregnant = 1;
        }
        var baseURL = this.$store.state.siteURL + 'api/physical_exams/' + ID;
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
       getphyscialInfo(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/physical_exams/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            this.teethtype = JSON.parse(r.data.data.teeth);
             this.anaesthesiaPlan = JSON.parse(r.data.data.anaesthesiaPlan);
             if(r.data.data.pupils){
               console.log('fff');
               this.pupilsChecked = true;
                this.puppil = JSON.parse(r.data.data.pupils);
             }else{
                  console.log('dd2');
             }
            if(r.data.success){
              this.checked = 'yes';
              if(this.form.neck){
                  this.neckCheck = true;
              }
              if(this.teethtype){
                  this.teetCheck = true;
              }
              if(this.form.pregnant == '1'){
                this.pregnant = true;
              }

            }
          });
          loadingComponent.close();
      },
       getallMedications(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/getallmedications/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            if(r.data.success){
              this.checked = 'yes';
            }
          });
          loadingComponent.close();
      },


    }
  }

</script>