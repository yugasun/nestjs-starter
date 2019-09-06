import { Injectable } from '@nestjs/common';
import {
  TerminusEndpoint,
  TerminusOptionsFactory,
  DNSHealthIndicator,
  TerminusModuleOptions,
} from '@nestjs/terminus';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(private readonly dns: DNSHealthIndicator) {}

  createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: '/health/photo',
      healthIndicators: [
        async () => this.dns.pingCheck('local', 'http://0.0.0.0:3000/api/photo'),
      ],
    };

    return {
      endpoints: [healthEndpoint],
    };
  }
}
