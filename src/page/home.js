const loadHome = (function() {
    const body = document.querySelector('body');

    const searchHead = (function(){
        const div = document.createElement('div');
        div.setAttribute('id', 'search');
        div.innerHTML = `
            <img id="glass" src="/assets/magnifying-glass.svg" alt="search-icon">
            <form method="post">
                <input id="input-search" type="text" placeholder="Search a city">
            </form>
        `;

        body.prepend(div)
    })();

    const _card = (function(){
        const div = document.createElement('div');
        div.setAttribute('id', 'container');
        div.innerHTML = `
                <div id="card">
                    <div id="description"></div>
                    <div id="ubication">
                        <div id="name"></div>
                        <div id="country"></div>
                    </div>
                    <div id="data">
                        <div id="temp"></div>
                        <div id="data-box">
                            <div id="main">
                                <div id="feelslike"></div>
                                <div id="tempMaxMin"></div>
                                <div id="humidity"></div>
                            </div>
                            <div id="btn-grades">
                                <div id="celsius">C°</div><span>/</span><div id="farenheit">F°</div>
                            </div>
                        </div>
                    </div>
                </div>
        `;


        body.appendChild(div);
    })()
})();
