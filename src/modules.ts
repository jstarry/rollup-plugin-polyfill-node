import POLYFILLS from './polyfills';
const EMPTY_PATH = POLYFILLS['empty.js'];

function addModule(libs: Map<string, any>, enable: Array<string> | undefined, name: string, polyfill: any) {
  if (!enable || enable.includes(name)) {
    libs.set(name, polyfill);
  }
}

export function getModules(enable?: Array<string>) {
  const libs = new Map();

  addModule(libs, enable, 'process', POLYFILLS['process-es6.js']);
  addModule(libs, enable, 'global', POLYFILLS['global.js']);
  addModule(libs, enable, 'buffer', POLYFILLS['buffer-es6.js']);
  addModule(libs, enable, 'util', POLYFILLS['util.js']);
  addModule(libs, enable, 'sys', libs.get('util'));
  addModule(libs, enable, 'events', POLYFILLS['events.js']);
  addModule(libs, enable, 'stream', POLYFILLS['stream.js']);
  addModule(libs, enable, 'path', POLYFILLS['path.js']);
  addModule(libs, enable, 'querystring', POLYFILLS['qs.js']);
  addModule(libs, enable, 'punycode', POLYFILLS['punycode.js']);
  addModule(libs, enable, 'url', POLYFILLS['url.js']);
  addModule(libs, enable, 'string_decoder', POLYFILLS['string-decoder.js']);
  addModule(libs, enable, 'http', POLYFILLS['http.js']);
  addModule(libs, enable, 'https', POLYFILLS['http.js']);
  addModule(libs, enable, 'os', POLYFILLS['os.js']);
  addModule(libs, enable, 'assert', POLYFILLS['assert.js']);
  addModule(libs, enable, 'constants', POLYFILLS['constants.js']);
  addModule(libs, enable, '_stream_duplex', POLYFILLS['__readable-stream/duplex.js']);
  addModule(libs, enable, '_stream_passthrough', POLYFILLS['__readable-stream/passthrough.js']);
  addModule(libs, enable, '_stream_readable', POLYFILLS['__readable-stream/readable.js']);
  addModule(libs, enable, '_stream_writable', POLYFILLS['__readable-stream/writable.js']);
  addModule(libs, enable, '_stream_transform', POLYFILLS['__readable-stream/transform.js']);
  addModule(libs, enable, '_inherits', POLYFILLS['inherits.js']);
  addModule(libs, enable, '_buffer_list', POLYFILLS['__readable-stream/buffer-list.js']);
  addModule(libs, enable, 'timers', POLYFILLS['timers.js']);
  addModule(libs, enable, 'console', POLYFILLS['console.js']);
  addModule(libs, enable, 'vm', POLYFILLS['vm.js']);
  addModule(libs, enable, 'zlib', POLYFILLS['zlib.js']);
  addModule(libs, enable, 'tty', POLYFILLS['tty.js']);
  addModule(libs, enable, 'domain', POLYFILLS['domain.js']);

  // TODO: Decide if we want to implement these or not
  // currently causing trouble in tests
  addModule(libs, enable, 'fs', EMPTY_PATH);
  addModule(libs, enable, 'crypto', EMPTY_PATH);
  // addModule(libs, enable, 'fs', POLYFILLS['browserify-fs.js']);
  // addModule(libs, enable, 'crypto', POLYFILLS['crypto-browserify.js']);

  // TODO: No good polyfill exists yet
  addModule(libs, enable, 'http2', EMPTY_PATH);
  
  // not shimmed
  addModule(libs, enable, 'dns', EMPTY_PATH);
  addModule(libs, enable, 'dgram', EMPTY_PATH);
  addModule(libs, enable, 'child_process', EMPTY_PATH);
  addModule(libs, enable, 'cluster', EMPTY_PATH);
  addModule(libs, enable, 'module', EMPTY_PATH);
  addModule(libs, enable, 'net', EMPTY_PATH);
  addModule(libs, enable, 'readline', EMPTY_PATH);
  addModule(libs, enable, 'repl', EMPTY_PATH);
  addModule(libs, enable, 'tls', EMPTY_PATH);
  addModule(libs, enable, 'perf_hooks', EMPTY_PATH);

  return libs;
}
