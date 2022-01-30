import project_zoe_img from "../assets/img/project_zoe_img.png";
import lectio_signum_img from "../assets/img/lectio_signum_img.png";
import sorting_img from "../assets/img/sorting_img.png";
import game_of_life_img from "../assets/img/game_of_life_img.png";

export const featured_works = [
    {
        name: "Lectio Signum",
        tags: "Python, Machine Learning",
        image: lectio_signum_img,
        buttons: [
            ["Project Site", "https://lectio-sigum-project-website.netlify.app/"],
            ["Repository", "https://github.com/MariamNaiga/lectio-signum"]
        ]
    },
    {
        name: "Sorting",
        tags: "ReactJS, Javascript, CSS",
        image: sorting_img,
        buttons: [
            ["Live Site", "https://sorting-visualizer-by-mariam.netlify.app/"], 
            ["Repository", "https://github.com/MariamNaiga/sorting-visualizer"]
        ]
    },
    {
        name: "Game of Life",
        tags: "Javascript, CSS",
        image: game_of_life_img,
        buttons: [
            ["Live Site", "https://game-of-life-by-mariam.netlify.app/"], 
            ["Repository", "https://github.com/MariamNaiga/game-of-life"]
        ]
    },
    {
        name: "Project Zoe",
        tags: "ReactJS, NestJS, Postgresql",
        image: project_zoe_img,
        buttons: [
            ["Site", "https://app.worshipharvest.org/#/"], 
            ["Client Repositiory", "https://github.com/kanzucodefoundation/project-zoe-client"], 
            ["Server Repositiory", "https://github.com/kanzucodefoundation/project-zoe-server"]
        ]
    },
]

export const more_works = [
    {
        name: "Folio",
        tags: "ReactJS",
        image: project_zoe_img,
        buttons: [
            ["Repository", "https://app.worshipharvest.org/#/"]
        ]
    },
    {
        name: "Colors of a Flag",
        tags: "Kotlin",
        image: project_zoe_img,
        buttons: [
            ["Repository", "https://app.worshipharvest.org/#/"]
        ]
    },
    {
        name: "Lambert W Function",
        tags: "Fortran",
        image: project_zoe_img,
        buttons: [
            ["Repository", "https://app.worshipharvest.org/#/"]
        ]
    },
    {
        name: "Can you Hear Me Now?",
        tags: "Ada",
        image: project_zoe_img,
        buttons: [
            ["Repository", "https://app.worshipharvest.org/#/"]
        ]
    },
]

