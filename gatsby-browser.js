const React = require('react');
const Layout = require('./src/components/Layout').default;

// Wraps every page in a component
exports.wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
