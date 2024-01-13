import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
    }

    async getHtml() {
        const response = await fetch(`/static/posts/${this.postId}.html`);
        const html = await response.text();
        return `
            ${html}
        `;
    }
}
