/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      items: ['overview/what-is-higress', 'overview/roadmap', 'overview/faq', 'overview/terminology'],
    },
    {
      type: 'category',
      label: 'User Doc',
      collapsible: false,
      items: [
        'user/quickstart',
        {
          type: 'category',
          label: 'Reference',
          items: ['user/configmap', 'user/annotation', 'user/annotation-use-case', 'user/configurations', 'user/mcp-bridge', 'user/dubbo-http2rpc', 'user/wasm-image-spec'],
        },
        {
          type: 'category',
          label: 'Plugins',
          items: ['plugins/intro', 'plugins/custom', 'plugins/jwt-auth', 'plugins/hmac-auth', 'plugins/key-auth', 'plugins/basic-auth', 'plugins/key-rate-limit', 'plugins/custom-response', 'plugins/bot-detect', 'plugins/request-block', 'plugins/waf'],
        },
        {
          type: 'category',
          label: 'Parameters Configurations Guide',
          items: ['user/wasm-go', 'user/kruise-rollout', 'user/nacos-route', 'user/spring-cloud', 'user/dubbo', 'user/prometheus', 'user/waf'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Ops',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Deploy',
          items: ['ops/hgctl','ops/deploy-by-helm', 'ops/deploy-by-docker-compose'],
        },
        'ops/upgrade',
        'ops/log'
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsible: false,
      items: ['dev/code', 'dev/architecture', 'dev/CustomResourceDefinition', 'dev/e2e-debug'],
    },
  ],
  developers: [
    {
      type: 'category',
      label: 'developer',
      collapsible: false,
      items: ['developers/developers_dev'],
    },
    {
      type: 'category',
      label: 'developer guide',
      collapsible: false,
      items: [
        'developers/contributor-guide/new-contributor-guide_dev',
        'developers/contributor-guide/test-coverage-guide_dev',
        'developers/contributor-guide/reporting-security-issues_dev',
        'developers/guide_dev',
      ],
    },
    {
      type: 'category',
      label: 'committer guide',
      collapsible: false,
      items: [
        'developers/committer-guide/label-an-issue-guide_dev',
        'developers/committer-guide/website-guide_dev',
        'developers/committer-guide/release-guide_dev',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'contributor activity',
    //   items: ['developers/developers_dev'],
    // },
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',t st
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
