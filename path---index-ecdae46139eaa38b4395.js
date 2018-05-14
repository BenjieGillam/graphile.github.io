webpackJsonp([0x81b8806e4260],{385:function(a,n){a.exports={data:{remark:{html:'<!-- **************************************** -->\n<header class=\'hero\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h1 id="graphile"><a href="#graphile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Graphile</h1>\n<h3>\n  Tools for building performant\n  <br />\n  pluggable GraphQL APIs.\n</h3>\n</div>\n</div>\n</div>\n</div>\n</header>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="postgraphile"><a href="#postgraphile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PostGraphile</h2>\n<h3 id="instant-graphql-api-for-postgresql-database"><a href="#instant-graphql-api-for-postgresql-database" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Instant GraphQL API for PostgreSQL database</h3>\n<p>Auto-discovers tables, columns, relations, procedures and more; runs a\nhigh-performance secure GraphQL API server that adheres to best practices.</p>\n</div>\n</div>\n</div>\n<div class=\'row\'>\n<div class=\'col-lg-6 mb3 col-md-9 col-xs-12\'>\n<h5 id="just-concentrate-on-your-database"><a href="#just-concentrate-on-your-database" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Just concentrate on your database</h5>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> app_public<span class="token punctuation">.</span>superheroes <span class="token punctuation">(</span>\n  id <span class="token keyword">serial</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n  name <span class="token keyword">text</span> <span class="token operator">not</span> <span class="token boolean">null</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> superheroes <span class="token keyword">ENABLE</span> <span class="token keyword">ROW</span> <span class="token keyword">LEVEL</span> SECURITY<span class="token punctuation">;</span></code></pre>\n      </div>\n</div><!-- /col-6 -->\n<div class=\'col-lg-6 mb3 col-md-9 col-xs-12\'>\n<h5 id="run-a-fully-fledged-graphql-api-in-one-command"><a href="#run-a-fully-fledged-graphql-api-in-one-command" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run a fully-fledged GraphQL API in one command</h5>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">postgraphile\n  -c postgres://localhost/superheroes\n  --schema app_public\n  --watch\n  --jwt-secret <span class="token string">"<span class="token variable">$JWT_SECRET</span>"</span></code></pre>\n      </div>\n</div>\n</div>\n<br />\n<div class=\'flex\'>\n<a class=\'strong-link\' href=\'/postgraphile/\'>More about PostGraphile <span class=\'fa fa-fw fa-long-arrow-right\' /></a>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="graphile-build"><a href="#graphile-build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Graphile Build</h2>\n<h3 id="high-performance-pluggable-graphql-schema-tools"><a href="#high-performance-pluggable-graphql-schema-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>High-performance pluggable GraphQL schema tools</h3>\n<p>Prefer building your GraphQL APIs by hand? By using our <a href="/graphile-build/look-ahead/">look-ahead\nfeature</a> your code can know what\'s coming and make\nsure it requests the correct fields from your data source ahead of time,\nleading to fewer round-trips and higher performance. Our <a href="/graphile-build/plugins/">plugin\narchitecture</a> allows you to extend or enhance your\nGraphQL API as your needs evolve over time, and use community-built plugins to\nincrease developer productivity.</p>\n</div>\n</div>\n</div>\n<div class=\'row\'>\n<div class=\'col-lg-6 mb3 col-md-9 col-xs-12\'>\n<h5 id="graphql"><a href="#graphql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">graphql</code></h5>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> MyType <span class="token operator">=</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">new</span> <span class="token class-name">GraphQLObjectType</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span>    name<span class="token punctuation">:</span> <span class="token string">\'MyType\'</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span></code></pre>\n      </div>\n</div>\n<div class=\'col-lg-6 mb3 col-md-9 col-xs-12\'>\n<h5 id="graphile-build-1"><a href="#graphile-build-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">graphile-build</code></h5>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> MyType <span class="token operator">=</span>\n<span class="gatsby-highlight-code-line">  <span class="token function">newWithHooks</span><span class="token punctuation">(</span>GraphQLObjectType<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n</span>    name<span class="token punctuation">:</span> <span class="token string">\'MyType\'</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span></code></pre>\n      </div>\n</div>\n</div>\n<div class=\'flex\'>\n<div>\n<p>Graphile Build is the core of PostGraphile - we recommend that you get started\nwith PostGraphile before you graduate to using Graphile Build directly.</p>\n<p><a class=\'strong-link\' href=\'/postgraphile/\'>Start with PostGraphile <span class=\'fa fa-fw fa-long-arrow-right\' /></a>\n<a class=\'strong-link\' href=\'/graphile-build/\'>More about Graphile Build <span class=\'fa fa-fw fa-long-arrow-right\' /></a></p>\n<div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="fully-graphql-compatible"><a href="#fully-graphql-compatible" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fully GraphQL compatible</h2>\n<p>Graphile uses the <a href="http://graphql.org/graphql-js/">reference GraphQL\nimplementation</a> under the hood, so you know it\'s spec compliant. This also\nmeans you can mix it into existing GraphQL APIs, or mix existing GraphQL object\ntypes into it (so long as they use the reference GraphQL implementation too).</p>\n<p>PostGraphile supports GraphQL best practices, including: <a href="https://facebook.github.io/relay/graphql/connections.htm">cursor-based\nconnection\npagination</a>, <a href="https://facebook.github.io/relay/graphql/objectidentification.htm">global\nobject\nidentification</a>,\nand the <a href="https://facebook.github.io/relay/graphql/mutations.htm">Relay Input Object Mutations\nSpecification</a>; plus\nit\'s built on Graphile Build technology so it can be expanded using Graphile\nBuild plugins.</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section class=\'mailinglist\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h3>\nQuestions, comments or feedback?\n<br />\nEmail <a href="mailto:info@graphile.org?subject=Graphile%20question/comment/feedback:)">info@graphile.org</a>\n</h3>\n<form action="//graphile.us16.list-manage.com/subscribe/post?u=d103f710cf00a9273b55e8e9b&amp;id=c3a9eb5c4e" method="post"\nid="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\n  <div id="mc_embed_signup_scroll" class="center hero-block">\n    <p>Keep up to date on Graphile and PostGraphile features/changes.\n    Subscribe to our occasional announcements newsletter:</p>\n    <div class="mc-field-group form-inline justify-content-center">\n      <div class=\'form-group\'>\n        <div class="mb2">\n          <label class="label--small" for="mce-EMAIL">Email address:</label>\n        </div>\n          <input\n            autocapitalize="off"\n            autocomplete="off"\n            autocorrect="off"\n            class="input-text mb0-ns mb1"\n            id="mce-EMAIL"\n            name="EMAIL"\n            spellcheck="false"\n            type="email"\n            value=""\n          />\n        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d103f710cf00a9273b55e8e9b_c3a9eb5c4e" tabindex="-1" value="" /></div>\n        <input\n          class="button--solid"\n          id="mc-embedded-subscribe"\n          name="subscribe"\n          type="submit"\n          value="Subscribe"\n        />\n      </div>\n      <div id="mce-responses" class="clear">\n        <div class="response" id="mce-error-response" style="display:none"></div>\n        <div class="response" id="mce-success-response" style="display:none"></div>\n      </div>\n    </div>\n  </div>\n</form>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->',frontmatter:{path:"/",title:"Tools to build extensible and performant GraphQL APIs"}}},pathContext:{layout:"marketing"}}}});
//# sourceMappingURL=path---index-ecdae46139eaa38b4395.js.map