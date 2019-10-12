# squirrel_run

I ran this to get a precision of 5, but I ran out of memory. My poor pc is not made for this.

I got up to 75 100 000 run and the average of the squirrel took 1986.9610233688416 at that time.

Out put from my terminal:
Runs: 74870000. Average: 1986.9622957927074
Runs: 74880000. Average: 1986.9642582932693
Runs: 74890000. Average: 1986.9672667111763
Runs: 74900000. Average: 1986.9656622429907
Runs: 74910000. Average: 1986.9663197837406
Runs: 74920000. Average: 1986.9631146956754
Runs: 74930000. Average: 1986.960595809422
Runs: 74940000. Average: 1986.9580606485188
Runs: 74950000. Average: 1986.9596755170114
Runs: 74960000. Average: 1986.9616085779082
Runs: 74970000. Average: 1986.9581578631453
Runs: 74980000. Average: 1986.9621261936516
Runs: 74990000. Average: 1986.9608505534072
Runs: 75000000. Average: 1986.9605419333334
Runs: 75010000. Average: 1986.9566342620983
Runs: 75020000. Average: 1986.9591408157823
Runs: 75030000. Average: 1986.958255817673
Runs: 75040000. Average: 1986.9610926039445
Runs: 75050000. Average: 1986.9637122718188
Runs: 75060000. Average: 1986.9666525712762
Runs: 75070000. Average: 1986.9659605434927
Runs: 75080000. Average: 1986.9663051012253
Runs: 75090000. Average: 1986.9630110134506
Runs: 75100000. Average: 1986.9610233688416

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: node_module_register
 2: v8::internal::FatalProcessOutOfMemory
 3: v8::internal::FatalProcessOutOfMemory
 4: v8::internal::Factory::NewUninitializedFixedArray
 5: v8::internal::WasmDebugInfo::SetupForTesting
 6: v8::internal::interpreter::BytecodeArrayRandomIterator::UpdateOffsetFromIndex
 7: 000001C3B54843C1
npm ERR! code ELIFECYCLE
npm ERR! errno 3
npm ERR! squirrel_run@0.0.1 start: `node index.js`
npm ERR! Exit status 3
npm ERR!
npm ERR! Failed at the squirrel_run@0.0.1 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\seanj\AppData\Roaming\npm-cache\_logs\2019-10-12T07_10_28_182Z-debug.log
