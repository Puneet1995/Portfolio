



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-355fc5f5dc43030d495ea75b6bc8366695646a7566c13dd6ba2c2d358e1b5383.css" integrity="sha256-NV/F9dxDAw1JXqdba8g2ZpVkanVmwT3WuiwtNY4bU4M=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-7fae2d802a203f722465a757a5c1ecdb285d355fdcda038c10a2d20722dcf959.css" integrity="sha256-f64tgCogP3IkZadXpcHs2yhdNV/c2gOMEKLSByLc+Vk=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-752d672b75dd3528039ea14e78d5638b9126eeb7de38701f46091862c63d73da.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-ba6a49a5b72a3b71afb5394ab11a0b1a4d15cdb5877879000bf1bca10c19e310.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    
    <title>github-activity/github-activity.js at master · caseyscarborough/github-activity</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/3237612?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="caseyscarborough/github-activity" name="twitter:title" /><meta content="github-activity - A widget for displaying GitHub activity for a user." name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/3237612?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="caseyscarborough/github-activity" property="og:title" /><meta content="https://github.com/caseyscarborough/github-activity" property="og:url" /><meta content="github-activity - A widget for displaying GitHub activity for a user." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTk1MTgxMDM6MWYyMzA3NzQ1ODcxOWM5MTFiYzRlYjI3Yjg5ZjViMDk6MGIxZWZlOGVmMzAxYTI4NmU4OWY2NjY5MTk0MDg3MmI5MDA0MGEzNzAyMTRhMjE5NmZmYTgzZDQ4NDUyODg5NA==--da81eec1f73ebfb222c5ce63c3572cac3935e853">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="7AAFEF77:666A:CDD976C:5768E414" name="octolytics-dimension-request_id" /><meta content="19518103" name="octolytics-actor-id" /><meta content="Puneet1995" name="octolytics-actor-login" /><meta content="ac2b33fd7eb3e53a1dc5a05277cda69e2a11953debbeec9f4af1972155253c4b" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Puneet1995">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="Nzc5MDFjODdjZDczNjdiZTI2NzUxZTg3MjBiZDE2MDllNTAzN2VlMGJmODU4ZjE3NWQxYTkxMGYyYWQ0NjU2N3x7InJlbW90ZV9hZGRyZXNzIjoiMTIyLjE3NS4yMzkuMTE5IiwicmVxdWVzdF9pZCI6IjdBQUZFRjc3OjY2NkE6Q0REOTc2Qzo1NzY4RTQxNCIsInRpbWVzdGFtcCI6MTQ2NjQ5MTkyNn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="6a538ac0b0c8e61a846f2bc1087f5fbe1bef3a2a">
    <meta content="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="b466760c03426873ff9b6b5cc1735510">
    

      
  <meta name="description" content="github-activity - A widget for displaying GitHub activity for a user.">
  <meta name="go-import" content="github.com/caseyscarborough/github-activity git https://github.com/caseyscarborough/github-activity.git">

  <meta content="3237612" name="octolytics-dimension-user_id" /><meta content="caseyscarborough" name="octolytics-dimension-user_login" /><meta content="11777512" name="octolytics-dimension-repository_id" /><meta content="caseyscarborough/github-activity" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11777512" name="octolytics-dimension-repository_network_root_id" /><meta content="caseyscarborough/github-activity" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/caseyscarborough/github-activity/commits/master.atom" rel="alternate" title="Recent Commits to github-activity:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/caseyscarborough/github-activity/blob/master/src/github-activity.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/caseyscarborough/github-activity/search" class="js-site-search-form" data-scoped-search-url="/caseyscarborough/github-activity/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="caseyscarborough/github-activity">This repository</span>
  </div>
    <a class="dropdown-item" href="/caseyscarborough/github-activity/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Puneet1995"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Puneet1995" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/19518103?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">Puneet1995</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/Puneet1995" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ztt2ANMcYf5xOET3T2p2tLDY5pi0XzpPED8X8OkVn5ArZ64h2p4cMF9TiugaChuE1GD2NbhiRfsaI7b03wbe9Q==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BY2u3bTFuTL21PPq5dx3GTcpiMzkm8IvMLS1XqVxQNgCwk71HFpVPhI8ihVgAujjTOLvyWRtYpUOEisg4V6+3g==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="11777512" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/caseyscarborough/github-activity/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/caseyscarborough/github-activity/watchers">
            20
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/caseyscarborough/github-activity/unstar" class="starred" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NsQ69UgS+fWJR+R+pEU48prPSNNJPZWGm7DjzARvjgkt/KiuysI78/RbIBsukZznRJXuK5dhs2Gp/QngGlYW6w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar caseyscarborough/github-activity"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/caseyscarborough/github-activity/stargazers">
          149
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/caseyscarborough/github-activity/star" class="unstarred" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gA2Ae2omjDGnl4ohYClB2leMuVQu14Vcp7z5hpbw3ypoVBdb6Kdr4l3nylUG98TRFM2fddylRdf4MWEylpKsqQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star caseyscarborough/github-activity"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/caseyscarborough/github-activity/stargazers">
          149
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/caseyscarborough/github-activity/fork" class="btn-with-count" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UztkLJDSWAbDsWIszA6nJhvWRopvemdh3SGrGsiPb9ofg6TLiaSc8IRjYybLPS8LlIgwiCV/Nvk0JHCbUgeyQg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of caseyscarborough/github-activity to your account"
                aria-label="Fork your own copy of caseyscarborough/github-activity to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/caseyscarborough/github-activity/network" class="social-count">
      44
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/caseyscarborough" class="url fn" rel="author">caseyscarborough</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/caseyscarborough/github-activity" data-pjax="#js-repo-pjax-container">github-activity</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/caseyscarborough/github-activity" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /caseyscarborough/github-activity" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/caseyscarborough/github-activity/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /caseyscarborough/github-activity/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">4</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/caseyscarborough/github-activity/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /caseyscarborough/github-activity/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/caseyscarborough/github-activity/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /caseyscarborough/github-activity/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/caseyscarborough/github-activity/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /caseyscarborough/github-activity/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/caseyscarborough/github-activity/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /caseyscarborough/github-activity/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/caseyscarborough/github-activity/blob/2f0724b6375f18cb460b2592e23c9e1d68c624c5/src/github-activity.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:25f513fa829df962f0627c9bb1e107ee -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/caseyscarborough/github-activity/blob/gh-pages/src/github-activity.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/caseyscarborough/github-activity/blob/master/src/github-activity.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/caseyscarborough/github-activity/blob/rails/src/github-activity.js"
               data-name="rails"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="rails">
                rails
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/caseyscarborough/github-activity/tree/v0.1.4/src/github-activity.js"
              data-name="v0.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.4">
                v0.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/caseyscarborough/github-activity/tree/v0.1.3/src/github-activity.js"
              data-name="v0.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.3">
                v0.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/caseyscarborough/github-activity/tree/v0.1.2/src/github-activity.js"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/caseyscarborough/github-activity/tree/v0.1.1/src/github-activity.js"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/caseyscarborough/github-activity/tree/v0.1.0/src/github-activity.js"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/caseyscarborough/github-activity/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/caseyscarborough/github-activity"><span>github-activity</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/caseyscarborough/github-activity/tree/master/src"><span>src</span></a></span><span class="separator">/</span><strong class="final-path">github-activity.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/caseyscarborough/github-activity/commit/4766e067739ac8cecaa30f3021978fd4f84546f0" data-pjax>
          4766e06
        </a>
        <relative-time datetime="2016-03-07T00:07:06Z">Mar 6, 2016</relative-time>
      </span>
      <div>
        <img alt="@NateShoffner" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1712163?v=3&amp;s=40" width="20" />
        <a href="/NateShoffner" class="user-mention" rel="contributor">NateShoffner</a>
          <a href="/caseyscarborough/github-activity/commit/4766e067739ac8cecaa30f3021978fd4f84546f0" class="message" data-pjax="true" title="Made single-line activity styles consistent">Made single-line activity styles consistent</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>6</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="caseyscarborough" href="/caseyscarborough/github-activity/commits/master/src/github-activity.js?author=caseyscarborough"><img alt="@caseyscarborough" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3237612?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="raboof" href="/caseyscarborough/github-activity/commits/master/src/github-activity.js?author=raboof"><img alt="@raboof" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/131856?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mimopo" href="/caseyscarborough/github-activity/commits/master/src/github-activity.js?author=mimopo"><img alt="@mimopo" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2316771?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ephaee" href="/caseyscarborough/github-activity/commits/master/src/github-activity.js?author=ephaee"><img alt="@ephaee" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/5112286?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="NateShoffner" href="/caseyscarborough/github-activity/commits/master/src/github-activity.js?author=NateShoffner"><img alt="@NateShoffner" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1712163?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tldev" href="/caseyscarborough/github-activity/commits/master/src/github-activity.js?author=tldev"><img alt="@tldev" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/4693583?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@caseyscarborough" height="24" src="https://avatars0.githubusercontent.com/u/3237612?v=3&amp;s=48" width="24" />
            <a href="/caseyscarborough">caseyscarborough</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@raboof" height="24" src="https://avatars3.githubusercontent.com/u/131856?v=3&amp;s=48" width="24" />
            <a href="/raboof">raboof</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mimopo" height="24" src="https://avatars2.githubusercontent.com/u/2316771?v=3&amp;s=48" width="24" />
            <a href="/mimopo">mimopo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ephaee" height="24" src="https://avatars3.githubusercontent.com/u/5112286?v=3&amp;s=48" width="24" />
            <a href="/ephaee">ephaee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@NateShoffner" height="24" src="https://avatars0.githubusercontent.com/u/1712163?v=3&amp;s=48" width="24" />
            <a href="/NateShoffner">NateShoffner</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tldev" height="24" src="https://avatars0.githubusercontent.com/u/4693583?v=3&amp;s=48" width="24" />
            <a href="/tldev">tldev</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/caseyscarborough/github-activity/raw/master/src/github-activity.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/caseyscarborough/github-activity/blame/master/src/github-activity.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/caseyscarborough/github-activity/commits/master/src/github-activity.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/caseyscarborough/github-activity/edit/master/src/github-activity.js" class="inline-form js-update-url-with-hash" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jEKxx1HfaPWdLncSoUyjMcsHByqpeGquFiKJMS3x9SD6gw0E+fVjk5JOPg8zXQl48gbwDomkpdaG8yAegHifOw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/caseyscarborough/github-activity/delete/master/src/github-activity.js" class="inline-form" data-form-nonce="faf05a82fe65e6e2325a9ba980b14b17114a7d2e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lqbcmUcV1Ux4Az7YSwHexu2y+ykB9XdJpb5r3AuAO1fbHROQm4NnyzMcdPothfELXWHy5wEVQH8EF5hZIEry0Q==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      380 lines (333 sloc)
      <span class="file-info-divider"></span>
    19.5 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * GitHub Activity Stream - v0.1.4 - 10/7/2015</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * https://github.com/caseyscarborough/github-activity</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2015 Casey Scarborough</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * MIT License</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://opensource.org/licenses/MIT</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> GitHubActivity <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> obj <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> methods <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">renderLink</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>, <span class="pl-smi">title</span>, <span class="pl-smi">cssClass</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>title) { title <span class="pl-k">=</span> url; }</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(cssClass) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) cssClass <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> cssClass <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; href=&quot;{{url}}&quot; target=&quot;_blank&quot;&gt;{{{title}}}&lt;/a&gt;<span class="pl-pds">&#39;</span></span>, { url<span class="pl-k">:</span> url, title<span class="pl-k">:</span> title });</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">renderGitHubLink</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>, <span class="pl-smi">title</span>, <span class="pl-smi">cssClass</span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>title) { title <span class="pl-k">=</span> url; }</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(cssClass) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) cssClass <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>https://github.com/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> url, title, cssClass);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getMessageFor</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">payload</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">data</span>.<span class="pl-smi">repoLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">data</span>.<span class="pl-smi">userGravatar</span> <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-gravatar-user&quot;&gt;&lt;img src=&quot;{{url}}&quot; class=&quot;gha-gravatar-small&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>, { url<span class="pl-k">:</span> <span class="pl-smi">data</span>.<span class="pl-smi">actor</span>.<span class="pl-smi">avatar_url</span> });</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Get the branch name if it exists.</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">ref</span>) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">ref</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">11</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>refs/heads/<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">branch</span> <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">ref</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">11</span>);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">branch</span> <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">ref</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">branchLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/tree/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">data</span>.<span class="pl-smi">branch</span>, <span class="pl-smi">data</span>.<span class="pl-smi">branch</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> at <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Only show the first 6 characters of the SHA of each commit if given.</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">commits</span>) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> shaDiff <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">before</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>...<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-smi">head</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">commits</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (length <span class="pl-k">===</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// If there are 2 commits, show message &#39;View comparison for these 2 commits &gt;&gt;&#39;</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">commitsMessage</span> <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href=&quot;https://github.com/{{repo}}/compare/{{shaDiff}}&quot;&gt;View comparison for these 2 commits &amp;raquo;&lt;/a&gt;<span class="pl-pds">&#39;</span></span>, { repo<span class="pl-k">:</span> <span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span>, shaDiff<span class="pl-k">:</span> shaDiff });</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (length <span class="pl-k">&gt;</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// If there are more than two, show message &#39;(numberOfCommits - 2) more commits &gt;&gt;&#39;</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">commitsMessage</span> <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href=&quot;https://github.com/{{repo}}/compare/{{shaDiff}}&quot;&gt;{{length}} more <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">pluralize</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>commit<span class="pl-pds">&#39;</span></span>, length <span class="pl-k">-</span> <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> &amp;raquo;&lt;/a&gt;<span class="pl-pds">&#39;</span></span>, { repo<span class="pl-k">:</span> <span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span>, shaDiff<span class="pl-k">:</span> shaDiff, length<span class="pl-k">:</span> <span class="pl-smi">p</span>.<span class="pl-c1">size</span> <span class="pl-k">-</span> <span class="pl-c1">2</span> });</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">p</span>.<span class="pl-smi">commits</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">d</span>.<span class="pl-smi">message</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">66</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">d</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-smi">message</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">66</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>...<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (i <span class="pl-k">&lt;</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">d</span>.<span class="pl-smi">shaLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/commit/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-smi">sha</span>, <span class="pl-smi">d</span>.<span class="pl-smi">sha</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">6</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>gha-sha<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">d</span>.<span class="pl-smi">committerGravatar</span> <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img class=&quot;gha-gravatar-commit&quot; src=&quot;https://gravatar.com/avatar/{{hash}}?s=30&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&quot; width=&quot;16&quot; /&gt;<span class="pl-pds">&#39;</span></span>, { hash<span class="pl-k">:</span> <span class="pl-en">md5</span>(<span class="pl-smi">d</span>.<span class="pl-smi">author</span>.<span class="pl-smi">email</span>) });</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Delete the rest of the commits after the first 2, and then break out of the each loop.</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">p</span>.<span class="pl-smi">commits</span>.<span class="pl-c1">splice</span>(<span class="pl-c1">2</span>, <span class="pl-smi">p</span>.<span class="pl-c1">size</span>);</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Get the link if this is an IssueEvent.</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">issue</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> title <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-smi">issue</span>.<span class="pl-smi">number</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">issueLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">issue</span>.<span class="pl-smi">html_url</span>, title);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">issueType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>issue<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">issue</span>.<span class="pl-smi">pull_request</span>) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">issueType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>pull request<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Retrieve the pull request link if this is a PullRequestEvent.</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">pull_request</span>) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> pr <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">pull_request</span>;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">pullRequestLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">pr</span>.<span class="pl-smi">html_url</span>, <span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">pr</span>.<span class="pl-smi">number</span>);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">mergeMessage</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// If this was a merge, set the merge message.</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">pull_request</span>.<span class="pl-smi">merged</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">p</span>.<span class="pl-c1">action</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>merged<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> message <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{{c}} <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">pluralize</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>commit<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">pr</span>.<span class="pl-smi">commits</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> with {{a}} <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">pluralize</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addition<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">pr</span>.<span class="pl-smi">additions</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> and {{d}} <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">pluralize</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>deletion<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">pr</span>.<span class="pl-smi">deletions</span>);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">mergeMessage</span> <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;&lt;small class=&quot;gha-message-merge&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> message <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/small&gt;<span class="pl-pds">&#39;</span></span>, { c<span class="pl-k">:</span> <span class="pl-smi">pr</span>.<span class="pl-smi">commits</span>, a<span class="pl-k">:</span> <span class="pl-smi">pr</span>.<span class="pl-smi">additions</span>, d<span class="pl-k">:</span> <span class="pl-smi">pr</span>.<span class="pl-smi">deletions</span> });</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Get the link if this is a PullRequestReviewCommentEvent</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">comment</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">pull_request_url</span>) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> title <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">pull_request_url</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">pop</span>();</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">pullRequestLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">pull_request_url</span>, title);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Get the comment if one exists, and trim it to 150 characters.</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">comment</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-c1">body</span>) {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">comment</span> <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-c1">body</span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-smi">comment</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">150</span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">comment</span> <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">comment</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">150</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>...<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">html_url</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">commit_id</span>) {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> title <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">repo</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>@<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">commit_id</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">data</span>.<span class="pl-smi">commentLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">comment</span>.<span class="pl-smi">html_url</span>, title);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ReleaseEvent<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">tagLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">release</span>.<span class="pl-smi">html_url</span>, <span class="pl-smi">p</span>.<span class="pl-smi">release</span>.<span class="pl-smi">tag_name</span>);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">zipLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">release</span>.<span class="pl-smi">zipball_url</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Download Source Code (zip)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Wiki event</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>GollumEvent<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> page <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-smi">pages</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">actionType</span> <span class="pl-k">=</span> <span class="pl-smi">page</span>.<span class="pl-c1">action</span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">message</span> <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">actionType</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>).<span class="pl-c1">toUpperCase</span>() <span class="pl-k">+</span> <span class="pl-smi">data</span>.<span class="pl-smi">actionType</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">message</span> <span class="pl-k">+=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">page</span>.<span class="pl-smi">html_url</span>, <span class="pl-smi">page</span>.<span class="pl-c1">title</span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>FollowEvent<span class="pl-pds">&#39;</span></span>) <span class="pl-smi">data</span>.<span class="pl-smi">targetLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">p</span>.<span class="pl-c1">target</span>.<span class="pl-smi">login</span>);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ForkEvent<span class="pl-pds">&#39;</span></span>)   <span class="pl-smi">data</span>.<span class="pl-smi">forkLink</span>   <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">forkee</span>.<span class="pl-smi">full_name</span>);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>MemberEvent<span class="pl-pds">&#39;</span></span>) <span class="pl-smi">data</span>.<span class="pl-smi">memberLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">member</span>.<span class="pl-smi">login</span>);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">p</span>.<span class="pl-smi">gist</span>) {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">actionType</span> <span class="pl-k">=</span> <span class="pl-smi">p</span>.<span class="pl-c1">action</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fork<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-smi">p</span>.<span class="pl-c1">action</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ed<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-smi">p</span>.<span class="pl-c1">action</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">gistLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">p</span>.<span class="pl-smi">gist</span>.<span class="pl-smi">html_url</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>gist: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-smi">gist</span>.<span class="pl-c1">id</span>);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> message <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(templates[<span class="pl-smi">data</span>.<span class="pl-c1">type</span>], data);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> timeString <span class="pl-k">=</span> <span class="pl-en">millisecondsToStr</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>() <span class="pl-k">-</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-smi">data</span>.<span class="pl-smi">created_at</span>));</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> icon;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>CreateEvent<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> ([<span class="pl-s"><span class="pl-pds">&#39;</span>repository<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>branch<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>tag<span class="pl-pds">&#39;</span></span>].<span class="pl-c1">indexOf</span>(<span class="pl-smi">p</span>.<span class="pl-smi">ref_type</span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Display separate icons depending on type of create event.</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        icon <span class="pl-k">=</span> icons[<span class="pl-smi">data</span>.<span class="pl-c1">type</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-smi">ref_type</span>];</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        icon <span class="pl-k">=</span> icons[<span class="pl-smi">data</span>.<span class="pl-c1">type</span>]</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> activity <span class="pl-k">=</span> { message<span class="pl-k">:</span> message, icon<span class="pl-k">:</span> icon, timeString<span class="pl-k">:</span> timeString, userLink<span class="pl-k">:</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderGitHubLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">actor</span>.<span class="pl-smi">login</span>) };</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">singleLineActivities</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">data</span>.<span class="pl-c1">type</span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">SingleLineActivity</span>, activity);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">Activity</span>, activity);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getHeaderHTML</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-c1">name</span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">userNameLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">html_url</span>, <span class="pl-smi">data</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">data</span>.<span class="pl-smi">withoutName</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> without-name<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">data</span>.<span class="pl-smi">userLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">html_url</span>, <span class="pl-smi">data</span>.<span class="pl-smi">login</span>);</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">data</span>.<span class="pl-smi">gravatarLink</span> <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">renderLink</span>(<span class="pl-smi">data</span>.<span class="pl-smi">html_url</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img src=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">data</span>.<span class="pl-smi">avatar_url</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">UserHeader</span>, data);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getActivityHTML</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>, <span class="pl-smi">limit</span>) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> text <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> dataLength <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (limit <span class="pl-k">&amp;&amp;</span> limit <span class="pl-k">&gt;</span> dataLength) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">          limit <span class="pl-k">=</span> dataLength;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">      limit <span class="pl-k">=</span> limit <span class="pl-k">?</span> limit <span class="pl-k">:</span> dataLength;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (limit <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">NoActivity</span>, {});</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> limit; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        text <span class="pl-k">+=</span> <span class="pl-smi">methods</span>.<span class="pl-en">getMessageFor</span>(data[i]);</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> text;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getOutputFromRequest</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> request <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">request</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>GET<span class="pl-pds">&#39;</span></span>, url);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">request</span>.<span class="pl-c1">setRequestHeader</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Accept<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>application/vnd.github.v3+json<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">request</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">request</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-c1">4</span>) {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">request</span>.<span class="pl-c1">status</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">200</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">request</span>.<span class="pl-c1">status</span> <span class="pl-k">&lt;</span> <span class="pl-c1">300</span>){</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">request</span>.<span class="pl-smi">responseText</span>);</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">callback</span>(<span class="pl-c1">undefined</span>, data);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">callback</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>request for <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> url <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> yielded status <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">request</span>.<span class="pl-c1">status</span>);</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">request</span>.<span class="pl-en">onerror</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-en">callback</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>An error occurred connecting to <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> url); };</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">request</span>.<span class="pl-c1">send</span>();</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">renderStream</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">output</span>, <span class="pl-smi">div</span>) {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">div</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">Stream</span>, { text<span class="pl-k">:</span> output, footer<span class="pl-k">:</span> <span class="pl-smi">templates</span>.<span class="pl-smi">Footer</span> });</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">div</span>.<span class="pl-c1">style</span>.<span class="pl-smi">position</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>relative<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">writeOutput</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">selector</span>, <span class="pl-smi">content</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selector</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-smi">selector</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>)) <span class="pl-k">:</span> <span class="pl-c1">document</span>.<span class="pl-en">getElementsByClassName</span>(<span class="pl-smi">selector</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (div <span class="pl-k">instanceof</span> HTMLCollection) {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">div</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">methods</span>.<span class="pl-en">renderStream</span>(content, div[i]);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">methods</span>.<span class="pl-en">renderStream</span>(content, div);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">renderIfReady</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">selector</span>, <span class="pl-smi">header</span>, <span class="pl-smi">activity</span>) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (header <span class="pl-k">&amp;&amp;</span> activity) {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">methods</span>.<span class="pl-en">writeOutput</span>(selector, header <span class="pl-k">+</span> activity);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">obj</span>.<span class="pl-en">feed</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">options</span>.<span class="pl-smi">username</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">options</span>.<span class="pl-smi">selector</span>) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>You must specify the username and selector options for the activity stream.<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> selector <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">selector</span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        userUrl   <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://api.github.com/users/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-smi">username</span>,</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        eventsUrl <span class="pl-k">=</span> userUrl <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/events<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">        header,</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        activity;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!!</span><span class="pl-smi">options</span>.<span class="pl-smi">repository</span>){</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">      eventsUrl <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://api.github.com/repos/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-smi">username</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-smi">repository</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/events<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">clientId</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">options</span>.<span class="pl-smi">clientSecret</span>) {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> authString <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?client_id=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-smi">clientId</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;client_secret=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-smi">clientSecret</span>;</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">      userUrl   <span class="pl-k">+=</span> authString;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">      eventsUrl <span class="pl-k">+=</span> authString;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!!</span><span class="pl-smi">options</span>.<span class="pl-smi">eventsUrl</span>){</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">      eventsUrl <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">eventsUrl</span>;</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Allow templates override</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">options</span>.<span class="pl-smi">templates</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> template <span class="pl-k">in</span> templates) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">options</span>.<span class="pl-smi">templates</span>[template] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">          templates[template] <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">templates</span>[template];</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">methods</span>.<span class="pl-en">getOutputFromRequest</span>(userUrl, <span class="pl-k">function</span>(<span class="pl-smi">error</span>, <span class="pl-smi">output</span>) {</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (error) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">        header <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">UserNotFound</span>, { username<span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">username</span> });</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        header <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">getHeaderHTML</span>(output)</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">methods</span>.<span class="pl-en">renderIfReady</span>(selector, header, activity)</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">methods</span>.<span class="pl-en">getOutputFromRequest</span>(eventsUrl, <span class="pl-k">function</span>(<span class="pl-smi">error</span>, <span class="pl-smi">output</span>) {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (error) {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">        activity <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-smi">templates</span>.<span class="pl-smi">EventsNotFound</span>, { username<span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">username</span> });</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> limit <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">limit</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">options</span>.<span class="pl-smi">limit</span>, <span class="pl-c1">10</span>) <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">        activity <span class="pl-k">=</span> <span class="pl-smi">methods</span>.<span class="pl-en">getActivityHTML</span>(output, limit);</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">methods</span>.<span class="pl-en">renderIfReady</span>(selector, header, activity);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">}());</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Takes in milliseconds and converts it to a human readable time,</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// such as &#39;about 3 hours ago&#39; or &#39;23 days ago&#39;</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">millisecondsToStr</span>(<span class="pl-smi">milliseconds</span>) {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">numberEnding</span>(<span class="pl-smi">number</span>) {</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (number <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s ago<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> ago<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> temp <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(milliseconds <span class="pl-k">/</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> years <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(temp <span class="pl-k">/</span> <span class="pl-c1">31536000</span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (years) <span class="pl-k">return</span> years <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> year<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">numberEnding</span>(years);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> months <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>((temp <span class="pl-k">%=</span> <span class="pl-c1">31536000</span>) <span class="pl-k">/</span> <span class="pl-c1">2592000</span>);</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (months) <span class="pl-k">return</span> months <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> month<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">numberEnding</span>(months);</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> days <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>((temp <span class="pl-k">%=</span> <span class="pl-c1">2592000</span>) <span class="pl-k">/</span> <span class="pl-c1">86400</span>);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (days) <span class="pl-k">return</span> days <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> day<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">numberEnding</span>(days);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> hours <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>((temp <span class="pl-k">%=</span> <span class="pl-c1">86400</span>) <span class="pl-k">/</span> <span class="pl-c1">3600</span>);</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (hours) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>about <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> hours <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> hour<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">numberEnding</span>(hours);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> minutes <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>((temp <span class="pl-k">%=</span> <span class="pl-c1">3600</span>) <span class="pl-k">/</span> <span class="pl-c1">60</span>);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (minutes) <span class="pl-k">return</span> minutes <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> minute<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">numberEnding</span>(minutes);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> seconds <span class="pl-k">=</span> temp <span class="pl-k">%</span> <span class="pl-c1">60</span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (seconds) <span class="pl-k">return</span> seconds <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> second<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">numberEnding</span>(seconds);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>just now<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Pluralizes a word, but only works when the word requires</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// an &#39;s&#39; to be added for pluralization.</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">pluralize</span>(<span class="pl-smi">word</span>, <span class="pl-smi">number</span>) {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// Yeah I know, this sucks.</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (number <span class="pl-k">!==</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span> word <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> word;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** MD5 methods written by Joseph Myers. http://www.myersdaily.org/joseph/javascript/md5-text.html */</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">function md5cycle(f,h){var g=f[0],e=f[1],j=f[2],i=f[3];g=ff(g,e,j,i,h[0],7,-680876936);i=ff(i,g,e,j,h[1],12,-389564586);j=ff(j,i,g,e,h[2],17,606105819);e=ff(e,j,i,g,h[3],22,-1044525330);g=ff(g,e,j,i,h[4],7,-176418897);i=ff(i,g,e,j,h[5],12,1200080426);j=ff(j,i,g,e,h[6],17,-1473231341);e=ff(e,j,i,g,h[7],22,-45705983);g=ff(g,e,j,i,h[8],7,1770035416);i=ff(i,g,e,j,h[9],12,-1958414417);j=ff(j,i,g,e,h[10],17,-42063);e=ff(e,j,i,g,h[11],22,-1990404162);g=ff(g,e,j,i,h[12],7,1804603682);i=ff(i,g,e,j,h[13],12,-40341101);j=ff(j,i,g,e,h[14],17,-1502002290);e=ff(e,j,i,g,h[15],22,1236535329);g=gg(g,e,j,i,h[1],5,-165796510);i=gg(i,g,e,j,h[6],9,-1069501632);j=gg(j,i,g,e,h[11],14,643717713);e=gg(e,j,i,g,h[0],20,-373897302);g=gg(g,e,j,i,h[5],5,-701558691);i=gg(i,g,e,j,h[10],9,38016083);j=gg(j,i,g,e,h[15],14,-660478335);e=gg(e,j,i,g,h[4],20,-405537848);g=gg(g,e,j,i,h[9],5,568446438);i=gg(i,g,e,j,h[14],9,-1019803690);j=gg(j,i,g,e,h[3],14,-187363961);e=gg(e,j,i,g,h[8],20,1163531501);g=gg(g,e,j,i,h[13],5,-1444681467);i=gg(i,g,e,j,h[2],9,-51403784);j=gg(j,i,g,e,h[7],14,1735328473);e=gg(e,j,i,g,h[12],20,-1926607734);g=hh(g,e,j,i,h[5],4,-378558);i=hh(i,g,e,j,h[8],11,-2022574463);j=hh(j,i,g,e,h[11],16,1839030562);e=hh(e,j,i,g,h[14],23,-35309556);g=hh(g,e,j,i,h[1],4,-1530992060);i=hh(i,g,e,j,h[4],11,1272893353);j=hh(j,i,g,e,h[7],16,-155497632);e=hh(e,j,i,g,h[10],23,-1094730640);g=hh(g,e,j,i,h[13],4,681279174);i=hh(i,g,e,j,h[0],11,-358537222);j=hh(j,i,g,e,h[3],16,-722521979);e=hh(e,j,i,g,h[6],23,76029189);g=hh(g,e,j,i,h[9],4,-640364487);i=hh(i,g,e,j,h[12],11,-421815835);j=hh(j,i,g,e,h[15],16,530742520);e=hh(e,j,i,g,h[2],23,-995338651);g=ii(g,e,j,i,h[0],6,-198630844);i=ii(i,g,e,j,h[7],10,1126891415);j=ii(j,i,g,e,h[14],15,-1416354905);e=ii(e,j,i,g,h[5],21,-57434055);g=ii(g,e,j,i,h[12],6,1700485571);i=ii(i,g,e,j,h[3],10,-1894986606);j=ii(j,i,g,e,h[10],15,-1051523);e=ii(e,j,i,g,h[1],21,-2054922799);g=ii(g,e,j,i,h[8],6,1873313359);i=ii(i,g,e,j,h[15],10,-30611744);j=ii(j,i,g,e,h[6],15,-1560198380);e=ii(e,j,i,g,h[13],21,1309151649);g=ii(g,e,j,i,h[4],6,-145523070);i=ii(i,g,e,j,h[11],10,-1120210379);j=ii(j,i,g,e,h[2],15,718787259);e=ii(e,j,i,g,h[9],21,-343485551);f[0]=add32(g,f[0]);f[1]=add32(e,f[1]);f[2]=add32(j,f[2]);f[3]=add32(i,f[3])}function cmn(h,e,d,c,g,f){e=add32(add32(e,h),add32(c,f));return add32((e&lt;&lt;g)|(e&gt;&gt;&gt;(32-g)),d)}function ff(g,f,k,j,e,i,h){return cmn((f&amp;k)|((~f)&amp;j),g,f,e,i,h)}function gg(g,f,k,j,e,i,h){return cmn((f&amp;j)|(k&amp;(~j)),g,f,e,i,h)}function hh(g,f,k,j,e,i,h){return cmn(f^k^j,g,f,e,i,h)}function ii(g,f,k,j,e,i,h){return cmn(k^(f|(~j)),g,f,e,i,h)}function md51(c){txt=&quot;&quot;;var e=c.length,d=[1732584193,-271733879,-1732584194,271733878],b;for(b=64;b&lt;=c.length;b+=64){md5cycle(d,md5blk(c.substring(b-64,b)))}c=c.substring(b-64);var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(b=0;b&lt;c.length;b++){a[b&gt;&gt;2]|=c.charCodeAt(b)&lt;&lt;((b%4)&lt;&lt;3)}a[b&gt;&gt;2]|=128&lt;&lt;((b%4)&lt;&lt;3);if(b&gt;55){md5cycle(d,a);for(b=0;b&lt;16;b++){a[b]=0}}a[14]=e*8;md5cycle(d,a);return d}function md5blk(b){var c=[],a;for(a=0;a&lt;64;a+=4){c[a&gt;&gt;2]=b.charCodeAt(a)+(b.charCodeAt(a+1)&lt;&lt;8)+(b.charCodeAt(a+2)&lt;&lt;16)+(b.charCodeAt(a+3)&lt;&lt;24)}return c}var hex_chr=&quot;0123456789abcdef&quot;.split(&quot;&quot;);function rhex(c){var b=&quot;&quot;,a=0;for(;a&lt;4;a++){b+=hex_chr[(c&gt;&gt;(a*8+4))&amp;15]+hex_chr[(c&gt;&gt;(a*8))&amp;15]}return b}function hex(a){for(var b=0;b&lt;a.length;b++){a[b]=rhex(a[b])}return a.join(&quot;&quot;)}function md5(a){return hex(md51(a))}function add32(d,c){return(d+c)&amp;4294967295}if(md5(&quot;hello&quot;)!=&quot;5d41402abc4b2a76b9719d911017c592&quot;){function add32(a,d){var c=(a&amp;65535)+(d&amp;65535),b=(a&gt;&gt;16)+(d&gt;&gt;16)+(c&gt;&gt;16);return(b&lt;&lt;16)|(c&amp;65535)}};</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> templates <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">  Stream<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-feed&quot;&gt;{{{text}}}&lt;div class=&quot;gha-push-small&quot;&gt;&lt;/div&gt;{{{footer}}}&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">  Activity<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div id=&quot;{{id}}&quot; class=&quot;gha-activity&quot;&gt;\</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line"><span class="pl-s">               &lt;div class=&quot;gha-activity-icon&quot;&gt;&lt;span class=&quot;octicon octicon-{{icon}}&quot;&gt;&lt;/span&gt;&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line"><span class="pl-s">               &lt;div class=&quot;gha-message&quot;&gt;&lt;div class=&quot;gha-time&quot;&gt;{{{timeString}}}&lt;/div&gt;{{{userLink}}} {{{message}}}&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line"><span class="pl-s">               &lt;div class=&quot;gha-clear&quot;&gt;&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line"><span class="pl-s">             &lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">  SingleLineActivity<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-activity gha-small&quot;&gt;\</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                         &lt;div class=&quot;gha-activity-icon&quot;&gt;&lt;span class=&quot;octicon octicon-{{icon}}&quot;&gt;&lt;/span&gt;&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                         &lt;div class=&quot;gha-message&quot;&gt;&lt;div class=&quot;gha-time&quot;&gt;{{{timeString}}}&lt;/div&gt;{{{userLink}}} {{{message}}}&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                         &lt;div class=&quot;gha-clear&quot;&gt;&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                       &lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">  UserHeader<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-header&quot;&gt;\</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                 &lt;div class=&quot;gha-github-icon&quot;&gt;&lt;span class=&quot;octicon octicon-mark-github&quot;&gt;&lt;/span&gt;&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                 &lt;div class=&quot;gha-user-info{{withoutName}}&quot;&gt;{{{userNameLink}}}&lt;p&gt;{{{userLink}}}&lt;/p&gt;&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                 &lt;div class=&quot;gha-gravatar&quot;&gt;{{{gravatarLink}}}&lt;/div&gt;\</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line"><span class="pl-s">               &lt;/div&gt;&lt;div class=&quot;gha-push&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">  Footer<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-footer&quot;&gt;Public Activity &lt;a href=&quot;https://github.com/caseyscarborough/github-activity&quot; target=&quot;_blank&quot;&gt;GitHub Activity Stream&lt;/a&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">  NoActivity<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-info&quot;&gt;This user does not have any public activity yet.&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">  UserNotFound<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-info&quot;&gt;User {{username}} wasn<span class="pl-cce">\&#39;</span>t found.&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">  EventsNotFound<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;gha-info&quot;&gt;Events for user {{username}} not found.&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">  CommitCommentEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>commented on commit {{{commentLink}}}&lt;br&gt;{{{userGravatar}}}&lt;small&gt;{{comment}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">  CreateEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>created {{payload.ref_type}} {{{branchLink}}}{{{repoLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">  DeleteEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>deleted {{payload.ref_type}} {{payload.ref}} at {{{repoLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">  FollowEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>started following {{{targetLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">  ForkEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>forked {{{repoLink}}} to {{{forkLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">  GistEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{{actionType}} {{{gistLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">  GollumEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{{actionType}} the {{{repoLink}}} wiki&lt;br&gt;{{{userGravatar}}}&lt;small&gt;{{{message}}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">  IssueCommentEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>commented on {{issueType}} {{{issueLink}}}&lt;br&gt;{{{userGravatar}}}&lt;small&gt;{{comment}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">  IssuesEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{{payload.action}} issue {{{issueLink}}}&lt;br&gt;{{{userGravatar}}}&lt;small&gt;{{payload.issue.title}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">  MemberEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>added {{{memberLink}}} to {{{repoLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">  PublicEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>open sourced {{{repoLink}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">  PullRequestEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{{payload.action}} pull request {{{pullRequestLink}}}&lt;br&gt;{{{userGravatar}}}&lt;small&gt;{{payload.pull_request.title}}&lt;/small&gt;{{{mergeMessage}}}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">  PullRequestReviewCommentEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>commented on pull request {{{pullRequestLink}}}&lt;br&gt;{{{userGravatar}}}&lt;small&gt;{{comment}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">  PushEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pushed to {{{branchLink}}}{{{repoLink}}}&lt;br&gt;\</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;ul class=&quot;gha-commits&quot;&gt;{{#payload.commits}}&lt;li&gt;&lt;small&gt;{{{committerGravatar}}} {{{shaLink}}} {{message}}&lt;/small&gt;&lt;/li&gt;{{/payload.commits}}&lt;/ul&gt;\</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;small class=&quot;gha-message-commits&quot;&gt;{{{commitsMessage}}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">  ReleaseEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>released {{{tagLink}}} at {{{repoLink}}}&lt;br&gt;{{{userGravatar}}}&lt;small&gt;&lt;span class=&quot;octicon octicon-cloud-download&quot;&gt;&lt;/span&gt;  {{{zipLink}}}&lt;/small&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">  WatchEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>starred {{{repoLink}}}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">},</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">icons <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">  CommitCommentEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>comment-discussion<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">  CreateEvent_repository<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>repo-create<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">  CreateEvent_tag<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tag-add<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">  CreateEvent_branch<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>git-branch-create<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">  DeleteEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>repo-delete<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">  FollowEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>person-follow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">  ForkEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>repo-forked<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">  GistEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>gist<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">  GollumEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>repo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">  IssuesEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>issue-opened<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">  IssueCommentEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>comment-discussion<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">  MemberEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>person<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">  PublicEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>globe<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">  PullRequestEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>git-pull-request<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">  PullRequestReviewCommentEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>comment-discussion<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">  PushEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>git-commit<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">  ReleaseEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tag-add<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">  WatchEvent<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>star<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">},</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">singleLineActivities <span class="pl-k">=</span> [ <span class="pl-s"><span class="pl-pds">&#39;</span>CreateEvent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>DeleteEvent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>FollowEvent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>ForkEvent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>GistEvent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>MemberEvent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>WatchEvent<span class="pl-pds">&#39;</span></span> ];</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.25322s from github-fe164-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-dS1nK3XdNSgDnqFOeNVji5Em7rfeOHAfRgkYYsY9c9o=" src="https://assets-cdn.github.com/assets/frameworks-752d672b75dd3528039ea14e78d5638b9126eeb7de38701f46091862c63d73da.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-umpJpbcqO3GvtTlKsRoLGk0VzbWHeHkAC/G8oQwZ4xA=" src="https://assets-cdn.github.com/assets/github-ba6a49a5b72a3b71afb5394ab11a0b1a4d15cdb5877879000bf1bca10c19e310.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

