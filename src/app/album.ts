import { Track } from './track';

export default interface Album {
    name: string,
    releaseDate: string,
    coverImage: string,
    tracks: Track[]
}
