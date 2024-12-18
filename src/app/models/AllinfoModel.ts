export interface AllinfoModel{
    "adult": false,
    "backdrop_path": string,
    "belongs_to_collection": {
        "id": number,
        "name": string,
        "poster_path": string,
        "backdrop_path": string
    },
    "budget": number,
    "genres": [
        {
            "id": number,
            "name": string
        },
        {
            "id": number,
            "name": string
        },
        {
            "id": number,
            "name": string
        }
    ],
    "homepage": string,
    "id": 3,
    "imdb_id": string,
    "origin_country": [],
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "production_companies": [
        {
            "id": number,
            "logo_path": null,
            "name": string,
            "origin_country": string
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": string,
            "name": string
        }
    ],
    "release_date": string,
    "revenue": number,
    "runtime": number,
    "spoken_languages": [
        {
            "english_name": string,
            "iso_639_1": string,
            "name": string
        },
        {
            "english_name": string,
            "iso_639_1": string,
            "name": string
        },
        {
            "english_name": string,
            "iso_639_1": string,
            "name": string
        }
    ],
    "status": string,
    "tagline": string,
    "title": string,
    "video": false,
    "vote_average": number,
    "vote_count": number
}