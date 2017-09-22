import { AlbumsModule } from './albums.module';

describe('AlbumsModule', () => {
  let albumsModule: AlbumsModule;

  beforeEach(() => {
    albumsModule = new AlbumsModule();
  });

  it('should create an instance', () => {
    expect(albumsModule).toBeTruthy();
  });
});
