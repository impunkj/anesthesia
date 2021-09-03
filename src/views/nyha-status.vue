<template>
  <section class="section is-main-section">
    <card-component title="NYHA Status">
      <div class="columns">
        <div class="column is-full  cstm-radio-btn">
          <div class="block">
            <b-field label="NYHA Class (Patients with Cardiac Disease (Description of HF Related Symptoms)">
              <b-radio v-model="radio" name="mild" native-value="mildone" type="is-info">
                Class I (Mild)
              </b-radio>
              <b-radio v-model="radio" name="mild" native-value="mildtwo" type="is-info">
                Class II (Mild)
              </b-radio>
              <b-radio v-model="radio" name="mild" native-value="mildthree" type="is-info">
                Class III (Moderate)
              </b-radio>
              <b-radio v-model="radio" name="mild" native-value="mildfourth" type="is-info">
                Class IV (Severe)
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>


      <div class="columns mt-3 mb-0">
        <div class="column is-full">
          <ul class="cstm-ul-li">
            <li> <b> Class I (Mild) </b> Patients with cardiac disease but without resulting in limitation of physical
              activity. Ordinary physical activity does not cause undue fatigue, palpitation (rapid or pounding heart
              beat), dyspnea (shortness of breath), or anginal pain (chest pain). </li>
            <li> <b> Class II (Mild) </b> Patients with cardiac disease resulting in slight limitation of physical
              activity. They are comfortable at rest. Ordinary physical activity results in fatigue, palpitation,
              dyspnea, or anginal pain.</li>
            <li> <b> Class III (Moderate) </b> Patients with cardiac disease resulting in marked limitation of physical
              activity. They are comfortable at rest. Less than ordinary activity causes fatigue, palpitation, dyspnea,
              or anginal pain.</li>
            <li> <b> Class IV (Severe) </b> Patients with cardiac disease resulting in the inability to carry on any
              physical activity without discomfort. Symptoms of heart failure or the anginal syndrome may be present
              even at rest. If any physical activity is undertaken, discomfort is increased.</li>
          </ul>
        </div>

      </div>
        <p class="mb-4"><b> "Cardiology Referral" </b></p>
          <b-button type="sbmt-btn">Submit</b-button>

    </card-component>
  </section>
</template>


<script>
  import mapValues from 'lodash/mapValues'
  import TitleBar from '@/components/TitleBar'
  import CardComponent from '@/components/CardComponent'
  import CheckboxPicker from '@/components/CheckboxPicker'
  import RadioPicker from '@/components/RadioPicker'
  import FilePicker from '@/components/FilePicker'
  import HeroBar from '@/components/HeroBar'
  export default {
    name: 'Forms',
    components: {
      HeroBar,
      FilePicker,
      RadioPicker,
      CheckboxPicker,
      CardComponent,
      TitleBar
    },
    data() {
      return {
        isImageModalActive: false,
        isCardModalActive: false,
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
      submit() {},
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
