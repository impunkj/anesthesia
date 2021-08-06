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
              label: 'CSV',
              subLabel: 'Submenus Example',
              icon: 'hotel',
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
                {
                  to: '/failure',
                  label: 'Failure',
                  icon: 'circle-outline'
                },
              ]
            },
            {
              label: 'RESP',
              subLabel: 'Submenus Example',
              icon: 'lungs',
              menu: [{
                  to: '/asthama',
                  label: 'Asthama',
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
                  to: '#void',
                  label: 'Surgery',
                  icon: 'circle-outline'
                },
                {
                  to: '#void',
                  label: 'Cognitive impairment',
                  icon: 'circle-outline'
                },
              ]
            },
            {
              label: 'RENL',
              subLabel: 'Submenus Example',
              icon: 'medical-bag',
              menu: [{
                  to: '#void',
                  label: 'Stones',
                  icon: 'circle-outline'
                },
                {
                  to: '#void',
                  label: 'Failure',
                  icon: 'circle-outline'
                },
                {
                  to: '#void',
                  label: 'UTI',
                  icon: 'circle-outline'
                },
                {
                  to: '#void',
                  label: 'Diabetes',
                  icon: 'circle-outline'
                },
              ]
            },
            {
              label: 'Hepatic/GE',
              subLabel: 'Submenus Example',
              icon: 'monitor-star',
              menu: [{
                  to: '#void',
                  label: 'Jaundice',
                  icon: 'circle-outline'
                },
                {
                  to: '#void',
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
                  to: '#void',
                  label: 'Thyroid',
                  icon: 'circle-outline'
                },
                {
                  to: '#void',
                  label: 'Fraility',
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
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
      })
    }
  }

</script>
