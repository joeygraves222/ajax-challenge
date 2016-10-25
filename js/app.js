// 1) Using jquery -- create $(document).ready function

// 2) Within here put a listener on the search button -- it can be in a form or not

// 3) Get the username from the input box and put that into the gitHub api url ( https://api.github.com/users/{username} )

// 4) Use an ajax call to call to this url and get back the json data

// 5) Pull out and put the data that you need to put into the elements on your html page

 $(document).ready(function()
      {
            var displayAlert = document.getElementsByClassName("alert");
            //var submitBtn = document.getElementById('submitBtn');
            $('#submitBtn').on('click', function (e) {
                e.preventDefault();
                var username = document.getElementById('userName');

                var urlSearch = 'https://api.github.com/users/' + username.value;
                requestJSON(urlSearch, function (json) {
                    if (json.message == "Not Found" || username == '') {
                        document.getElementById("alertDiv").style.opacity = 1;
                    }
                    else {

                        var name = json.name;
                        var outputImg = json.avatar_url;
                        var followers = json.followers;
                        var repos = json.public_repos;

                        var PRINTHTML = '<p>' + name + '</p>';
                        PRINTHTML = PRINTHTML + '<a><p>' + name + '</a></p>';
                        PRINTHTML = PRINTHTML + '<div class="githubcontent"><div class="avi"><a><img src="' + outputImg + '" width="80" height="80" alt="Profile Picture"></a></div>';
                        PRINTHTML = PRINTHTML + '<p>Followers: ' + followers + '</p>';
                        PRINTHTML = PRINTHTML + '<p>Public Repos: ' + repos + '</p>';
                        $('#output').html(PRINTHTML);
                    }
                }
                );
                function requestJSON(url, callback) {
                    $ajax({
                        url: url,
                        complete: function (xhr) {
                            callback.call(null, xhr.responseJSON);
                        }
                    });
                }

            });
            var close = document.getElementsByClassName("closebtn");
                close.onclick = function(){
                    var div = this.parentElement;
                    //div.style.opacity = "0";
                    document.getElementById("alertDiv").style.opacity = 0;
                    //setTimeout(function(){ div.style.opacity = 0; }, 600);

            }
      }
)
