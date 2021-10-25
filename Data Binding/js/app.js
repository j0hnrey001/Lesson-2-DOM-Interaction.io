new Vue({
    el: ".section",
    data: {
        YourName: 'John Rey Alano',
        YourAge: 21,
        Yourage2: 21+5,
        imgSrc: 'https://www.wallpapertip.com/wmimgs/165-1650583_animated-images-pictures-of-animated-hd-47-great.jpg'
    },

    methods: {
        favNo(add1, add2){
            const randomNo = Math.random(add1, add2)
            return randomNo
        }

    },
})