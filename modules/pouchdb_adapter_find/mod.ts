import { capturePlugin } from '../pouchdb_deno_utils/capture_plugin.ts'
import 'https://cdn.skypack.dev/pin/pouchdb@v7.2.2-FZ4A3SJdMfxbHCP6VOPg/mode=imports/unoptimized/dist/pouchdb.find.js'
import type { PouchDB } from '../pouchdb_types/pouchdb.ts'

// Because we're using the vanilla browser export, the Memory plugin expects
// a PouchDB global. Function capturePlugin fakes the global and capture the
// passed plugin for use later with real PouchDB for Deno.
const FindPluginDeno: PouchDB.Plugin = capturePlugin(['createIndex', 'find', 'explain', 'getIndexes'])

export default FindPluginDeno