/* ============================================================
   PrimeVue Playground — app setup
   You normally don't need to touch this file, except:
   - to change the THEME PRESET (right below)
   - to add sample data
   - to register more components (bottom of the file)
   ============================================================ */

// THEME PRESET — must match the theme <script> tag in index.html:
//   aura.js     -> PrimeUIX.Themes.Aura
//   lara.js     -> PrimeUIX.Themes.Lara
//   nora.js     -> PrimeUIX.Themes.Nora
//   material.js -> PrimeUIX.Themes.Material
const themePreset = PrimeUIX.Themes.Aura;

const app = Vue.createApp({
    // Sample data used by the components in index.html.
    // Change values here to see the page update.
    data() {
        return {
            dark: false,

            // form inputs
            text: '',
            description: '',
            amount: 42,
            date: null,
            city: null,
            cities: ['Berlin', 'Karlsruhe', 'Munich', 'Hamburg', 'Cologne'],
            selectedCities: [],
            sliderValue: 50,
            rating: 4,
            checked: true,
            radioValue: 'M',
            switchOn: true,
            size: 'Medium',
            sizes: ['Small', 'Medium', 'Large'],

            // overlays & feedback
            dialogVisible: false,
            progress: 65,

            // table
            products: [
                { name: 'Bamboo Watch',  category: 'Accessories', price: '65 €',  status: 'In stock' },
                { name: 'Black Watch',   category: 'Accessories', price: '72 €',  status: 'Sold out' },
                { name: 'Blue T-Shirt',  category: 'Clothing',    price: '29 €',  status: 'In stock' },
                { name: 'Galaxy Earbuds',category: 'Electronics', price: '89 €',  status: 'In stock' }
            ]
        };
    },

    methods: {
        // Switches the whole page between light and dark mode.
        // (The theme watches for the "p-dark" class on <html>, configured below.)
        toggleDark() {
            this.dark = !this.dark;
            document.documentElement.classList.toggle('p-dark', this.dark);
        },

        // Shows a toast message in the corner of the screen.
        notify(severity) {
            this.$toast.add({
                severity: severity,
                summary: severity === 'success' ? 'It worked' : 'Something went wrong',
                detail: 'This is a toast message.',
                life: 3000
            });
        }
    }
});

// Activate PrimeVue with the chosen theme.
app.use(PrimeVue.Config, {
    theme: {
        preset: themePreset,
        options: {
            darkModeSelector: '.p-dark'   // dark mode is on while <html> has class "p-dark"
        }
    }
});

// Needed for toast messages.
app.use(PrimeVue.ToastService);

// Tooltips: v-tooltip="'text'" on any element.
app.directive('tooltip', PrimeVue.Tooltip);

/* ============================================================
   COMPONENT REGISTRATION
   Each line makes one component usable as an HTML tag.
   To use a component that's not listed yet, add a line here:
       app.component('p-tagname', PrimeVue.ComponentName);
   The ComponentName is the one from the docs (https://primevue.org),
   e.g. "InputMask" -> app.component('p-inputmask', PrimeVue.InputMask);
   ============================================================ */

// buttons & inputs
app.component('p-button',       PrimeVue.Button);
app.component('p-buttongroup',  PrimeVue.ButtonGroup);
app.component('p-inputtext',    PrimeVue.InputText);
app.component('p-textarea',     PrimeVue.Textarea);
app.component('p-inputnumber',  PrimeVue.InputNumber);
app.component('p-datepicker',   PrimeVue.DatePicker);
app.component('p-select',       PrimeVue.Select);
app.component('p-multiselect',  PrimeVue.MultiSelect);
app.component('p-checkbox',     PrimeVue.Checkbox);
app.component('p-radiobutton',  PrimeVue.RadioButton);
app.component('p-toggleswitch', PrimeVue.ToggleSwitch);
app.component('p-slider',       PrimeVue.Slider);
app.component('p-rating',       PrimeVue.Rating);
app.component('p-selectbutton', PrimeVue.SelectButton);

// panels & layout
app.component('p-card',              PrimeVue.Card);
app.component('p-tabs',              PrimeVue.Tabs);
app.component('p-tablist',           PrimeVue.TabList);
app.component('p-tab',               PrimeVue.Tab);
app.component('p-tabpanels',         PrimeVue.TabPanels);
app.component('p-tabpanel',          PrimeVue.TabPanel);
app.component('p-accordion',         PrimeVue.Accordion);
app.component('p-accordion-panel',   PrimeVue.AccordionPanel);
app.component('p-accordion-header',  PrimeVue.AccordionHeader);
app.component('p-accordion-content', PrimeVue.AccordionContent);
app.component('p-divider',           PrimeVue.Divider);

// overlays & feedback
app.component('p-dialog',      PrimeVue.Dialog);
app.component('p-toast',       PrimeVue.Toast);
app.component('p-message',     PrimeVue.Message);
app.component('p-progressbar', PrimeVue.ProgressBar);

// data & misc
app.component('p-datatable', PrimeVue.DataTable);
app.component('p-column',    PrimeVue.Column);
app.component('p-tag',       PrimeVue.Tag);
app.component('p-badge',     PrimeVue.Badge);
app.component('p-avatar',    PrimeVue.Avatar);
app.component('p-chip',      PrimeVue.Chip);

// Start the app (attaches to <div id="app"> in index.html).
app.mount('#app');
