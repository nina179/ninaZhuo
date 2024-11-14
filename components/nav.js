class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav style="width:20%; padding-right: 30vw;">
            <ul>
                <li style="width: 200%; line-height: 1;"><a src="/index.html"><h1>Nina Zhuo</h1></a></li>
                <li><a src="/pages/about.html">About</a></li>
                <li><a src="/pages/portfolio.html">Portfolio</a></li>
                <li><a src="/pages/blog.html">Blog</a></li>
            </ul>
        </nav>
      `;
    }
  }

customElements.define('nav-component', Nav);