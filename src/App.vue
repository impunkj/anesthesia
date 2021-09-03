<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar'
  import AsideMenu from '@/components/AsideMenu'
  import FooterBar from '@/components/FooterBar'

  export default {
    name: 'Home',
    components: {
      FooterBar,
      AsideMenu,
      NavBar
    },
    computed: {
      menu() {
        return [
          'Basic Detail',
          [{
              to: '/patient-information',
              label: 'Patient Information',
              icon: 'account'
            },
            {
              to: '/laboratory-data',
              label: 'Laboratory Data',
              icon: "filter"
            }
          ],
          'Medical History',
          [{
              label: 'CVS',
              subLabel: 'Submenus Example',
              icon: 'heart',
              menu: [{
                  to: '/htn',
                  label: 'HTN',
                  icon: 'circle-outline'
                },
                {
                  to: '/angina',
                  label: 'Angina',
                  icon: 'circle-outline'
                },
                {
                  to: '/mi',
                  label: 'MI',
                  icon: 'circle-outline'
                },
                {
                  to: '/nyha-status',
                  label: 'NYHA Status',
                  icon: 'circle-outline'
                },
                {
                  to: '/pacemaker',
                  label: 'Pacemaker',
                  icon: 'circle-outline'
                },
                /* {
                  to: '/failure',
                  label: 'Failure',
                  icon: 'circle-outline'
                }, */
              ]
            },
            {
              label: 'RESP',
              subLabel: 'Submenus Example',
              icon: 'lungs',
              menu: [{
                  to: '/asthma',
                  label: 'Asthma',
                  icon: 'circle-outline'
                },
                {
                  to: '/smoking',
                  label: 'Smoking',
                  icon: 'circle-outline'
                },
                {
                  to: '/snoring',
                  label: 'Snoring',
                  icon: 'circle-outline'
                },
                {
                  to: '/cough',
                  label: 'Cough',
                  icon: 'circle-outline'
                },
                {
                  to: '/sputum',
                  label: 'Sputum',
                  icon: 'circle-outline'
                },
              ]
            },
            {
              label: 'CNS',
              subLabel: 'Submenus Example',
              icon: 'brain',
              menu: [{
                  to: '/stroke',
                  label: 'Stroke',
                  icon: 'circle-outline'
                },
                {
                  to: '/epilesy',
                  label: 'Epilepsy',
                  icon: 'circle-outline'
                },
                {
                  to: '/surgery',
                  label: 'Surgery',
                  icon: 'circle-outline'
                },
                {
                  to: '/cognitive-impairment',
                  label: 'Cognitive impairment',
                  icon: 'circle-outline'
                },
              ]
            },
            {
              label: 'RENAL',
              subLabel: 'Submenus Example',
              icon: 'medical-bag',
              menu: [{
                  to: '/stones',
                  label: 'Stones',
                  icon: 'circle-outline'
                },
                {
                  to: '/renl-failure',
                  label: 'Failure',
                  icon: 'circle-outline'
                },
                {
                  to: '/uti',
                  label: 'UTI',
                  icon: 'circle-outline'
                },
                /* {
                  to: '/diabetes',
                  label: 'Diabetes',
                  icon: 'circle-outline'
                }, */
              ]
            },
            {
               to: '/diabetes',
                  label: 'Diabetes',
                  icon: 'diabetes'
            },
            {
              label: 'Hepatic/GE',
              subLabel: 'Submenus Example',
              icon: 'alpha-h-circle',
              menu: [{
                  to: '/jaundice',
                  label: 'Jaundice',
                  icon: 'circle-outline'
                },
                {
                  to: '/reflux',
                  label: 'Reflux',
                  icon: 'circle-outline'
                },
              ]
            },
            {
              label: 'Other',
              subLabel: 'Submenus Example',
              icon: 'hand-heart',
              menu: [{
                  to: '/thyroid',
                  label: 'Thyroid',
                  icon: 'circle-outline'
                },
                /* {
                  to: '/fraility',
                  label: 'Fraility',
                  icon: 'circle-outline'
                }, */
              ]
            },
            {
              label: 'Anaesthetic',
              // to : '/anaesthetic-history',
              subLabel: 'Submenus Example',
              icon: 'needle',
              menu: [
                {
                  to: '/anaesthetic-history',
                  label: 'Hisotry',
                  icon: 'circle-outline'
                },
                {
                  to: '/physical-exam',
                  label: 'Physical Exam',
                  icon: 'circle-outline'
                },

              ]
            }
          ]
        ]
      }
    },
    created() {
      this.$store.commit('user', {
        name: 'Admin',
        email: 'admin@panalinks.com',
        avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
      })
    }
  }

</script>
