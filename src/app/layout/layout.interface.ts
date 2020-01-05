export const MenuItems = [
    {
        type: 'items', text: 'Getting Started', route: '/getting-started', icon: 'nao-icon-help', isOpen: false,
        items: [
            { type: 'item', route: '/getting-started/introduction', text: 'Introduction' },
            // { type: 'item', route: '/getting-started/download', text: 'Download' },
        ]
    },
    {
        type: 'items', text: 'Layout', route: '/layout', icon: 'nao-icon-crm', isOpen: false,
        items: [
            { type: 'item', route: '/layout/overview', text: 'Overview' },
            { type: 'item', route: '/layout/components', text: 'Components' },
            // { type: 'item', route: '/layout/utilities', text: 'Utilities for Layout' },
        ]
    },
    {
        type: 'items', text: 'Components', route: '/components', icon: 'nao-icon-surveys', isOpen: false,
        items: [
            // { type: 'item', route: '/components/alerts', text: 'Alerts' },
            // { type: 'item', route: '/components/badge', text: 'Badge' },
            { type: 'item', route: '/components/buttons', text: 'Buttons' },
            { type: 'item', route: '/components/card', text: 'Card' },
            { type: 'item', route: '/components/dropdowns', text: 'Dropdowns' },
            { type: 'item', route: '/components/forms', text: 'Forms' },
            { type: 'item', route: '/components/loaders', text: 'Loaders' },
            { type: 'item', route: '/components/modal', text: 'Modal' },
            { type: 'item', route: '/components/table', text: 'Table' },
        ]
    },
    {
        type: 'items', text: 'Utilities', route: '/utilities', icon: 'nao-icon-settings', isOpen: false,
        items: [
            { type: 'item', route: '/utilities/colors', text: 'Colors' },
            { type: 'item', route: '/utilities/icons', text: 'Icons' },
            { type: 'item', route: '/utilities/illustration', text: 'Illustration' },
            { type: 'item', route: '/utilities/typography', text: 'Typography' },
            { type: 'item', route: '/utilities/spacing', text: 'Spacing' },
        ]
    },
    {
        type: 'items', text: 'Photography ', route: '/photography', icon: 'nao-icon-image-placeholder', isOpen: false,
        items: [
            { type: 'item', route: '/photography/overview', text: 'Overview' },
            { type: 'item', route: '/photography/compositions', text: 'Compositions' },
            { type: 'item', route: '/photography/casting', text: 'Casting' },
            { type: 'item', route: '/photography/lighting-and-color', text: 'Lighting and color' },
            { type: 'item', route: '/photography/locations', text: 'Locations' },
        ]
    },
    {
        type: 'items', text: 'Samples ', route: '/samples', icon: 'nao-icon-multiple-choice', isOpen: false,
        items: [
            { type: 'item', route: '/samples/forms', text: 'Forms' },
        ]
    },
];
