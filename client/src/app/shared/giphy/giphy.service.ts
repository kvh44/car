import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class GiphyService {

    giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';

    constructor(public http: HttpClient) {

    }

    get(searchTerm) {
        const apiLink = this.giphyApi + searchTerm;

        return this.http.get(apiLink).pipe(map((response: any) => {
            console.log(response.data[0].images.fixed_height_small.url);
            if (response.data.length > 0) {
                return response.data[0].images.fixed_height_small.url ;
            } else {
                return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif';
            }
        }));
    }

}
