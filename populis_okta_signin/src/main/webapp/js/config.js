(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OktaConfig = factory();
  }
}(this, function () {

    return {
      orgUrl: 'https://flex.okta.com',
      apiToken: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//     authzIssuer: 'https://dev-174943.oktapreview.com//oauth2/aus8q4gst8vbUGzFp0h7',
      clientId: '0oa8olpfbRKzj1ScC2p6',
      idp: '0oa8olpfbRKzj1ScC2p6',
      scopes: ['openid', 'email', 'profile', 'phone', 'address', 'groups'],
      protectedScope: 'api:read'
    };

}));
