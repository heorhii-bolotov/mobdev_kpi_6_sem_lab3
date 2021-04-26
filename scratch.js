const fp = './src/public/BooksList.txt'
const fs = require("fs")
// const list = JSON.parse(fs.readFileSync(fp))


// console.log(list)

const list = {
    books: [
        {
            title: 'Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout. Long title that want to break your layout',
            subtitle: '',
            isbn13: 'noid',
            price: 'Priceless',
            image: ''
        },
        {
            title: 'iOS Components and Frameworks',
            subtitle: 'Understanding the Advanced Features of the iOS SDK',
            isbn13: '9780321856715',
            price: '$23.30',
            image: 'Image_01.png'
        },
        {
            title: 'Learning iOS Development',
            subtitle: 'A Hands-on Guide to the Fundamentals of iOS Programming',
            isbn13: '9780321862969',
            price: '$3.99',
            image: 'Image_02.png'
        },
        {
            title: 'Beginning iOS Programming',
            subtitle: 'Building and Deploying iOS Applications',
            isbn13: '9781118841471',
            price: '$6.35',
            image: 'Image_03.png'
        },
        {
            title: 'Beginning iOS 5 Development',
            subtitle: 'Exploring the iOS SDK',
            isbn13: '9781430236054',
            price: '$3.65',
            image: ''
        },
        {
            title: 'Beginning iOS 5 Games Development',
            subtitle: 'Using the iOS SDK for iPad, iPhone and iPod touch',
            isbn13: '9781430237105',
            price: '$36.31',
            image: 'Image_05.png'
        },
        {
            title: 'More iOS 6 Development',
            subtitle: 'Further Explorations of the iOS SDK',
            isbn13: '9781430238072',
            price: '$4.95',
            image: 'Image_06.png'
        },
        {
            title: 'Beginning iOS 6 Development',
            subtitle: 'Exploring the iOS SDK',
            isbn13: '9781430245124',
            price: '$5.34',
            image: 'Image_07.png'
        },
        {
            title: 'Beginning iOS 7 Development',
            subtitle: 'Exploring the iOS SDK',
            isbn13: '9781430260226',
            price: '$3.65',
            image: 'Image_08.png'
        },
        {
            title: 'Developing iOS Applications with Flex 4.5',
            subtitle: '',
            isbn13: '9781449308360',
            price: '$12.99',
            image: ''
        },
        {
            title: 'iOS 6 Programming Cookbook',
            subtitle: 'Solutions for iOS Developers',
            isbn13: '9781449342753',
            price: '$4.45',
            image: 'Image_10.png'
        }
    ]
}

// console.log(list.books)

list.books.forEach((el, i) => {
    if (el.image.length) {
        require(`src/public/Images/${el.image}`)
    }
})
