import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Button, ButtonModule } from 'primeng/button';
import {ButtonGroupModule} from "primeng/buttongroup";

const meta: Meta<Button> = {
  component: Button,
  title: 'PrimeNG/Button',
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, ButtonGroupModule], // Ajout spécifique pour cette story
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Ajoute un texte au bouton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le bouton si activé.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text: {
      control: 'boolean',
      description: 'Affiche le bouton avec seulement du texte, sans arrière-plan.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    link: {
      control: 'boolean',
      description: 'Style le bouton comme un lien.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Applique un style de bord arrondi au bouton.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    outlined: {
      control: 'boolean',
      description: 'Affiche le bouton avec un contour sans arrière-plan.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    raised: {
      control: 'boolean',
      description: 'Applique une ombre au bouton.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'text',
      description: 'Nom de l\'icône à afficher dans le bouton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    iconPos: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position de l\'icône dans le bouton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    badge: {
      control: 'text',
      description: 'Ajoute un badge au bouton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    badgeClass: {
      control: 'text',
      description: 'Classe CSS personnalisée pour le badge.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger', 'help', 'primary', 'secondary', 'contrast'],
      description: 'Définit le style du bouton pour indiquer la sévérité.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    size: {
      control: 'radio',
      options: [null, 'small', 'large'],
      description: 'Définit la taille du bouton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    style: {
      control: 'object',
      description: 'Applique des styles en ligne au bouton.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'null' },
      },
    },
    styleClass: {
      control: 'text',
      description: 'Applique une classe CSS personnalisée au bouton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Affiche un état de chargement sur le bouton.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loadingIcon: {
      control: 'text',
      description: 'Icône à afficher pendant le chargement.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    onClick: {
      description: 'Fonction à exécuter lors du clic sur le bouton.',
      action: 'onClick',
      table: {
        type: { summary: 'MouseEvent' },
      },
    },
    onFocus: {
      description: 'Fonction à exécuter lorsque le bouton reçoit le focus.',
      action: 'onFocus',
      table: {
        type: { summary: 'FocusEvent' },
      },
    },
    onBlur: {
      description: 'Fonction à exécuter lorsque le bouton perd le focus.',
      action: 'onBlur',
      table: {
        type: { summary: 'FocusEvent' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Directive: Story = {
  render: () => ({
    template: `
        <button pButton pRipple label="Submit" class="p-button-success"></button>
    `,
  }),
  args: {
    label: 'Submit',
  },
};

export const Link: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <p-button label="Link" [link]="true"></p-button>
        <a href="https://angular.dev/" target="_blank" rel="noopener noreferrer" class="p-button">External</a>
        <a routerLink="/" class="p-button">Router</a>
      </div>
    `,
  }),
  args: {
    label: 'toot',
  },
};

export const Icons: Story = {
  render: () => ({
    template: `
      <!-- PRIME ICONS -->
      <div class="flex gap-2 mb-2">
        <p-button icon="pi pi-check" />
        <p-button label="Submit" icon="pi pi-check" />
        <p-button label="Submit" icon="pi pi-check" iconPos="right" />
      </div>
      <!-- FONTAWESOME -->
      <div class="flex gap-2">
        <p-button icon="fa fa-check" />
        <p-button label="Submit" icon="fa fa-check" />
        <p-button label="Submit" icon="fa fa-check" iconPos="right" />
      </div>
    `,
  }),
  args: {
    label: 'toot',
  },
};

export const Loading: Story = {
  args: {
    label: 'Chargement',
    loading: true,
  },
};

export const Severity: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <p-button label="Primary" />
        <p-button label="Secondary" severity="secondary" />
        <p-button label="Success" severity="success" />
        <p-button label="Info" severity="info" />
        <p-button label="Warning" severity="warning" />
        <p-button label="Help" severity="help" />
        <p-button label="Danger" severity="danger" />
        <p-button label="Contrast" severity="contrast" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    label: 'Submit',
    disabled: true,
  },
};

export const Rounded: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <p-button label="Primary" [rounded]="true" />
        <p-button label="Secondary" [rounded]="true" severity="secondary" />
        <p-button label="Success" [rounded]="true" severity="success" />
        <p-button label="Info" [rounded]="true" severity="info" />
        <p-button label="Warning" [rounded]="true" severity="warning" />
        <p-button label="Help" [rounded]="true" severity="help" />
        <p-button label="Danger" [rounded]="true" severity="danger" />
        <p-button label="Contrast" [rounded]="true" severity="contrast" />
      </div>
    `,
  }),
};

export const Text: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <p-button label="Primary" [text]="true" />
        <p-button label="Secondary" [text]="true" severity="secondary" />
        <p-button label="Success" [text]="true" severity="success" />
        <p-button label="Info" [text]="true" severity="info" />
        <p-button label="Warning" [text]="true" severity="warning" />
        <p-button label="Help" [text]="true" severity="help" />
        <p-button label="Danger" [text]="true" severity="danger" />
        <p-button label="Plain" [text]="true" [plain]="true" />
      </div>
    `,
  }),
};

export const Outlined: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <p-button label="Primary" [outlined]="true" />
        <p-button label="Secondary" [outlined]="true" severity="secondary" />
        <p-button label="Success" [outlined]="true" severity="success" />
        <p-button label="Info" [outlined]="true" severity="info" />
        <p-button label="Warning" [outlined]="true" severity="warning" />
        <p-button label="Help" [outlined]="true" severity="help" />
        <p-button label="Danger" [outlined]="true" severity="danger" />
        <p-button label="Contrast" [outlined]="true" severity="contrast" />
      </div>
    `,
  }),
};

export const Badges: Story = {
  args: {
    label: 'Messages',
    badge: '2',
    badgeClass: 'p-badge-contrast',
  },
};

export const ButtonGroup: Story = {
  render: () => ({
    template: `
      <p-buttonGroup>
          <p-button label="Save" icon="pi pi-check" />
          <p-button label="Delete" icon="pi pi-trash" />
          <p-button label="Cancel" icon="pi pi-times" />
      </p-buttonGroup>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <p-button label="Small" icon="pi pi-check" size="small" />
        <p-button label="Normal" icon="pi pi-check" />
        <p-button label="Large" icon="pi pi-check" size="large" />
      </div>
    `,
  }),
};
