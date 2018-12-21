<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand" href="#">
              <iframe id="twitter-widget-1" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" style="position: static; visibility: visible; width: 60px; height: 20px;" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.0568ee90c37ccf52b40a4b1e312811ff.en.html#dnt=true&amp;id=twitter-widget-1&amp;lang=en&amp;original_referer=https%3A%2F%2Fswapi.co%2Fdocumentation&amp;related=phalt_&amp;size=m&amp;text=SWAPI%20-%20the%20Star%20Wars%20API%20&amp;time=1544366403848&amp;type=share&amp;url=https%3A%2F%2Fswapi.co&amp;via=phalt_" data-url="https://swapi.co"></iframe>
          </div>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
                <li>
                  <router-link to="/" class="button">
                    <span>Home</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/about" class="button">
                    <span>About</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/documentation" class="button">
                    <span>Documentation</span>
                  </router-link>
                </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <div class="container-fluid" style="margin-top: 60px; padding-left: 15px;padding-right: 15px;">
      <div class="row center yellow">
        <div class="jumbotron">
            <h1>SWAPI</h1>
            <p class="lead">The Star Wars API</p>
        </div>
      </div>

      <router-view></router-view>

      <div class="row">
          <div class="col-lg-12 footer">
            <a href="//phalt.co?ref=swapi" target="_blank">&copy; Paul Hallett</a>
            <span class="pull-right">
              <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 63px; height: 20px;" title="Twitter Follow Button" src="https://platform.twitter.com/widgets/follow_button.0568ee90c37ccf52b40a4b1e312811ff.en.html#dnt=true&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=phalt_&amp;show_count=false&amp;show_screen_name=false&amp;size=m&amp;time=1544367043509" data-screen-name="phalt_"></iframe>
              <iframe src="//ghbtns.com/github-btn.html?user=phalt&type=follow" allowtransparency="false" frameborder="0" scrolling="0" width="132" height="20">
              </iframe>
            </span>
          </div>
      </div>
    </div>

  </div>


</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
