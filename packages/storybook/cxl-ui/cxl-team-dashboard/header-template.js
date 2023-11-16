import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-team-header.js';
import '@conversionxl/cxl-ui/src/components/cxl-stats';

export const TeamDashboardHeaderTemplate = (header) => html`
  <!-- from wordpress form styles -->
  <style>
    form {
      font-family: var(--lumo-font-family);
    }

    label {
      color: var(--lumo-contrast-50pct);
      display: block;
      font-size: var(--lumo-font-size-s);
      font-weight: 300;
      text-transform: uppercase;
    }

    form label {
      color: var(--lumo-contrast-80pct);
      font-weight: normal;
      text-transform: inherit;
    }

    select {
      font-size: var(--lumo-font-size-s);
    }

    form select {
      height: 2.25em;
      border: 1px solid var(--lumo-contrast-20pct);
      background-color: white;
      padding: var(--lumo-space-s);
      display: inline-block;
      border: 1px solid var(--lumo-contrast-20pct);
      box-shadow: var(--lumo-box-shadow-xs);
      border-radius: var(--lumo-border-radius-s);
      vertical-align: middle;
      box-sizing: border-box;
      font-size: var(--lumo-font-size-l);
    }
  </style>

  <cxl-dashboard-team-header
    theme="cxl-dashboeard-header team"
    team-id=${header.teamId}
    team-name=${header.teamName}
    invite-url=${header.inviteURL}
    settings-url=${header.settingsURL}
    ?multiple=${header.multiple}
  >
    <form slot="choose-team" id="user-active-teams">
      <label for="team_id" style="margin: 0;">Choose team:</label>
      <div>
        <select name="team_id">
          <option value="6351659" selected="selected">NOPE Creative</option>
          <option value="6351660">gotoAndPlay</option>
          <option value="6351661">CXL</option>
        </select>
      </div>
    </form>
  </cxl-dashboard-team-header>
`;

export const ArgTypes = {
  teamId: { control: 'number' },
  teamName: { control: 'text' },
  inviteURL: { control: 'text' },
  settingsURL: { control: 'text' },
  multiple: { control: 'boolean' },
};
