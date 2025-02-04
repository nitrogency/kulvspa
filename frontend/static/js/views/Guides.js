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
                    <h1 data-i18n-key="translation" class="text-3xl font-extrabold dark:text-white pb-2">Translation</h1>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="crowdin_title" href="/posts/7" class="nav__link" data-link>Crowdin - setup guide</a></p>
                    </div>
                    <h1 data-i18n-key="htb" class="text-3xl font-extrabold text-green-500 pb-2 pt-4">Hack The Box</h1>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_htblabs_title" href="/posts/9" class="nav__link" data-link>HTB - HTBank Guide - Parameter Injection</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_0xchunked_title" href="/posts/10" class="nav__link" data-link>HTB - 0xBOverchunked Guide</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_nmap_title" href="/posts/11" class="nav__link" data-link>HTB - Network Enumeration with Nmap Guide</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_foot_title" href="/posts/12" class="nav__link" data-link>HTB - Footprinting Guide</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_webrec_title" href="/posts/14" class="nav__link" data-link>HTB - Information Gathering (Web Edition) Skills Assessment guide</a></p>
                    </div>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="htb_shells_title" href="/posts/15" class="nav__link" data-link>HTB - Shells & Payloads - Skills Assessment Guide</a></p>
                    </div>
                    <h1 data-i18n-key="tech" class="text-3xl font-extrabold text-yellow-500 pb-2 pt-4">Tech</h1>
                    <div class="max-w-screen-xl text-center">
                        <p class="text-lg font-normal lg:text-xl"><a data-i18n-key="tech_ubuntuauto_title" href="/posts/16" class="nav__link" data-link>Ubuntu - creating unattended/automatic .ISO's</a></p>
                    </div>
                </div>  
            </body>
        `;
    }
}