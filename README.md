# hapi-forwarded-ip
![Build and publish](https://github.com/zolbooo/hapi-forwarded-ip/actions/workflows/main.yml/badge.svg)
![npm](https://img.shields.io/npm/v/hapi-forwarded-ip)

This package overrides remoteAddress of Hapi request object with `X-Forwarded-For` header's value.

## Usage
Import plugin:
```js
import { HapiForwardedIpPlugin } from 'hapi-forwarded-ip';
```

When creating server, call:
```js
await server.register(HapiForwardedIpPlugin);
```

Happy hacking! 🚀
