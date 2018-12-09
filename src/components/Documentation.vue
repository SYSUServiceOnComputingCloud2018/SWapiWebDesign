<template>
  <div class="row">
    <div class="col-sm-3 col-md-3">
      <h5>Getting started</h5>
      <ul class="list-group">
        <li class="list-group-item">
          <a href="#intro">Introduction</a>
        </li>
        <li class="list-group-item">
          <a href="#start">Getting started</a>
        </li>
        <li class="list-group-item">
          <a href="#base">Base URL</a>
        </li>
        <li class="list-group-item">
          <a href="#rate">Rate limiting</a>
        </li>
        <li class="list-group-item">
          <a href="#auth">Authentication</a>
        </li>
        <li class="list-group-item">
          <a href="#schema">JSON Schema</a>
        </li>
        <li class="list-group-item">
          <a href="#search">Searching</a>
        </li>
      </ul>
      <h5>Encodings</h5>
      <ul class="list-group">
        <li class="list-group-item">
          <a href="#json">JSON</a>
        </li>
        <li class="list-group-item">
          <a href="#wookiee">Wookiee</a>
        </li>
      </ul>
      <h5>Resources</h5>
      <ul class="list-group">
        <li class="list-group-item">
          <a href="#root">Root</a>
        </li>
        <li class="list-group-item">
          <a href="#people">People</a>
        </li>
        <li class="list-group-item">
          <a href="#films">Films</a>
        </li>
        <li class="list-group-item">
          <a href="#starships">Starships</a>
        </li>
        <li class="list-group-item">
          <a href="#vehicles">Vehicles</a>
        </li>
        <li class="list-group-item">
          <a href="#species">Species</a>
        </li>
        <li class="list-group-item">
          <a href="#planets">Planets</a>
        </li>
      </ul>
      <h5>Helper libraries</h5>
      <ul class="list-group">
        <li class="list-group-item">
          <a href="#python">Python</a>
        </li>
        <li class="list-group-item">
          <a href="#javascript">Javascript</a>
        </li>
        <li class="list-group-item">
          <a href="#android">Android</a>
        </li>
        <li class="list-group-item">
          <a href="#java">Java</a>
        </li>
        <li class="list-group-item">
          <a href="#golang">Go</a>
        </li>
        <li class="list-group-item">
          <a href="#ruby">Ruby</a>
        </li>
        <li class="list-group-item">
          <a href="#csharp">C#</a>
        </li>
        <li class="list-group-item">
          <a href="#objc">Objective C</a>
        </li>
        <li class="list-group-item">
          <a href="#angular">Angular</a>
        </li>
        <li class="list-group-item">
          <a href="#angular2">Angular 2</a>
        </li>
        <li class="list-group-item">
          <a href="#r">R</a>
        </li>
        <li class="list-group-item">
          <a href="#fsharp">F#</a>
        </li>
        <li class="list-group-item">
          <a href="#elixir">Elixir</a>
        </li>
      </ul>
    </div>
    <div class="col-md-9 col-sm-9">
      <h1>Documentation</h1>
      <hr>
      <p>
        <a name="intro"></a>
      </p>
      <h3>Introduction</h3>
      <p>Welcome to the swapi, the Star Wars API! This documentation should help you familiarise yourself with the resources available and how to consume them with HTTP requests. If you're after a native helper library then I suggest you scroll down and check out what's available. Read through the getting started section before you dive in. Most of your problems should be solved just by reading through it.</p>
      <p>
        <a name="start"></a>
      </p>
      <h3>Getting started</h3>
      <p>Let's make our first API request to the Star Wars API!</p>
      <p>Open up a terminal and use
        <a href="http://curl.haxx.se">curl</a> or
        <a href="http://httpie.org">httpie</a> to make an API request for a resource. In the example below, we're trying to get the first planet, Tatooine:
      </p>
      <pre><code>http swapi.co/api/planets/1/
