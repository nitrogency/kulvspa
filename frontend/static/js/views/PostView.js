import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle('Post ' + this.postId);
    }

    async getHtml() {
        const response = await fetch(`/static/js/posts/${this.postId}.html`);
        const html = await response.text();
        console.log(response);
        console.log(html);
        return `
            <h1>Post ${this.postId}</h1>
            ${html}
        `;
    }
}
