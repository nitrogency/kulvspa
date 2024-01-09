import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Guides');
    }

    async getHtml(){
        return `
            <body class="min-h-screen bg-gray-900">
                <div class="flex flex-col items-center justify-start py-8 h-screen max-w-screen-xl">
                    <h1 class="text-5xl font-extrabold dark:text-white pb-8">The page you're looking for wasn't found!</h1>
                    <p class="text-lg font-normal lg:text-xl">Click <a href="/" class="nav__link text-yellow-300 hover:underline" data-link>here</a> to go back.</p>
                </div>  
            </body>
        `;
    }
}