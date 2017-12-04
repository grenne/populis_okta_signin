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
    orgUrl: sessionStorage.url_okta,
    clientId: sessionStorage.id_okta,
    idp: sessionStorage.id_okta,
    scopes: ['openid', 'email', 'profile', 'phone', 'address', 'groups'],
    protectedScope: 'api:read'
    };

}));
