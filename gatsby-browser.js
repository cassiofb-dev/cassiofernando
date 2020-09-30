const React = require('react');
const Layout = require('./src/components/Layout').default;

require("./src/assets/scss/prism-tomorrow.scss");

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
}
