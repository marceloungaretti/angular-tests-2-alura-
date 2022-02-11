import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Photo } from './../interfaces/photo';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService{
  getPhotos(): Observable<Photo[]>{
    return of(buildPhotoList());
  }
}
