import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-ed72bae4.js";const t={},p=e(`<h4 id="通过-来访问内部导出的变量" tabindex="-1"><a class="header-anchor" href="#通过-来访问内部导出的变量" aria-hidden="true">#</a> 通过<code>.</code>来访问内部导出的变量</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="名称相同的命名空间会合并" tabindex="-1"><a class="header-anchor" href="#名称相同的命名空间会合并" aria-hidden="true">#</a> 名称相同的命名空间会合并</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命名空间可以嵌套" tabindex="-1"><a class="header-anchor" href="#命名空间可以嵌套" aria-hidden="true">#</a> 命名空间可以嵌套</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">namespace</span> <span class="token constant">B</span> <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简化命名空间" tabindex="-1"><a class="header-anchor" href="#简化命名空间" aria-hidden="true">#</a> 简化命名空间</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">namespace</span> <span class="token constant">B</span> <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">.</span><span class="token constant">B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function o(l,i){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","13.namespace命名空间.html.vue"]]);export{u as default};
