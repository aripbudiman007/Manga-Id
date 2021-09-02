const router = require('express').Router()
const cheerio = require('cheerio')
const replaceMangaPage = "https://kiryuu.id/";
const AxiosService = require('../helpers/AxiosService')


//Scrapper Manga List kiryuu.id

router.get('/page/:number', async (req, res) => {
    const { number } = req.params
    let url = number === "1" ? `https://kiryuu.id/manga?page=${number}` : `https://kiryuu.id/manga?page=${number}`

    try {
        const response = await AxiosService(url)

        if(response.status === 200){
            
            const $ = cheerio.load(response.data)
            const element = $('.postbody')

            let mangaList = []

            element.find('.listupd > .bs').each((index, el) => {
                title = $(el).find('.tt').text().trim()
                categorySlug = $(el).find('.bsx > a').attr('href').replace(replaceMangaPage, "")
                removeLastChar = categorySlug.substring(0, categorySlug.length - 1)
                endpoint = removeLastChar.split('/')
                imageUrl = $(el).find('.limit > img').attr('src')
                chapter = $(el).find('.epxs').text()
                rating = $(el).find('.numscore').text()

                mangaList.push({
                    title,
                    imageUrl,
                    chapter,
                    rating: +rating,
                    endpoint: {
                        category: endpoint[0],
                        slug: endpoint[1]
                    }
                })
            })

            let genreList = []
            element.find('.genrez').each((index, el) => {
                genreList = $(el).find('li').text().trim().split('\n').filter(Boolean)
            })

            let genres = genreList.map(el => {

                return {
                   genre : el.replace(/ /g, ""),
                   genreSlug: el.trim().replace(/ /g, "-").toLowerCase()
                }
            })

            return res.status(200).json({mangaList,genres})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})


router.get('/read/:slug', async (req, res) => {
    const { slug } = req.params

    try {
        const response = await AxiosService(`https://kiryuu.id/${slug}`)
        
        if (response.status === 200) {
            
            const $ = cheerio.load(response.data)
            const element = $('.postarea')
            const obj = {}
            obj.title = element.find('.headpost > h1').text()
            obj.pages = []
            
            const getPages = $('#readerarea').text().trim().split(`img src="`) ? $('#readerarea').text().trim().split(`img src='`) : null

            getPages.forEach((el, index) => {
                if(index !== 0){
                    let text = ''
                    for(let i = 0; i< el.length; i ++){
                        
                        if(el[i] === "\"" || el[i] === "\'"){
                            break;
                        }

                        if(el[i] === " "){
                            text+= "%20"
                        }else{
                            text+= el[i]
                        }

                    }

                    obj.pages.push(text.trim())
                }
            })

            obj.totalPages = obj.pages.length


            return res.status(200).json(obj)
        }

    } catch (error) {
        return res.status(500).json(error)
    }
})


router.get('/genres/:slug/page/:number', async (req, res) => {
    const { slug, number } = req.params
 
    let url = `https://kiryuu.id/genres/${slug}/page/${number}/` ? `https://kiryuu.id/genres/${slug}/page/${number}/` : null
    try {
       
        const response = await AxiosService(url)       

        if(response.status === 200){
            
            const $ = cheerio.load(response.data)
            const element = $('.postbody')
            let mangaList = []

            element.find('.listupd > .bs').each((index, el) => {
                title = $(el).find('.tt').text().trim()
                categorySlug = $(el).find('.bsx > a').attr('href').replace(replaceMangaPage, "")
                removeLastChar = categorySlug.substring(0, categorySlug.length - 1)
                endpoint = removeLastChar.split('/')
                imageUrl = $(el).find('.limit > img').attr('data-lazy-src')
                chapter = $(el).find('.epxs').text()
                rating = $(el).find('.numscore').text()

                mangaList.push({
                    title,
                    imageUrl,
                    chapter,
                    rating: +rating,
                    endpoint: {
                        category: endpoint[0],
                        slug: endpoint[1]
                    }
                })
            })

            return res.status(200).json(mangaList)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})


router.get('/:slug', async (req, res) => {
    const { slug } = req.params

    try {
        const response = await AxiosService(`https://kiryuu.id/manga/${slug}`)
        
        if(response.status === 200){
            
            const $ = cheerio.load(response.data)
            const element = $('.postbody')
            const obj = {}

            obj.title = element.find('.seriestuheader > h1').text()
            obj.imageUrl = element.find('.thumb > img').attr('data-lazy-src')
            obj.descriptions = element.find('.seriestuhead').find('p').text()

            obj.info = {}

            element.find('.infotable > tbody > tr').each((index, el) => {

                inf = $(el).text().trim().split('\n')
                filterd = inf.filter(Boolean)
                key = filterd[0].toLowerCase().replace(" ","")
                val = filterd[1]
                          
                obj.info[key] = val
                
            })

            obj.genres = []

            element.find('.seriestugenre > a').each((index, el) => {
                genre = $(el).text()
                genreSlug = $(el).text().trim().replace(/ /g, "-").toLowerCase().trim()

                obj.genres.push({
                    genre,
                    genreSlug
                })
            })

            obj.capterList = []

            element.find('.eplister > .clstyle > li').each((index, el) => {
                endpoint = $(el).find('.eph-num > a').attr('href').replace(replaceMangaPage, "")
                chapter = $(el).find('.eph-num > a').find('.chapternum').text()
                date = $(el).find('.eph-num > a').find('.chapterdate').text()
                
                obj.capterList.push({
                    chapter,
                    date,
                    endpoint : endpoint.substring(0, endpoint.length - 1)
                })
            })

            return res.status(200).json(obj)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})


module.exports = router