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
http://localhost:3000
```
**Site Reference :**
https://kiryuu.id/

---

## **API Endpoint**
---

### **GET / Manga List**
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
### **GET / Manga Preview**
- URL

    ```
    /manga/:slug
    ```
- Response
    ```json
    {
        "title": "Haikyuu!! Bahasa Indonesia",
        "imageUrl": "https://i0.wp.com/kiryuu.id/wp-content/uploads/2021/03/haikyuu-345270-U7VtLcuy.jpg",
        "descriptions": "Setelah kalah dalam pertandingan bola voli pertama dan terakhirnya melawan Tobio Kageyama, “Raja Pengadilan,” Shoyo Hinata bersumpah akan menjadi saingannya setelah lulus sekolah menengah. Tapi apa yang terjadi ketika orang yang dia ingin kalahkan akhirnya menjadi rekan setimnya ?!",
        "info": {
            "status": "Completed",
            "type": "Manga",
            "released": "2012",
            "author": "FURUDATE Haruichi",
            "artist": "FURUDATE Haruichi",
            "serialization": "Shuukan Shounen Jump (Shueisha)",
            "postedby": "daristya",
            "postedon": "March 5, 2021",
            "updatedon": "April 28, 2021"
        },
        "genres": [
            {
                "genre": "Comedy",
                "genreSlug": "comedy"
            },
            {
                "genre": "Drama",
                "genreSlug": "drama"
            }
        ],
        "capterList": [
            {
                "chapter": "Chapter 402",
                "date": "April 25, 2021",
                "endpoint": "haikyuu-chapter-402"
            },
            {
                "chapter": "Chapter 401",
                "date": "April 25, 2021",
                "endpoint": "haikyuu-chapter-401"
            },
            {
                "chapter": "Chapter 400",
                "date": "April 25, 2021",
                "endpoint": "haikyuu-chapter-400"
            }
        ]
    }
    ```
### **GET / Read Manga Chapter**
- URL

    ```
    /manga/read/:slug
    ```
- Response 
    ```json
    {
        "title": "Haikyuu!! Chapter 402 Bahasa Indonesia",
        "pages": [
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/1.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/2.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/3.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/4.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/5.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/6.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/7.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/8.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/9.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/10.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/11.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/12.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/13.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/14.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/15.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/16.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/17.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/18.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/19.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/20.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/21.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/22.jpg",
            "https://cdnkuma.my.id/img/haikyuu/chapter-402/23.jpg"
        ],
        "totalPages": 23
    }
    ```

### **GET / Filter Manga By Genre**
- URL
    ```
    manga/genres/:slug/page/:number'
    ```
- Response 
    ```json
    [
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
            "title": "+C: Sword and Cornett",
            "imageUrl": "https://i1.wp.com/kiryuu.id/wp-content/uploads/2021/03/3063-172388-yeWb9Dv3.png?resize=165,225",
            "chapter": "Chapter 5",
            "rating": 8,
            "endpoint": {
                "category": "manga",
                "slug": "c-sword-and-cornett"
            }
        }
    ]
    ```