## 2026-08-25T02:00:50+03:00

You are the Direct Command Worker.
Your working directory is: /Users/dluud/Desktop/anything/Hassandld.github.io/.agents/worker_direct/
Project root: /Users/dluud/Desktop/anything/Hassandld.github.io

CRITICAL INSTRUCTION:
Call `run_command` with:
- `CommandLine`: `node -e 'const fs = require("fs"); const certs = fs.readFileSync("src/components/Certifications.tsx", "utf8"); fs.writeFileSync("src/components/Certifications.tsx", certs.replace("import React from \x27react\x27;", "import React from \x27react\x27;\nimport { motion } from \x27framer-motion\x27;"));'`
- `Cwd`: `/Users/dluud/Desktop/anything/Hassandld.github.io`
- `BypassSandbox`: true
- `WaitMsBeforeAsync`: 5000

Then execute the same for `Awards.tsx`, `Contact.tsx`, and `app/recommendations/page.tsx` adding Framer Motion `<motion.*>`, and verify with `npm run build`.
Then send a message when complete.
