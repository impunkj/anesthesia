<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObjectName"
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <b-table
      :checked-rows.sync="checkedRows"
      :checkable="checkable"
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="name"
      :data="clients"
    >
      <b-table-column cell-class="has-no-head-mobile is-image-cell" v-slot="props">
        <div class="image">
          <img :src="props.row.avatar" class="is-rounded">
        </div>
      </b-table-column>
      <b-table-column label="Patient ID" field="id" sortable v-slot="props">
        {{ props.row.patientNo }}
      </b-table-column>
      <b-table-column label="Date Of Admission" field="dateOfAdmission" sortable v-slot="props">
        {{ forMatDate(props.row.dateOfAdmission) }}
      </b-table-column>
      <b-table-column label="Proposed Operation" field="proposedOperation" sortable v-slot="props">
        {{ props.row.proposedOperation }}
      </b-table-column>



      <b-table-column label="Name" field="name" sortable v-slot="props">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column  label="Report"  custom-key="actions" cell-class="is-actions-cell" v-slot="props">
        <div class="buttons ">
          <button class="button is-small is-primary"  @click="DownloadPDF(props.row.patientNo )">
            <b-icon icon="file-document" size="is-small"/>
          </button>
        </div>
      </b-table-column>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large" />
            </p>
            <p>Fetching data...</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Nothing's here&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import ModalBox from '@/components/ModalBox'
import dayjs from 'dayjs'
export default {
  name: 'ClientsTableSample',
  components: { ModalBox },
  props: {
    dataUrl: {
      type: String,
      default: null
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalActive: false,
      trashObject: null,
      clients: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    }
  },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      return null
    }
  },
  mounted () {
    if (this.dataUrl) {
      console.log(this.dataUrl);
      this.isLoading = true
      axios
        .get(this.dataUrl)
        .then((r) => {
          this.isLoading = false
          if (r.data && r.data.data) {
            if (r.data.data.length > this.perPage) {
              this.paginated = true
            }
            this.clients = r.data.data
          }
        })
        .catch((e) => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger'
          })
        })
    }
  },
  methods: {
  DownloadPDF(patientNo){
        let PDFURL = this.$store.state.siteURL + 'api/patientreport';
        let pad = {
          params: {
            patientID: patientNo
          }};
        axios
          .get(PDFURL,pad)
          .then((r) => {
            this.Download(r.data.path);
        })
  },
  Download(url){
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf'); //or any other extension
    document.body.appendChild(link);
    link.click();
  },
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false
      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    },
    forMatDate(v){
        return dayjs(new Date(v).toLocaleString("en-US", {timeZone: "America/New_York"})).format('MMM D, YYYY')
      /// return dayjs(v).format('MMM D, YYYY')
    }
  }
}
</script>
