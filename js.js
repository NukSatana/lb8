class Games {
    constructor(name, year, genre, cross_platform) {
        this.name=name,
        this.year=year,
        this.genre=genre,
        this.cross_platform=cross_platform
    }
    informotion() {
        console.log(this.name)
    }
}

let game1=new Games('CS:GO', '2004', 'shooter', 'yes')
let game2=new Games('Warzone', '2024', 'shooter', 'yes')
let game3=new Games({
    name: 'Risen',
    year: '2000',
    genre: 'adventure',
    cross_platfor: 'no'
})

class Component {
    constructor(selector){
        this.$el=document.querySelector(selector)
    }
    blockHide(){
        this.$el.style.display = 'none'
    }
    blockColor(color){
        this.$el.style.background=color
    }
}

class Box extends Component{
    constructor(options) {
        super(options.selector)

        this.$el.style.width = options.width+'px'
        this.$el.style.height = options.height+'px'
        this.$el.style.background = options.color

    const box1 = new Box ({
        selector: '#box1',
        width: 1000,
        height: 50,
        color: 'blue'
    })

    }
}
