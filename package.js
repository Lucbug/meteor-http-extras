Package.describe({
  name: "lucbug:http",
  summary: "Modified package from aldeed:http. Improves the core HTTP package",
  version: "0.0.1",
  git: "https://github.com/lucbug/meteor-http-extras"
});

Npm.depends({request: "2.47.0"});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['underscore', 'http']);
  api.add_files('http-extras-common.js', ['client', 'server']);
  api.add_files('http-extras-client.js', 'client');
  api.add_files('http-extras-server.js', 'server');
});

Package.on_test(function (api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use('webapp', 'server');
  api.use('underscore');
  api.use('random');
  api.use('jquery', 'client');
  api.use(['http', 'lucbug:http', 'test-helpers'], ['client', 'server']);

  api.add_files('test_responder.js', 'server');
  api.add_files('http-extras-tests.js', ['client', 'server']);
});
