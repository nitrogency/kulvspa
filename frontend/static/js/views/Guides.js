import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Guides');
    }

    async getHtml(){
        return `
            <body class="min-h-screen bg-gray-900">
                <div class="flex flex-col items-center justify-start py-8 h-screen">
                    <h1 class="text-5xl font-extrabold dark:text-white pb-8">Guides</h1>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/7" class="nav__link" data-link>Crowdin - setup guide</a></p>
                    </div>
                </div>  
            </body>
        `;
    }
}