import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Contributions');
    }

    async getHtml(){
        return `
            <body class="min-h-screen bg-gray-900">
                <div class="flex flex-col items-center justify-start py-8 h-screen">
                    <h1 data-i18n-key="contributions_title" class="text-5xl font-extrabold dark:text-white pb-8">Our contributions</h1>
                    <h2 data-i18n-key="contributions_games" class="text-3xl font-extrabold dark:text-white pb-8">Games</h2>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/1" class="nav__link" data-link>Rhythm Quest</a></p>
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/2" class="nav__link" data-link>Battlebit Remastered</a></p>
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/3" class="nav__link" data-link>Melonracer</a></p>
                    </div>
                    <h2 data-i18n-key="contributions_software" class="text-3xl py-8 font-extrabold dark:text-white pb-8">Software</h2>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/4" class="nav__link" data-link>Reactive Resume</a></p>
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/5" class="nav__link" data-link>Bitwarden - Desktop</a></p>
                        <p class="text-lg font-normal lg:text-xl"><a href="/posts/6" class="nav__link" data-link>Authenticator Extension</a></p>    
                    </div>
                </div>  
            </body>
        `;
    }
}