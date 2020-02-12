export const MenuItems = [
  // {
  //     type: 'items', text: 'Getting Started', route: '/getting-started', icon: 'nao-icon-help', isOpen: false,
  //     items: [
  //         { type: 'item', route: '/getting-started/landing-page', text: 'Landing page' },
  //         { type: 'item', route: '/getting-started/introduction', text: 'Introduction' },
  //     ]
  // },
  {
    type: 'items', text: 'Layout', route: '/layout', icon: 'nao-icon-crm', isOpen: false,
    items: [
      {type: 'item', route: '/layout/announcement', text: 'Announcements'},
      {type: 'item', route: '/layout/grid', text: 'Grid'},
      {type: 'item', route: '/layout/components', text: 'Components'},
      {type: 'item', route: '/layout/navigation', text: 'Navigation'},
    ]
  },
  {
    type: 'items', text: 'Components', route: '/components', icon: 'nao-icon-surveys', isOpen: false,
    items: [
      // { type: 'item', route: '/components/alerts', text: 'Alerts' },
      {type: 'item', route: '/components/buttons', text: 'Buttons'},
      {type: 'item', route: '/components/cards', text: 'Cards'},
      {type: 'item', route: '/components/dropdowns', text: 'Dropdowns'},
      {type: 'item', route: '/components/datepicker', text: 'Datepicker'},
      {type: 'item', route: '/components/forms', text: 'Forms'},
      {type: 'item', route: '/components/input-groups', text: 'Input groups'},
      {type: 'item', route: '/components/loaders', text: 'Loaders'},
      {type: 'item', route: '/components/modals', text: 'Modals'},
      {type: 'item', route: '/components/tables', text: 'Tables'},
      {type: 'item', route: '/components/wizard', text: 'Wizard'},
    ]
  },
  {
    type: 'items', text: 'Utilities', route: '/utilities', icon: 'nao-icon-settings', isOpen: false,
    items: [
      {type: 'item', route: '/utilities/colors', text: 'Colors'},
      {type: 'item', route: '/utilities/iconography', text: 'Iconography'},
      {type: 'item', route: '/utilities/illustration', text: 'Illustration'},
      {type: 'item', route: '/utilities/typography', text: 'Typography'},
      {type: 'item', route: '/utilities/spacing', text: 'Spacing'},
      {type: 'item', route: '/utilities/sizing', text: 'Sizing'},
    ]
  },
  {
    type: 'items', text: 'Photography ', route: '/photography', icon: 'nao-icon-image-placeholder', isOpen: false,
    items: [
      {type: 'item', route: '/photography/overview', text: 'Overview'},
      {type: 'item', route: '/photography/compositions', text: 'Compositions'},
      {type: 'item', route: '/photography/casting', text: 'Casting'},
      {type: 'item', route: '/photography/lighting-and-color', text: 'Lighting and color'},
      {type: 'item', route: '/photography/locations', text: 'Locations'},
    ]
  },
  {
    type: 'items', text: 'Samples ', route: '/samples', icon: 'nao-icon-multiple-choice', isOpen: false,
    items: [
      {type: 'item', route: '/samples/forms', text: 'Forms'},
      {type: 'item', route: '/samples/file-manager', text: 'File manager'},
    ]
  },
];
