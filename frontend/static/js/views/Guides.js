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
                    <h1 data-i18n-key="guides" class="text-5xl font-extrabold dark:text-white pb-8">Guides</h1>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="crowdin_title" href="/posts/7" class="nav__link" data-link>Crowdin - setup guide</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_htblabs_title" href="/posts/9" class="nav__link" data-link>HTB - HTBank Guide - Parameter Injection</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_0xchunked_title" href="/posts/10" class="nav__link" data-link>HTB - 0xBOverchunked Guide</a></p>
                    </div>
                </div>  
            </body>
        `;
    }
}