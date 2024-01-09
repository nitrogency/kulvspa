import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('About us');
    }

    async getHtml(){
        return `
            <body class="bg-gray-900">
                <div class="flex flex-col items-center justify-start py-8 h-screen">
                    <h1 class="text-5xl font-extrabold dark:text-white pb-8">Who are we?</h1>
                    <div class="max-w-screen-xl">
                        <p class="text-lg font-normal lg:text-xl">
                            We are a relatively small community of tech enthusiasts and translators from Lithuania who wish to preserve our language. Our idea of free translation was inspired by the <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" class="text-yellow-500 hover:underline" target="_blank"> FOSS movement</a>. Since software can be open-source, we decided to bring that same idea to another aspect of every program – localization.    
                        </p>
                    </div>
                    <h1 class="text-5xl font-extrabold dark:text-white pb-8">Why "Kulvians"?</h1>
                    <div class="max-w-screen-xl">
                        <p class="text-lg font-normal lg:text-xl">
                            Abraomas Kulvietis was one of the fathers of Lithuanian writing and translation. He was a protestant born in the XVI century, responsible for creating various Lithuanian schools and spreading ideas of reformation. His most renowned work is creating one of the first Lithuanian psalms. At the time, the Grand Duchy of Lithuania had a very undeveloped written language, which is why the work of Abraomas is considered very important to this day.     
                        </p><br>
                        <p class="text-lg font-normal lg:text-xl">
                            He was exiled to Prussia for his religious views later on in life, where he became the rector of Karaliaučius University and the Duke of Prussia’s advisor. Before his death he was allowed to return to Lithuania, where he continued the spread of his national and protestant ideas. He passed away in 1545 from consumption at 35 years of age.
                        </p><br>
                        <p class="text-lg font-normal lg:text-xl">
                            Because of his importance in Lithuanian culture and our hope of continuing his ideals, we decided to name ourselves after his last name.
                        </p>
                    </div>
                </div>        
            </body>
        `;
    }
}