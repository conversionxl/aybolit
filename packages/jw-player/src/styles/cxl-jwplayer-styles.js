import { css } from 'lit';

export const cxlJWPlayerStyles = css`
  /* CXL JWPlayer Styles */
  /* General Player Styles */

  .cxl-jwplayer-container {
    border: solid 1px var(--lumo-shade-10pct);
    border-radius: var(--lumo-border-radius);
  }

  .jwplayer.jw-skin-cxl-institute .jw-controls .jw-slider-time .jw-cue:hover {
    background-color: var(--lumo-tint);
    height: 30px !important;
    z-index: 5;
  }

  .jwplayer.jw-skin-cxl-institute .jw-controls .jw-icon-cc,
  .jwplayer.jw-skin-cxl-institute .jw-controls .jw-settings-sharing,
  .jwplayer.jw-skin-cxl-institute .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child,
  .jw-slider-time .jw-cue:hover > .jw-overlay,
  .hidden,
  .jw-rightclick-list li:first-child,
  .jwplayer.jw-skin-cxl-institute
    .jw-flag-user-inactive.jw-state-playing
    .jw-wrapper
    .jw-overlays
    > div[id$='_cxlJWChapters'] {
    display: none;
  }

  /* Scrollbar Styles */

  .cxl-jwplayer-container ::-webkit-scrollbar {
    width: var(--lumo-space-s);
    height: var(--lumo-space-xs);
  }
  .cxl-jwplayer-container ::-webkit-scrollbar-button {
    width: var(--lumo-space-s);
    height: 0;
  }
  .cxl-jwplayer-container ::-webkit-scrollbar-thumb {
    background: var(--lumo-primary-color);
    border: 0px none var(--lumo-tint);
    border-radius: var(--lumo-border-radius);
  }
  .cxl-jwplayer-container ::-webkit-scrollbar-track {
    background: var(--lumo-shade-5pct);
    border: 0;
    border-radius: var(--lumo-border-radius);
  }
  .cxl-jwplayer-container ::-webkit-scrollbar-corner {
    background: transparent;
  }

  /*  CXL JWPlayer: Chapters Plugin Styles */

  .cxl-jwplayer-container .transcript-container {
  }

  .cxl-jwplayer-container .transcript-wrapper {
    margin: 0 auto;
    width: 80%;
    height: 200px;
    resize: vertical;
    overflow-y: hidden;
    padding: var(--lumo-space-xs) var(--lumo-space-m);
  }

  .cxl-jwplayer-container .transcript-wrapper:hover {
    overflow-y: scroll;
  }

  .cxl-jwplayer-container .transcript-wrapper .transcript {
    padding: var(--lumo-space-xs) var(--lumo-space-m);
  }

  .cxl-jwplayer-container .transcript {
    cursor: pointer;
  }

  .cxl-jwplayer-container .transcript p {
    font-size: var(--lumo-font-size-m);
    line-height: calc(var(--lumo-line-height-m) * 1.25);
  }

  .cxl-jwplayer-container .transcript span {
    display: inline;
    padding: var(--lumo-space-xs) var(--lumo-space-xs);
    line-height: var(--lumo-line-height-s);
    cursor: pointer;
    color: var(--lumo-shade);
  }

  .cxl-jwplayer-container .transcript span:hover {
    color: var(--lumo-primary-color);
  }

  .cxl-jwplayer-container .transcript span em {
    background: var(--lumo-shade-50pct);
    color: var(--lumo-tint);
    font-style: normal;
  }

  .cxl-jwplayer-container .transcript span.current {
    background: var(--lumo-shade-10pct);
    color: var(--lumo-shade);
    border-radius: var(--lumo-border-radius);
  }

  .cxl-jwplayer-container .transcript span em.current {
    background: var(--lumo-primary-color);
  }

  .cxl-jwplayer-container .transcript span.current:hover {
    color: var(--lumo-shade);
  }

  .cxl-jwplayer-container .transcript-container .searchbox {
    display: flex;
    flex-grow: 2 auto;
    justify-content: center;
    align-content: center;
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-shade);
  }

  .cxl-jwplayer-container .transcript-container .searchbox input {
    width: 50%;
    background: var(--lumo-tint);
    border-radius: var(--lumo-border-radius);
    border: 0;
    color: var(--lumo-shade);
    line-height: var(--lumo-line-height);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }

  .cxl-jwplayer-container .transcript-container .searchbox .match {
    align-self: center;
    color: var(--lumo-tint);
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height);
    margin-left: var(--lumo-space-m);
  }

  @media screen and (max-width: 500px) {
    .cxl-jwplayer-container .transcript-wrapper {
      width: 100%;
    }
  }

  /* CXL JWPlayer: Chapters Plugin Styles */
  .jwplayer.jw-skin-cxl-institute .chapters-overlay {
    height: 100%;
    max-width: 50%;
    top: 0;
    right: 0;
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background: var(--lumo-shade);
    color: var(--lumo-tint);
    z-index: 5;
    text-decoration: none;
  }

  .jwplayer.jw-skin-cxl-institute .chapters-overlay #close_chapter_nav {
    display: block;
    padding: var(--lumo-space-s) var(--lumo-space-s) var(--lumo-space-s) 0;
    cursor: pointer;
    text-decoration: none;
  }

  .jwplayer.jw-skin-cxl-institute .chapters-overlay .chapters {
    height: 100%;
    overflow-y: scroll;
  }

  .jwplayer.jw-skin-cxl-institute .chapters ul {
    list-style-type: none;
    margin: 0;
    margin-top: var(--lumo-space-s);
    padding: 0;
  }

  .jwplayer.jw-skin-cxl-institute .chapters li {
    cursor: pointer;
    margin-bottom: var(--lumo-space-s);
    padding: var(--lumo-space-s) 0;
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-xs);
  }

  .jwplayer.jw-skin-cxl-institute .chapters li:hover {
    text-decoration: underline;
  }
`;
