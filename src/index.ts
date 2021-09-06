import { Plugin } from '@hapi/hapi';

function getForwardedIp(forwadedForHeader: string): string | undefined {
  return forwadedForHeader.split(',')[0]?.trim();
}

export const HapiForwardedIpPlugin: Plugin<any> = {
  pkg: {
    name: 'hapi-forwarded-ip',
    version: '1.0.0',
  },
  register: (server) => {
    server.ext({
      type: 'onRequest',
      method: (request, h) => {
        const forwardedForHeader = request.headers['x-forwarded-for'];
        if (forwardedForHeader) {
          const remoteAddress = getForwardedIp(forwardedForHeader);
          if (remoteAddress) {
            Object.assign(request.info, { _remoteAddress: remoteAddress });
          }
        }
        return h.continue;
      },
    });
  },
};
