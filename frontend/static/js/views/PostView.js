import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
    }

     async getHtml() {
        const response = await fetch(`/static/posts/${this.postId}.html`);
        const html = await response.text();
        if (html.includes("index")) {
            return `
            <body>
                <div class="flex flex-col items-center justify-start py-8 h-screen">
                    <h1 data-i18n-key="404_title" class="text-5xl font-extrabold dark:text-white pb-8">The page you're looking for wasn't found!</h1>
                    <p data-i18n-key="404_p" class="text-lg font-normal lg:text-xl">Click <a href="/" class="nav__link text-yellow-300 hover:underline" data-link>here</a> to go back.</p>
                </div>  
            </body>
            `;
        }
        return `
            ${html}
        `;
    }
}
