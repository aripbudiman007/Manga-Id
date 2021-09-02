# **Website Scraping**

Initial Setup
```
npm install
```

Running In Development Mode 
```
npm run dev
```

Base URL
```
http://localhost/3000
```

## **API Endpoint**
---

### **GET Manga List**
 - URL

    ```
    /manga/page/:number
    ```
 - Response 
    ```json
    {
        "mangaList": [
            {
                "title": ".hack//G.U.+",
                "imageUrl": "https://i0.wp.com/kiryuu.id/wp-content/uploads/2021/03/91fj96vkxcl-252895-I2KU8PZ9.jpg?resize=165,225",
                "chapter": "Chapter 09",
                "rating": 7.5,
                "endpoint": {
                    "category": "manga",
                    "slug": "hackgu"
                }
            },
            {
                "title": "“It’s too precious and hard to read !!” 4P Short Stories",
                "imageUrl": "https://i1.wp.com/kiryuu.id/wp-content/uploads/2021/03/40897-002048-s8dfAzNE.jpg?resize=165,225",
                "chapter": "Chapter 9",
                "rating": 7.5,
                "endpoint": {
                    "category": "manga",
                    "slug": "its-too-precious-and-hard-to-read-4p-short-stories"
                }
            }
        ],
        "genres": [
            {
                "genre": "4-Koma",
                "genreSlug": "4-koma"
            },
            {
                "genre": "Action",
                "genreSlug": "action"
            },
            {
                "genre": "Adaptation",
                "genreSlug": "adaptation"
            },
            {
                "genre": "Adult",
                "genreSlug": "adult"
            }
        ]
        
    ```