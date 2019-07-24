const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Hyve - Privacy on your terms', // Navigation and Site Title
  siteTitleAlt: 'Hyve', // Alternative Site title for SEO
  siteTitleShort: 'Hyve', // short_name for manifest
  siteHeadline: 'Providing privacy and control for you emails on your terms.', // Headline for schema.org JSONLD
  siteUrl: 'https://hyve.email', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Providing privacy and control for you emails on your terms.',
  author: 'Hyve', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@hyveemail', // Twitter Username
  ogSiteName: 'Hyve', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
