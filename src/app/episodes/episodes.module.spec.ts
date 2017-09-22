import { EpisodesModule } from './episodes.module';

describe('EpisodesModule', () => {
  let episodesModule: EpisodesModule;

  beforeEach(() => {
    episodesModule = new EpisodesModule();
  });

  it('should create an instance', () => {
    expect(episodesModule).toBeTruthy();
  });
});
