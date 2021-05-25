#!/usr/bin/env zx

await $`fortune | cowsay | lolcatjs`;

const branch = await $`git branch --show-current`;
