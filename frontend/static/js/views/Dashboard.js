import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    async getHtml(){
        return `
            <body class="bg-gray-900">
                <div>
                    <h1 class="text-5xl font-extrabold dark:text-white">Heading 1</h1><br>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
            </body>
        `;
    }
}