</code></pre>
      <p>We'll use
        <a href="http://httpie.org">httpie</a> for our examples as it displays responses nicely and gives us a whole lot more useful information. If you don't want to download httpie, just use the
        <em>curl</em> command instead.
      </p>
      <p>Here is the response we get:</p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json
{
    "climate": "Arid",
    "diameter": "10465",
    "gravity": "1 standard",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "200000",
    "residents": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        ...
    ],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "Dessert",
    "url": "https://swapi.co/api/planets/1/"
}
</code></pre>
      <p>If your response looks slightly different don't panic. This is probably because more data has been added to swapi since we made this documentation.</p>
      <p>
        <a name="base"></a>
      </p>
      <h3>Base URL</h3>
      <p>The
        <strong>Base URL</strong> is the root URL for all of the API, if you ever make a request to swapi and you get back a
        <strong>404 NOT FOUND</strong> response then check the Base URL first.
      </p>
      <p>The Base URL for swapi is:</p>
      <pre><code>https://swapi.co/api/
</code></pre>
      <p>The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.</p>
      <p>
        <a name="rate"></a>
      </p>
      <h3>Rate limiting</h3>
      <p>Swapi has rate limiting to prevent malicious abuse (as if anyone would abuse Star Wars data!) and to make sure our service can handle a potentially large amount of traffic. Rate limiting is done via IP address and is currently limited to 10,000 API request per day. This is enough to request all the data on the website at least ten times over. There should be no reason for hitting the rate limit.</p>
      <p>
        <a name="auth"></a>
      </p>
      <h3>Authentication</h3>
      <p>Swapi is a
        <strong>completely open API</strong>. No authentication is required to query and get data. This also means that we've limited what you can do to just
        <strong>GET</strong>-ing the data. If you find a mistake in the data, then
        <a href="https://twitter.com/phalt_">tweet the author</a> or
        <a href="mailto:paulandrewhallett@gmail.com">email him</a>.
      </p>
      <p>
        <a name="schema"></a>
      </p>
      <h3>JSON Schema</h3>
      <p>All resources support
        <a href="https://jsonschema.net">JSON Schema</a>. Making a request to
        <code>/api/&lt;resource&gt;/schema</code> will give you the details of that resource. This will allow you to programmatically inspect the attributes of that resource and their types.
      </p>
      <p>
        <a name="search"></a>
      </p>
      <h3>Searching</h3>
      <p>All resources support a
        <code>search</code> parameter that filters the set of resources returned. This allows you to make queries like:
      </p>
      <p>
        <code>https://swapi.co/api/people/?search=r2</code>
      </p>
      <p>All searches will use case-insensitive partial matches on the set of search fields. To see the set of search fields for each resource, check out the individual resource documentation. For more information on advanced search terms see
        <a href="http://www.django-rest-framework.org/api-guide/filtering/#searchfilter">here</a>.
      </p>
      <h1>Encodings</h1>
      <hr>
      <p>SWAPI provides two encodings for you to render the data with:</p>
      <p>
        <a name="json"></a>
      </p>
      <h3>JSON</h3>
      <p>JSON is the standard data format provided by SWAPI by default.</p>
      <p>
        <a name="wookiee"></a>
      </p>
      <h3>Wookiee</h3>
      <p>Wookiee is for our tall hairy allies who speak Wookiee, this encoding is identical to JSON except with wookiee translations.</p>
      <p>Using the wookiee renderer is easy, just append
        <code>?format=wookiee</code> to your urls:
      </p>
      <p>
        <code>https://swapi.co/api/planets/1/?format=wookiee</code>
      </p>
      <h1>Resources</h1>
      <hr>
      <p>
        <a name="root"></a>
      </p>
      <h3>Root</h3>
      <p>The Root resource provides information on all available resources within the API.</p>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json
{
    "films": "https://swapi.co/api/films/",
    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "species": "https://swapi.co/api/species/",
    "starships": "https://swapi.co/api/starships/",
    "vehicles": "https://swapi.co/api/vehicles/"
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>films</code>
          <em>string</em>
          -- The URL root for Film resources
        </li>
        <li>
          <code>people</code>
          <em>string</em>
          -- The URL root for People resources
        </li>
        <li>
          <code>planets</code>
          <em>string</em>
          -- The URL root for Planet resources
        </li>
        <li>
          <code>species</code>
          <em>string</em>
          -- The URL root for Species resources
        </li>
        <li>
          <code>starships</code>
          <em>string</em>
          -- The URL root for Starships resources
        </li>
        <li>
          <code>vehicles</code>
          <em>string</em>
          -- The URL root for Vehicles resources
        </li>
      </ul>
      <hr>
      <p>
        <a name="people"></a>
      </p>
      <h3>People</h3>
      <p>A People resource is an individual person or character within the Star Wars universe.</p>
      <p>
        <strong>Endpoints</strong>
      </p>
      <ul>
        <li>
          <code>/people/</code> -- get all the people resources
        </li>
        <li>
          <code>/people/:id/</code> -- get a specific people resource
        </li>
        <li>
          <code>/people/schema/</code> -- view the JSON schema for this resource
        </li>
      </ul>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/people/1/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "https://swapi.co/api/films/1/",
        ...
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.co/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        ...
    ],
    "url": "https://swapi.co/api/people/1/",
    "vehicles": [
        "https://swapi.co/api/vehicles/14/"
        ...
    ]
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
          <em>string</em>
          -- The name of this person.
        </li>
        <li>
          <code>birth_year</code>
          <em>string</em>
          -- The birth year of the person, using the in-universe standard of
          <strong>BBY</strong> or
          <strong>ABY</strong> - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
        </li>
        <li>
          <code>eye_color</code>
          <em>string</em>
          -- The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
        </li>
        <li>
          <code>gender</code>
          <em>string</em>
          -- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
        </li>
        <li>
          <code>hair_color</code>
          <em>string</em>
          -- The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
        </li>
        <li>
          <code>height</code>
          <em>string</em>
          -- The height of the person in centimeters.
        </li>
        <li>
          <code>mass</code>
          <em>string</em>
          -- The mass of the person in kilograms.
        </li>
        <li>
          <code>skin_color</code>
          <em>string</em>
          -- The skin color of this person.
        </li>
        <li>
          <code>homeworld</code>
          <em>string</em>
          -- The URL of a planet resource, a planet that this person was born on or inhabits.
        </li>
        <li>
          <code>films</code>
          <em>array</em>
          -- An array of film resource URLs that this person has been in.
        </li>
        <li>
          <code>species</code>
          <em>array</em>
          -- An array of species resource URLs that this person belongs to.
        </li>
        <li>
          <code>starships</code>
          <em>array</em>
          -- An array of starship resource URLs that this person has piloted.
        </li>
        <li>
          <code>vehicles</code>
          <em>array</em>
          -- An array of vehicle resource URLs that this person has piloted.
        </li>
        <li>
          <code>url</code>
          <em>string</em>
          -- the hypermedia URL of this resource.
        </li>
        <li>
          <code>created</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was created.
        </li>
        <li>
          <code>edited</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was edited.
        </li>
      </ul>
      <p>
        <strong>Search Fields:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
        </li>
      </ul>
      <hr>
      <p>
        <a name="films"></a>
      </p>
      <h3>Films</h3>
      <p>A Film resource is a single film.</p>
      <p>
        <strong>Endpoints</strong>
      </p>
      <ul>
        <li>
          <code>/films/</code> -- get all the film resources
        </li>
        <li>
          <code>/films/:id/</code> -- get a specific film resource
        </li>
        <li>
          <code>/films/schema/</code> -- view the JSON schema for this resource
        </li>
      </ul>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/films/1/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json
{
    "characters": [
        "https://swapi.co/api/people/1/",
        ...
    ],
    "created": "2014-12-10T14:23:31.880000Z",
    "director": "George Lucas",
    "edited": "2014-12-12T11:24:39.858000Z",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "planets": [
        "https://swapi.co/api/planets/1/",
        ...
    ],
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "species": [
        "https://swapi.co/api/species/1/",
        ...
    ],
    "starships": [
        "https://swapi.co/api/starships/2/",
        ...
    ],
    "title": "A New Hope",
    "url": "https://swapi.co/api/films/1/",
    "vehicles": [
        "https://swapi.co/api/vehicles/4/",
        ...
    ]
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>title</code>
          <em>string</em>
          -- The title of this film
        </li>
        <li>
          <code>episode_id</code>
          <em>integer</em>
          -- The episode number of this film.
        </li>
        <li>
          <code>opening_crawl</code>
          <em>string</em>
          -- The opening paragraphs at the beginning of this film.
        </li>
        <li>
          <code>director</code>
          <em>string</em>
          -- The name of the director of this film.
        </li>
        <li>
          <code>producer</code>
          <em>string</em>
          -- The name(s) of the producer(s) of this film. Comma separated.
        </li>
        <li>
          <code>release_date</code>
          <em>date</em>
          -- The ISO 8601 date format of film release at original creator country.
        </li>
        <li>
          <code>species</code>
          <em>array</em>
          -- An array of species resource URLs that are in this film.
        </li>
        <li>
          <code>starships</code>
          <em>array</em>
          -- An array of starship resource URLs that are in this film.
        </li>
        <li>
          <code>vehicles</code>
          <em>array</em>
          -- An array of vehicle resource URLs that are in this film.
        </li>
        <li>
          <code>characters</code>
          <em>array</em>
          -- An array of people resource URLs that are in this film.
        </li>
        <li>
          <code>planets</code>
          <em>array</em>
          -- An array of planet resource URLs that are in this film.
        </li>
        <li>
          <code>url</code>
          <em>string</em>
          -- the hypermedia URL of this resource.
        </li>
        <li>
          <code>created</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was created.
        </li>
        <li>
          <code>edited</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was edited.
        </li>
      </ul>
      <p>
        <strong>Search Fields:</strong>
      </p>
      <ul>
        <li>
          <code>title</code>
        </li>
      </ul>
      <hr>
      <p>
        <a name="starships"></a>
      </p>
      <h3>Starships</h3>
      <p>A Starship resource is a single transport craft that has hyperdrive capability.</p>
      <p>
        <strong>Endpoints</strong>
      </p>
      <ul>
        <li>
          <code>/starships/</code> -- get all the starship resources
        </li>
        <li>
          <code>/starships/:id/</code> -- get a specific starship resource
        </li>
        <li>
          <code>/starships/schema/</code> -- view the JSON schema for this resource
        </li>
      </ul>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/starships/9/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json
{
    "MGLT": "10 MGLT",
    "cargo_capacity": "1000000000000",
    "consumables": "3 years",
    "cost_in_credits": "1000000000000",
    "created": "2014-12-10T16:36:50.509000Z",
    "crew": "342953",
    "edited": "2014-12-10T16:36:50.509000Z",
    "hyperdrive_rating": "4.0",
    "length": "120000",
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
    "max_atmosphering_speed": "n/a",
    "model": "DS-1 Orbital Battle Station",
    "name": "Death Star",
    "passengers": "843342",
    "films": [
        "https://swapi.co/api/films/1/"
    ],
    "pilots": [],
    "starship_class": "Deep Space Mobile Battlestation",
    "url": "https://swapi.co/api/starships/9/"
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
          <em>string</em>
          -- The name of this starship. The common name, such as "Death Star".
        </li>
        <li>
          <code>model</code>
          <em>string</em>
          -- The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
        </li>
        <li>
          <code>starship_class</code>
          <em>string</em>
          -- The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
        </li>
        <li>
          <code>manufacturer</code>
          <em>string</em>
          -- The manufacturer of this starship. Comma separated if more than one.
        </li>
        <li>
          <code>cost_in_credits</code>
          <em>string</em>
          -- The cost of this starship new, in galactic credits.
        </li>
        <li>
          <code>length</code>
          <em>string</em>
          -- The length of this starship in meters.
        </li>
        <li>
          <code>crew</code>
          <em>string</em>
          -- The number of personnel needed to run or pilot this starship.
        </li>
        <li>
          <code>passengers</code>
          <em>string</em>
          -- The number of non-essential people this starship can transport.
        </li>
        <li>
          <code>max_atmosphering_speed</code>
          <em>string</em>
          -- The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
        </li>
        <li>
          <code>hyperdrive_rating</code>
          <em>string</em>
          -- The class of this starships hyperdrive.
        </li>
        <li>
          <code>MGLT</code>
          <em>string</em>
          -- The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
        </li>
        <li>
          <code>cargo_capacity</code>
          <em>string</em>
          -- The maximum number of kilograms that this starship can transport.
        </li>
        <li>
          <code>consumables</code> *string
        </li>
        <li>The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.</li>
        <li>
          <code>films</code>
          <em>array</em>
          -- An array of Film URL Resources that this starship has appeared in.
        </li>
        <li>
          <code>pilots</code>
          <em>array</em>
          -- An array of People URL Resources that this starship has been piloted by.
        </li>
        <li>
          <code>url</code>
          <em>string</em>
          -- the hypermedia URL of this resource.
        </li>
        <li>
          <code>created</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was created.
        </li>
        <li>
          <code>edited</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was edited.
        </li>
      </ul>
      <p>
        <strong>Search Fields:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
        </li>
        <li>
          <code>model</code>
        </li>
      </ul>
      <hr>
      <p>
        <a name="vehicles"></a>
      </p>
      <h3>Vehicles</h3>
      <p>A Vehicle resource is a single transport craft that
        <strong>does not have</strong> hyperdrive capability.
      </p>
      <p>
        <strong>Endpoints</strong>
      </p>
      <ul>
        <li>
          <code>/vehicles/</code> -- get all the vehicle resources
        </li>
        <li>
          <code>/vehicles/:id/</code> -- get a specific vehicle resource
        </li>
        <li>
          <code>/vehicles/schema/</code> -- view the JSON schema for this resource
        </li>
      </ul>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/vehicles/4/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json

{
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [
        "https://swapi.co/api/films/1/"
    ],
    "url": "https://swapi.co/api/vehicles/4/",
    "vehicle_class": "wheeled"
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
          <em>string</em>
          -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
        </li>
        <li>
          <code>model</code>
          <em>string</em>
          -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
        </li>
        <li>
          <code>vehicle_class</code>
          <em>string</em>
          -- The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
        </li>
        <li>
          <code>manufacturer</code>
          <em>string</em>
          -- The manufacturer of this vehicle. Comma separated if more than one.
        </li>
        <li>
          <code>length</code>
          <em>string</em>
          -- The length of this vehicle in meters.
        </li>
        <li>
          <code>cost_in_credits</code>
          <em>string</em>
          -- The cost of this vehicle new, in Galactic Credits.
        </li>
        <li>
          <code>crew</code>
          <em>string</em>
          -- The number of personnel needed to run or pilot this vehicle.
        </li>
        <li>
          <code>passengers</code>
          <em>string</em>
          -- The number of non-essential people this vehicle can transport.
        </li>
        <li>
          <code>max_atmosphering_speed</code>
          <em>string</em>
          -- The maximum speed of this vehicle in the atmosphere.
        </li>
        <li>
          <code>cargo_capacity</code>
          <em>string</em>
          -- The maximum number of kilograms that this vehicle can transport.
        </li>
        <li>
          <code>consumables</code> *string
        </li>
        <li>The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.</li>
        <li>
          <code>films</code>
          <em>array</em>
          -- An array of Film URL Resources that this vehicle has appeared in.
        </li>
        <li>
          <code>pilots</code>
          <em>array</em>
          -- An array of People URL Resources that this vehicle has been piloted by.
        </li>
        <li>
          <code>url</code>
          <em>string</em>
          -- the hypermedia URL of this resource.
        </li>
        <li>
          <code>created</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was created.
        </li>
        <li>
          <code>edited</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was edited.
        </li>
      </ul>
      <p>
        <strong>Search Fields:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
        </li>
        <li>
          <code>model</code>
        </li>
      </ul>
      <hr>
      <p>
        <a name="species"></a>
      </p>
      <h3>Species</h3>
      <p>A Species resource is a type of person or character within the Star Wars Universe.</p>
      <p>
        <strong>Endpoints</strong>
      </p>
      <ul>
        <li>
          <code>/species/</code> -- get all the species resources
        </li>
        <li>
          <code>/species/:id/</code> -- get a specific species resource
        </li>
        <li>
          <code>/species/schema/</code> -- view the JSON schema for this resource
        </li>
      </ul>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/species/3/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json

{
    "average_height": "2.1",
    "average_lifespan": "400",
    "classification": "Mammal",
    "created": "2014-12-10T16:44:31.486000Z",
    "designation": "Sentient",
    "edited": "2014-12-10T16:44:31.486000Z",
    "eye_colors": "blue, green, yellow, brown, golden, red",
    "hair_colors": "black, brown",
    "homeworld": "https://swapi.co/api/planets/14/",
    "language": "Shyriiwook",
    "name": "Wookie",
    "people": [
        "https://swapi.co/api/people/13/"
    ],
    "films": [
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/2/"
    ],
    "skin_colors": "gray",
    "url": "https://swapi.co/api/species/3/"
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
          <em>string</em>
          -- The name of this species.
        </li>
        <li>
          <code>classification</code>
          <em>string</em>
          -- The classification of this species, such as "mammal" or "reptile".
        </li>
        <li>
          <code>designation</code>
          <em>string</em>
          -- The designation of this species, such as "sentient".
        </li>
        <li>
          <code>average_height</code>
          <em>string</em>
          -- The average height of this species in centimeters.
        </li>
        <li>
          <code>average_lifespan</code>
          <em>string</em>
          -- The average lifespan of this species in years.
        </li>
        <li>
          <code>eye_colors</code>
          <em>string</em>
          -- A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
        </li>
        <li>
          <code>hair_colors</code>
          <em>string</em>
          -- A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
        </li>
        <li>
          <code>skin_colors</code>
          <em>string</em>
          -- A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
        </li>
        <li>
          <code>language</code>
          <em>string</em>
          -- The language commonly spoken by this species.
        </li>
        <li>
          <code>homeworld</code>
          <em>string</em>
          -- The URL of a planet resource, a planet that this species originates from.
        </li>
        <li>
          <code>people</code>
          <em>array</em>
          -- An array of People URL Resources that are a part of this species.
        </li>
        <li>
          <code>films</code>
          <em>array</em>
          -- An array of Film URL Resources that this species has appeared in.
        </li>
        <li>
          <code>url</code>
          <em>string</em>
          -- the hypermedia URL of this resource.
        </li>
        <li>
          <code>created</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was created.
        </li>
        <li>
          <code>edited</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was edited.
        </li>
      </ul>
      <p>
        <strong>Search Fields:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
        </li>
      </ul>
      <hr>
      <p>
        <a name="planets"></a>
      </p>
      <h3>Planets</h3>
      <p>A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.</p>
      <p>
        <strong>Endpoints</strong>
      </p>
      <ul>
        <li>
          <code>/planets/</code> -- get all the planets resources
        </li>
        <li>
          <code>/planets/:id/</code> -- get a specific planets resource
        </li>
        <li>
          <code>/planets/schema/</code> -- view the JSON schema for this resource
        </li>
      </ul>
      <p>
        <strong>Example request:</strong>
      </p>
      <pre><code>http https://swapi.co/api/planets/1/
</code></pre>
      <p>
        <strong>Example response:</strong>
      </p>
      <pre><code>HTTP/1.0 200 OK
Content-Type: application/json

{
    "climate": "Arid",
    "created": "2014-12-09T13:50:49.641000Z",
    "diameter": "10465",
    "edited": "2014-12-15T13:48:16.167217Z",
    "films": [
        "https://swapi.co/api/films/1/",
        ...
    ],
    "gravity": "1",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "120000",
    "residents": [
        "https://swapi.co/api/people/1/",
        ...
    ],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "Dessert",
    "url": "https://swapi.co/api/planets/1/"
}
</code></pre>
      <p>
        <strong>Attributes:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
          <em>string</em>
          -- The name of this planet.
        </li>
        <li>
          <code>diameter</code>
          <em>string</em>
          -- The diameter of this planet in kilometers.
        </li>
        <li>
          <code>rotation_period</code>
          <em>string</em>
          -- The number of standard hours it takes for this planet to complete a single rotation on its axis.
        </li>
        <li>
          <code>orbital_period</code>
          <em>string</em>
          -- The number of standard days it takes for this planet to complete a single orbit of its local star.
        </li>
        <li>
          <code>gravity</code>
          <em>string</em>
          -- A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
        </li>
        <li>
          <code>population</code>
          <em>string</em>
          -- The average population of sentient beings inhabiting this planet.
        </li>
        <li>
          <code>climate</code>
          <em>string</em>
          -- The climate of this planet. Comma separated if diverse.
        </li>
        <li>
          <code>terrain</code>
          <em>string</em>
          -- The terrain of this planet. Comma separated if diverse.
        </li>
        <li>
          <code>surface_water</code>
          <em>string</em>
          -- The percentage of the planet surface that is naturally occurring water or bodies of water.
        </li>
        <li>
          <code>residents</code>
          <em>array</em>
          -- An array of People URL Resources that live on this planet.
        </li>
        <li>
          <code>films</code>
          <em>array</em>
          -- An array of Film URL Resources that this planet has appeared in.
        </li>
        <li>
          <code>url</code>
          <em>string</em>
          -- the hypermedia URL of this resource.
        </li>
        <li>
          <code>created</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was created.
        </li>
        <li>
          <code>edited</code>
          <em>string</em>
          -- the ISO 8601 date format of the time that this resource was edited.
        </li>
      </ul>
      <p>
        <strong>Search Fields:</strong>
      </p>
      <ul>
        <li>
          <code>name</code>
        </li>
      </ul>
      <h1>Helper libraries</h1>
      <hr>
      <p>There are a bunch of helper libraries available for consuming the Star Wars API in a native programming language.</p>
      <p>
        <img src="http://i.imgur.com/l02u363.gif" alt="helper_library_gif">
      </p>
      <p>
        <a name="python"></a>
      </p>
      <h2>Python</h2>
      <ul>
        <li>
          <a href="https://github.com/phalt/swapi-python">swapi-python</a> is built by the author of swapi, Paul Hallett.
        </li>
      </ul>
      <p>
        <a name="javascript"></a>
      </p>
      <h2>Javascript</h2>
      <ul>
        <li>
          <a href="https://github.com/cfjedimaster/SWAPI-Wrapper">SWAPI-Wrapper</a> By
          <a href="https://github.com/cfjedimaster">Raymond Camden</a>.
        </li>
        <li>
          <a href="https://www.npmjs.com/package/swapi-node">swapi-node</a> by
          <a href="https://github.com/lholmquist">Lucas Holmquist</a>.
        </li>
      </ul>
      <p>
        <a name="android"></a>
      </p>
      <h2>Android</h2>
      <ul>
        <li>
          <a href="https://github.com/Oleur/SWAPI-Android-SDK">SWAPI-Android-SDK</a> by
          <a href="https://github.com/Oleur">Julien Salvi</a>.
        </li>
      </ul>
      <p>
        <a name="java"></a>
      </p>
      <h2>Java</h2>
      <ul>
        <li>
          <a href="https://github.com/TheNightPhoenix/SWAPI-JAVA">swapi-java</a> by
          <a href="https://github.com/TheNightPhoenix">Abdallah Hodieb</a>.
        </li>
      </ul>
      <p>
        <a name="golang"></a>
      </p>
      <h2>Go</h2>
      <ul>
        <li>
          <a href="https://github.com/peterhellberg/swapi">swapi-go</a> by
          <a href="https://github.com/peterhellberg">Peter Hellberg</a>.
        </li>
        <li>
          <a href="https://github.com/leejarvis/swapi">swapi</a> by
          <a href="https://github.com/leejarvis">Lee Jarvis</a>.
        </li>
      </ul>
      <p>
        <a name="php"></a>
      </p>
      <h2>PHP</h2>
      <ul>
        <li>
          <a href="https://github.com/DraperStudio/Coruscant">Coruscant</a> by
          <a href="https://github.com/DraperStudio">DraperStudio</a>.
        </li>
        <li>
          <a href="https://github.com/rmasters/swapi-php">swapi-php</a> by
          <a href="https://github.com/rmasters">Ross Masters</a>.
        </li>
      </ul>
      <p>
        <a name="ruby"></a>
      </p>
      <h2>Ruby</h2>
      <ul>
        <li>
          <a href="https://github.com/emaraschio/swapi-ruby">swapi-ruby</a> by
          <a href="https://github.com/emaraschio">Ezequiel Maraschio</a>.
        </li>
        <li>
          <a href="https://github.com/philnash/tatooine">Tatooine</a> by
          <a href="https://github.com/philnash">Phil Nash</a>.
        </li>
        <li>
          <a href="https://github.com/igordcsouza/swgem">swgem</a> by
          <a href="https://github.com/igordcsouza">Igor Souza</a>.
        </li>
      </ul>
      <p>
        <a name="csharp"></a>
      </p>
      <h2>C Sharp</h2>
      <ul>
        <li>
          <a href="https://github.com/olcay/SharpTrooper">SharpTrooper</a> by
          <a href="https://github.com/olcay">Olcay Bayram</a>.
        </li>
      </ul>
      <p>
        <a name="objc"></a>
      </p>
      <h2>Objective C</h2>
      <ul>
        <li>
          <a href="https://github.com/njdehoog/Falcon">Falcon</a> by
          <a href="https://github.com/njdehoog">Niels de Hoog</a>.
        </li>
      </ul>
      <p>
        <a name="angular"></a>
      </p>
      <h2>Angular</h2>
      <ul>
        <li>
          <a href="https://github.com/unshift-devs/xyz-angular-swapi">xyz-angular-swapi</a> by
          <a href="https://github.com/cef62">Matteo Ronchi</a>.
        </li>
        <li>
          <a href="https://github.com/nickescallon/ne-swapi">ne-swapi</a> by
          <a href="https://github.com/nickescallon">Nick Escallon</a>.
        </li>
      </ul>
      <p>
        <a name="angular2"></a>
      </p>
      <h2>Angular 2</h2>
      <ul>
        <li>
          <a href="https://github.com/giammaleoni/ng2-swapi">ng2-swapi</a> by
          <a href="https://github.com/giammaleoni">Gianmaria Leoni</a>.
        </li>
      </ul>
      <p>
        <a name="r"></a>
      </p>
      <h2>R</h2>
      <ul>
        <li>
          <a href="https://github.com/Ironholds/rwars">rwars</a> by
          <a href="https://github.com/ironholds">Oliver Keyes</a>.
        </li>
      </ul>
      <p>
        <a name="fsharp"></a>
      </p>
      <h2>F#</h2>
      <ul>
        <li>
          <a href="https://github.com/evelinag/fsharp-swapi">fsharp-swapi</a> by
          <a href="http://evelinag.com/">Evelina Gabasova</a>.
        </li>
      </ul>
      <h2>Elixir</h2>
      <ul>
        <li>
          <a href="https://github.com/twhitacre/swapi.ex">swapi.ex</a> by
          <a href="http://timw.co/">Tim Whitacre</a>.
        </li>
        <li>
          <a href="https://github.com/mrkjlchvz/ex_swapi">ex_swapi</a> by
          <a href="http://markjoelchavez.com">Mark Chavez</a>.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Documentation",
  components: {
    "vue-markdown": VueMarkdown
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
