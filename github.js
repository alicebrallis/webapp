/* global menu */

"use strict";

var github = (function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Github";

        var link = document.createElement("a");

        link.className = "link";
        link.textContent = "Github";
        link.href = "https://github.com/alicebrallis/oophp-v4";

    
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(link);

        fetch("https://api.github.com/users/alicebrallis/repos").then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("a");
            
                repoElement.textContent = repo.name;
                repoElement.href = repo.html_url;
                window.mainContainer.appendChild(repoElement);
                console.log(repo);
            });

            window.rootElement.appendChild(window.mainContainer);

            menu.showMenu("folder");
        }).catch(function(error) {
            console.log('The fetch operation failed due to the following error: ', error.message);
        });

        // var githubRequest = new XMLHttpRequest();
        // githubRequest.addEventListener("load", renderGithubRepos);
        // githubRequest.open("GET", "https://api.github.com/users/emilfolino/repos");
        // githubRequest.send();
    };

    // var renderGithubRepos = function () {
    //     var repos = JSON.parse(this.responseText);
    //
    //     repos.forEach(function(repo) {
    //         var repoElement = document.createElement("p");
    //         repoElement.textContent = repo.name;
    //         window.mainContainer.appendChild(repoElement);
    //     });
    //
    //     window.rootElement.appendChild(window.mainContainer);
    //
    //     showMenu("folder");
    // }

    return {
        showGithub: showGithub
    };
})(github);
