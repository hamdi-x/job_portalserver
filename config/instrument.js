// // Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// import * as Sentry from "@sentry/node"
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Sentry.init({
//   dsn: "https://177ff16b8d7e3cdd0442a17c8cac3b62@o4510151898562560.ingest.us.sentry.io/4510151900725248",
//   integrations: [
//     nodeProfilingIntegration(),
//     Sentry.mongooseIntegration()
//   ],
//   // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
// });
// // Manually call startProfiler and stopProfiler
// // to profile the code in between
// Sentry.profiler.startProfiler();

// // Starts a transaction that will also be profiled
// Sentry.startSpan({
//   name: "My First Transaction",
// }, () => {
//   // the code executing inside the transaction will be wrapped in a span and profiled
// });

// // Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling
// // your application until the process exits or stopProfiling is called.
// Sentry.profiler.stopProfiler();