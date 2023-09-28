const e=JSON.parse(`{"key":"v-1177a66d","path":"/notebook/TS%E7%AC%94%E8%AE%B0/12.keyof.html","title":"keyof","lang":"zh-CN","frontmatter":{"title":"keyof","date":"2023-09-27T00:00:00.000Z","category":["TS"],"description":"获取key的联合类型 const obj = { \\ta: 5, \\t3: 'daw', }; type ObjKeys = keyof typeof obj; // type ObjKeys = \\"a\\" | 3","head":[["meta",{"property":"og:url","content":"https:///blog/blog/notebook/TS%E7%AC%94%E8%AE%B0/12.keyof.html"}],["meta",{"property":"og:site_name","content":"Stargazer"}],["meta",{"property":"og:title","content":"keyof"}],["meta",{"property":"og:description","content":"获取key的联合类型 const obj = { \\ta: 5, \\t3: 'daw', }; type ObjKeys = keyof typeof obj; // type ObjKeys = \\"a\\" | 3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-28T08:20:27.000Z"}],["meta",{"property":"article:published_time","content":"2023-09-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-28T08:20:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"keyof\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-28T08:20:27.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1695889227000,"updatedTime":1695889227000,"contributors":[{"name":"stargazer","email":"1601778118@qq.com","commits":1}]},"readingTime":{"minutes":0.24,"words":71},"filePathRelative":"notebook/TS笔记/12.keyof.md","localizedDate":"2023年9月27日","excerpt":"<p>获取key的联合类型</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> obj <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n\\ta<span class=\\"token operator\\">:</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token number\\">3</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'daw'</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">ObjKeys</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">keyof</span> <span class=\\"token keyword\\">typeof</span> obj<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// type ObjKeys = \\"a\\" | 3</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};