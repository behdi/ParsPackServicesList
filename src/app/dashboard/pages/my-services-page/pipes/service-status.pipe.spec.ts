import { ServiceStatusPipe } from './service-status.pipe';

describe('ServiceStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ServiceStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
