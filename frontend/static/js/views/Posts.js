import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Posts');
    }

    async getHtml(){
        return `
            <h1>Posts</h1>
            <div id="posts"></div>
            <p><a href="/posts/1" class="nav__link" data-link>Post 1</a></p>
        `;
    }
}