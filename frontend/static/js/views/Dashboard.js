import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('kulvians');
    }

    async getHtml(){
        return `
            <body>
                <div class="flex flex-col items-center justify-start py-8 h-screen">
                    <h1 data-i18n-key="index_welcome" class="text-5xl font-extrabold dark:text-white pb-8">Welcome!</h1>
                    <div class="max-w-screen-xl">
                        <p data-i18n-key="index_p" class="text-lg font-normal lg:text-xl">
                            We are a Lithuanian translating community that’s dedicated to ensuring as many people as possible can enjoy software and media in their own language, and all for free.<br><br>
                            We don’t charge anything for our translations, and we are able to translate from English to Lithuanian and vice versa. Want your software, website, or game to be more available, for free? Contact us!<br><br>
                            If you’re curious about translation or other topics, you can check our compiled experience in the “Guides” section.    
                        </p>
                    </div>
                </div>        
            </body>    
        `;
    }
}